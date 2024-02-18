"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";


export const EmptyBoards = ()=>{
        const {organization} = useOrganization();


    // const create = useMutation(api.board.create) // instead of creating like and addding loading state
   const {pending,mutate} =  useApiMutation(api.board.create); // made a loading state and create inside a hook so its re usable

    const onclick=()=>{
        if(!organization) return ;

        // creates a board
        mutate({          

            orgId:organization.id,
            title:"Untitled"
        }).then((id)=>{
            toast.success('Board created!')
        }).catch(()=>{
            toast.error("Failed to create board")
        })
    }

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <Image 
            src="/note.svg"
            height={110}
            width={110}
            alt="Emtpy"
            />
            <h2 className="text-2xl font-semibold mt-6">
              Create your first board!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onclick}>
                Create board
                </Button>
            </div>
        </div>
    )
}