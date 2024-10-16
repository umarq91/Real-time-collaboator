"use client"

import { useHistory, useSelf,useCanRedo,useCanUndo,
    useMutation,
    useStorage,
    useOthersMapped
 } from "@/liveblocks.config";
import { Info } from "./info";
import {nanoid} from "nanoid"

import { Camera, CanvasMode, CanvasState, Color, LayerType,Point, Side, XYWH } from "@/types/canvas";

import { Toolbar } from "./toolbar";
import { Participants } from "./Participants";
import React, { useCallback, useMemo, useState } from "react";
import { CursorsPresnce } from "./cursors-presnce";
import { connectionIdToColor, pointerEventToCanvasPoint, resizeBounds } from "@/lib/utils";
import { LiveObject } from "@liveblocks/client";
import { LayerPreview } from "./layer-preview";
import { SelectionBox } from "./selection-box";
import { set } from "date-fns";


const MAX_LAYERS =100;
interface CavasProps{
    boardId:string
}

const Canvas = ({boardId}:CavasProps) => {
//    let info = useSelf((me)=>me.info);
const layerIds = useStorage((root)=>root.layerIds)
const [canvasState,setCanvasState] = useState<CanvasState>({
    mode:CanvasMode.None
})
const [camera,setCamera] = useState<Camera>({x:0,y:0})
const [lastUsedColor,setLastUsedColor] = useState<Color>({
    r:0,
    g:0,
    b:0
})
    const insertLayer = useMutation(
        ({ storage, setMyPresence }, LayerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Text | LayerType.Note, position: Point) => {
          const liveLayers = storage.get("layers");
          if(liveLayers.size>=MAX_LAYERS){
            return;
          }
          const liveLayerIds = storage.get('layerIds')
          const layerId = nanoid();
          const layer = new LiveObject({
            type:LayerType,
            x:position.x,
            y:position.y,
            height:100,
            width:100,
            fill:lastUsedColor
          })
          liveLayerIds.push(layerId);
          liveLayers.set(layerId,layer);
          setMyPresence({selection:[layerId]},{addToHistory:true})
          setCanvasState({mode:CanvasMode.None})
        }
 ,
        [lastUsedColor]
    );

const resizeSelectedLayer = useMutation((
  {storage,self},
  point:Point
)=>{
if(canvasState.mode!==CanvasMode.Resizing){
  return;
}

const bounds = resizeBounds(
  canvasState.initialBounds,
  canvasState.corner,
  point
)

const liveLayers  = storage.get("layers")
const layer = liveLayers.get(self.presence.selection[0]);

if(layer){
  layer.update(bounds)
}
},[canvasState])


// it won't be including layertype.pen becuase it will run its own insert function

const history = useHistory();
const canRedo = useCanRedo();
const canUndo = useCanUndo();


const onResizeHandlerPointerDown = useCallback((
  corner:Side,
  initialBounds:XYWH
)=>{
  
history.pause();
setCanvasState({
  mode:CanvasMode.Resizing,
  initialBounds,
  corner
})
},[history])

const onWheel = useCallback((e:React.WheelEvent)=>{
    setCamera((camera)=>({
        x:camera.x - e.deltaX,
        y:camera.y + e.deltaY
    }))
    },[])
       
const onPointerMove = useMutation(
  ({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault();

    const current = pointerEventToCanvasPoint(e,camera);

if(canvasState.mode===CanvasMode.Resizing){
  resizeSelectedLayer(current)
  
}

    
    setMyPresence({ cursor: current });
  },
  [canvasState , resizeSelectedLayer,camera] 
);

const onPointerLeave = useMutation(
  ({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault();
    setMyPresence({ cursor: null });
  },
  []
);

const onPointerUp = useMutation((
  {},
  e
)=>{
const point = pointerEventToCanvasPoint(e,camera);


if(canvasState.mode===CanvasMode.Inserting){
  insertLayer(canvasState.layerType,point);
}else{
  setCanvasState({
    mode:CanvasMode.None
  })
}
history.resume();
},[
  camera,
  canvasState,
  history,
  insertLayer
])

const selections = useOthersMapped((other)=>other.presence.selection)

const onLayerPointerDown = useMutation((
    {self,setMyPresence},
    e:React.PointerEvent,
    layerId:string
  )=>{
  if(canvasState.mode===CanvasMode.Pencil ||
    canvasState.mode=== CanvasMode.Inserting){
      return
    }

    history.pause();
    e.stopPropagation();

    const point = pointerEventToCanvasPoint(e,camera);

    if(!self.presence.selection.includes(layerId)){
      setMyPresence({selection:[layerId]},{addToHistory:true})
    }
    setCanvasState({mode:CanvasMode.Translating , current:point})

  },[
    setCanvasState,
    camera,
    history,
    canvasState.mode
  ])

const layerIdsToColorSelection = useMemo(()=>{
  const layerIdsToColorSelection : Record<string,string> = {}

  for (const user of selections){
    const [connectionId,selection] = user;
    for(const layerId of selection){
      layerIdsToColorSelection[layerId] = connectionIdToColor(connectionId);
    }
  }
  return layerIdsToColorSelection
},[selections])
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
onPointerUp={onPointerUp}
className="h-[100vh] w-[100vw]"
onWheel={onWheel}
onPointerMove={onPointerMove}
onPointerLeave={onPointerLeave}
>
    <g 
    style={{
        transform: `translae(${camera.x}px,${camera.y}px)`
    }}
    >
    {layerIds.map((layerId)=>(
      <LayerPreview
        key={layerId}
        id={layerId}
        onLayerPointerDown={onLayerPointerDown}
        selectionColor={layerIdsToColorSelection[layerId]}
      />
    ))}
    <SelectionBox
   onResizeHandlePointerDown={onResizeHandlerPointerDown}
    />
        <CursorsPresnce/>
    </g>
</svg>
        </main>
    )
}

export default Canvas;