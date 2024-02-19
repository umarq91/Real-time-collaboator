import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"

interface Props{
    orgId:string,
    disabled?:boolean
}

export const NewBoardButton =({
    orgId,disabled
}:Props)=>{
    return(
        <button
        disabled={disabled}
        onClick={()=>{}}
        className={cn(
            "col-span-1 aspect-[100/127] bg-blue-500 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
            disabled && "opacity-75"
        )}
        >
            <div  /> 
            <Plus className="h-12 w-12 text-white stroke-1"/>
            <p className="text-xs text-white font-light">
                New Board
            </p>
        </button>
    )
}