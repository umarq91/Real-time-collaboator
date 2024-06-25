import {
  Circle,
  MousePointer,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import ToolButton from "./tool-button";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          onClick={() => {}}
          isActive={false}
          label="Pencil"
          icon={MousePointer}
        />
        <ToolButton
          onClick={() => {}}
          isActive={false}
          label="Text"
          icon={Type}
        />
        <ToolButton
          onClick={() => {}}
          isActive={false}
          label="Sticky note"
          icon={StickyNote}
        />

        <ToolButton
          onClick={() => {}}
          isActive={false}
          label="Rectangle"
          icon={Square}
        />

        <ToolButton
          onClick={() => {}}
          isActive={false}
          label="Ellipse"
          icon={Circle}
        />
        <ToolButton
          onClick={() => {}}
          isActive={false}
          label="Pen"
          icon={Pencil}
        />
      </div>

      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
      <ToolButton
                onClick={()=>{}}
                isActive={false}
               label="Undo"
                icon={Undo2}
                isDisabled={true}
                />
                      <ToolButton
                onClick={()=>{}}
                isActive={false}
               label="Redo"
               isDisabled={true}

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
