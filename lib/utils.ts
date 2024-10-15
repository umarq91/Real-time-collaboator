import { Camera, Color } from "@/types/canvas"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
"#DC2626",
"#F59E0B",
"#059669",
"#7C3AED",
"#DB2777",
"#14B8A6",
"#EF4444",
"#84CC16",
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId:number) {
  return COLORS[connectionId % COLORS.length]
}


export function pointerEventToCanvasPoint(e:React.PointerEvent,camera:Camera) {
  return {
    x:Math.round(e.clientX - camera.x),
    y:Math.round(e.clientY - camera.y)
  }
}


export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g
    .toString(16)
    .padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}