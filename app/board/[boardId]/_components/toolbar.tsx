import {
  Circle,
  MousePointer,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import ToolButton from "./tool-button";
import { CanvasMode, CanvasState,LayerType } from "@/types/canvas";



interface ToolbarProps {
  canvasState: CanvasState
  setConvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({
  canvasState,
  setConvasState,
  undo,redo,
  canUndo,canRedo
}: ToolbarProps) => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          onClick={() => setConvasState({mode: CanvasMode.None})}
          label="Select"
          icon={MousePointer2}
          isActive={
            canvasState.mode === CanvasMode.None ||
             canvasState.mode === CanvasMode.Translating || 
             canvasState.mode === CanvasMode.Resizing || 
             canvasState.mode === CanvasMode.SelectionNet ||
             canvasState.mode === CanvasMode.Pressing
          }
        />
        <ToolButton
          onClick={() => setConvasState({
            mode: CanvasMode.Inserting,
            layerType:LayerType.Text          })}
          label="Text"
          icon={Type}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType===LayerType.Text
          }
        />
        <ToolButton
          onClick={() =>setConvasState({
            mode: CanvasMode.Inserting,
            layerType:LayerType.Note
          })}
          label="Sticky note"
          icon={StickyNote}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType===LayerType.Note
          }
        />

        <ToolButton
             label="Rectangle"
             icon={Square}
           onClick={() =>setConvasState({
            mode: CanvasMode.Inserting,
            layerType:LayerType.Rectangle
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType===LayerType.Rectangle
          }
        />

        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() =>setConvasState({
            mode: CanvasMode.Inserting,
            layerType:LayerType.Ellipse
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType===LayerType.Ellipse
          }
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() =>setConvasState({
            mode: CanvasMode.Pencil,
          })}
          isActive={
            canvasState.mode === CanvasMode.Pencil 
          }
        />
      </div>

      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
      <ToolButton
                onClick={undo}
                isActive={false}
               label="Undo"
                icon={Undo2}
                isDisabled={!canUndo}
                />
                      <ToolButton
                onClick={redo}
                isActive={false}
               label="Redo"
               isDisabled={!canRedo}

                icon={Redo2}
                />
      </div>
    </div>
  );
};

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 bg-white rounded-md p-1.5 w-[52px] flex items-center shadow-md h-[350px]"></div>
  );
};
