import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";
import {
    Circle,
    Undo2,
  } from "lucide-react";

export const Info = () => {
    return(
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12
        flex items-center shadow-md
        ">
            {/* TODO: Add info */}
            <Link href={"/"} className="flex"> 
            Go Back  <IoReturnUpBackOutline />
            </Link>
        </div>
    )
}

Info.Skeleton = function InfoSkeleton(){
    return(
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12
        flex items-center shadow-md w-[300px]
        "/>

    )
}