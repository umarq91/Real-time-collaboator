"use client"

import { useSelf } from "@/liveblocks.config";
import { Info } from "./info";

import { Toolbar } from "./toolbar";
import { Participants } from "./Participants";

interface CavasProps{
    boardId:string
}

const Canvas = ({boardId}:CavasProps) => {
   let info = useSelf((me)=>me.info);


   
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