"use client"

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { memo } from "react"
import { Rectangle } from "./rectangle";
import { Ellipse } from "./ellipse";
import { Text } from "./text";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e:React.PointerEvent,id:string) => void; //todo : fix types
  selectionColor?: string
}
export const LayerPreview = memo(({
  id, onLayerPointerDown, selectionColor
}: LayerPreviewProps) => {

  const layer = useStorage((root) => root.layers.get(id));

  if (!layer) {
    return null
  }

  switch (layer.type) {
    case LayerType.Text:
      return (
        <Text
        id={id}
        layer={layer}
        onPointerDown={onLayerPointerDown}
        selectionColor={selectionColor}
        />
      )
    case LayerType.Ellipse:
      return (
        <Ellipse
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    case LayerType.Rectangle:
      return (
        <Rectangle
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    default:
      console.warn("unknown layer type");
      return null;
  }
})

LayerPreview.displayName = "LayerPreview"