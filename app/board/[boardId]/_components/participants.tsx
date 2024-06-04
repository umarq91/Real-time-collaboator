"use client";

import { useOthers,useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";
import { getRandomColor } from "@/lib/utils";

const Max_PARTICIPANTS = 2;
export const Participants = () => {
  const otherUsers = useOthers();
  const currentUser= useSelf()

const hasMoreUsers = otherUsers.length > Max_PARTICIPANTS;
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
     <div className="flex gap-x-2 ">
    {otherUsers.slice(0, Max_PARTICIPANTS)
    .map(({connectionId,info}) => {
       return <UserAvatar key={connectionId} 
       borderColor={getRandomColor(connectionId)}
        fallback={info?.name?.[0] || "T"}
        src={info?.picture} name={info?.name}/>
        
    })}


    {currentUser && (
      <UserAvatar
        fallback={currentUser.info?.name?.[0] || "T"}
        src={currentUser.info?.picture}
        borderColor={getRandomColor(currentUser.connectionId)}

        name={`${currentUser.info?.name} (You)`}/>
    )}


{hasMoreUsers && (
    <UserAvatar
    name={`+${otherUsers.length - Max_PARTICIPANTS} More`}
    borderColor={getRandomColor(currentUser.connectionId)}
    fallback={`+${otherUsers.length - Max_PARTICIPANTS}`}
    />
)}

     </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px] h-12" />
  );
};
