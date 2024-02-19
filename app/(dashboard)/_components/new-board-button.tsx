import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { toast } from "sonner"

interface Props{
    orgId:string,
    disabled?:boolean
}

export const NewBoardButton =({
    orgId,disabled
}:Props)=>{



     const {mutate,pending} = useApiMutation(api.board.create)

    const onclick = ()=>{
        mutate({
            orgId,
            title: "Hi Umar"
        }).then((id)=>{
            toast.success("Board created")
            // Todo : Redirect to /board/id
        })
        .catch(()=> toast.error("Failed to create board"))
    }
    return(
        <button
        disabled={pending || disabled}
        onClick={onclick}
        className={cn(
            "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
            (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
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