import { Skeleton } from "@/components/ui/skeleton"

export const Participants = () => {
    return(
        <div className="absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
           List of Users
        </div>
    )
}

Participants.Skeleton=function ParticipantsSkeleton(){
    return(
        <div className="absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px] h-12"/>
       
    )
}