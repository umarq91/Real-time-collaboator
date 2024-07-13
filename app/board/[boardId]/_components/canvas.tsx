"use client"

import { useHistory, useSelf,useCanRedo,useCanUndo } from "@/liveblocks.config";
import { Info } from "./info";

import { CanvasMode, CanvasState } from "@/types/canvas";

import { Toolbar } from "./toolbar";
import { Participants } from "./Participants";
import { useState } from "react";

interface CavasProps{
    boardId:string
}

const Canvas = ({boardId}:CavasProps) => {
//    let info = useSelf((me)=>me.info);

const [canvasState,setCanvasState] = useState<CanvasState>({
    mode:CanvasMode.None
})
   
const history = useHistory();
const canRedo = useCanRedo();
const canUndo = useCanUndo();

    return(
        <main
        className="h-full w-full relative bg-neutral-100 touch-none"
        >
            <Info/>
            <Participants/>
            <Toolbar
            canvasState={canvasState}
        setConvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
/>
        </main>
    )
}

export default Canvas;