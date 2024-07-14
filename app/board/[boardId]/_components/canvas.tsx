"use client"

import { useHistory, useSelf,useCanRedo,useCanUndo,
    useMutation
 } from "@/liveblocks.config";
import { Info } from "./info";

import { Camera, CanvasMode, CanvasState } from "@/types/canvas";

import { Toolbar } from "./toolbar";
import { Participants } from "./Participants";
import React, { useCallback, useState } from "react";
import { CursorsPresnce } from "./cursors-presnce";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface CavasProps{
    boardId:string
}

const Canvas = ({boardId}:CavasProps) => {
//    let info = useSelf((me)=>me.info);

const [canvasState,setCanvasState] = useState<CanvasState>({
    mode:CanvasMode.None
})
const [camera,setCamera] = useState<Camera>({x:0,y:0})
const onWheel = useCallback((e:React.WheelEvent)=>{
setCamera((camera)=>({
    x:camera.x - e.deltaX,
    y:camera.y + e.deltaY
}))
},[])
   
const history = useHistory();
const canRedo = useCanRedo();
const canUndo = useCanUndo();

const onPointerMove = useMutation(
  ({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault();

    const current = pointerEventToCanvasPoint(e,camera);


    console.log({current});
    
    setMyPresence({ cursor: current });
  },
  []
);

const onPointerLeave = useMutation(
  ({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault();
    setMyPresence({ cursor: null });
  },
  []
);

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
<svg 
className="h-[100vh] w-[100vw]"
onWheel={onWheel}
onPointerMove={onPointerMove}
onPointerLeave={onPointerLeave}
>
    <g>
        <CursorsPresnce/>
    </g>
</svg>
        </main>
    )
}

export default Canvas;