"use client"
import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorpickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorpickerProps) => {
  // Define a set of random colors
  const colors: Color[] = [
    { r: 243, g: 82, b: 35 },   
    { r:255, g: 249, b: 177 },    
    { r: 68, g: 282, b: 99 },    
    { r: 39, g: 142, b: 237 },  
    { r: 155, g: 105, b: 245 },
    { r: 252, g:142, b: 42 },  
    { r: 238, g: 130, b: 238 },
    { r: 0, g: 0, b: 0 }


  ];

  return (
    <div className="flex gap-2 flex-wrap items-center max-w-[164px] pr-2 mr- border-r border-neutral-200">
      {colors.map((color, index) => (
        <ColorButton key={index} onClick={onChange} color={color} />
      ))}
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 border rounded-md border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};
