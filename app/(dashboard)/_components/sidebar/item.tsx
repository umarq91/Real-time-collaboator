"use client"

import Image from "next/image"
import{
    useOrganization,useOrganizationList
} from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import Hint from "@/components/hint"

interface ItemProps {
    id:string,
    name:string,
    imageUrl:string
}

export const Item = ({id,name,imageUrl}:ItemProps)=>{

    const {organization} = useOrganization(); // Hook to get the current organization
    const {setActive} = useOrganizationList(); // Hook to set the active organization

    const isActive = organization?.id===id;

    const onClick=()=>{

        if(!setActive) return ;
        
        setActive?.({ organization:id }) // Call setActive with optional chaining
    }

    return(
        <div className="aspect-square relative">
            <Hint label={name}
            side="right" align="start"
             sideOffset={15}
            >

                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    onClick={onClick}
                    className={cn(
                        "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
                        isActive && "opacity-100"
                    )}
                />
            </Hint>

        </div>
    )
}