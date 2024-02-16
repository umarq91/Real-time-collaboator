import {
    Tooltip, TooltipTrigger,
    TooltipProvider, TooltipContent
} from "@radix-ui/react-tooltip"

interface HintProps{
    label:string,
    children:React.ReactNode,
    side?:"top" | "bottom" | "left" | "right",
    align?:"start"|"center" | "end",
    sideOffset?:number,
    alignOffSet?:number;
}
    

    const Hint = ({
        label,
        children,
        side,
        align,
        sideOffset,
        alignOffSet
    }:HintProps) => {
  return (
  <TooltipProvider>

    <Tooltip delayDuration={100}>
        
        <TooltipTrigger asChild>
            {children}

        </TooltipTrigger>
        <TooltipContent
        className="text-white bg-black border-black"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffSet}
        >
            <p className=" text-xs p-1 capitalize">
            {label}
            </p>
        </TooltipContent>
    </Tooltip>

  </TooltipProvider>
  )
}

export default Hint