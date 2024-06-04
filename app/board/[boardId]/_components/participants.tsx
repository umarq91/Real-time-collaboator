"use client";

import { useOthers,useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";

const Max_PARTICIPANTS = 2;
export const Participants = () => {
  const otherUsers = useOthers();
  const currentUser= useSelf()
// console.log(others);
const hasMoreUsers = otherUsers.length > Max_PARTICIPANTS;
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
     <div className="flex gap-x-2 ">
    {otherUsers.slice(0, Max_PARTICIPANTS)
    .map(({connectionId,info}) => (
        <UserAvatar key={connectionId} 
        fallback={info?.name?.[0] || "T"}
        src={info?.picture} name={info?.name}/>
        
    ))}


    {currentUser && (
      <UserAvatar
        fallback={currentUser.info?.name?.[0] || "T"}
        src={currentUser.info?.picture}
        
        name={`${currentUser.info?.name} (You)`}/>
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
