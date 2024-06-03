"use client"

import { useSelf } from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CavasProps{
    boardId:string
}

const Canvas = ({boardId}:CavasProps) => {
   let info = useSelf((me)=>me.info);
    
   console.log(info);
   
    return(
        <main
        className="h-full w-full relative bg-neutral-100 touch-none"
        >
            <Info/>
            <Participants/>
            <Toolbar/>
        </main>
    )
}

export default Canvas;