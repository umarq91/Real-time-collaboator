"use client"

import {DropdownMenuContentProps  } from "@radix-ui/react-dropdown-menu"
import {
     DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem ,
    DropdownMenuSeparator
} from "./ui/dropdown-menu";



interface ActionProps{
    children:React.ReactNode;
    side?: DropdownMenuContentProps['side'];
    sideOfset?:DropdownMenuContentProps['sideOffset'];
    id:string;
    title:string
}


export const Actions = ({
    children,side,sideOfset,
    id,title
}:ActionProps) => {
 
    return (
      <DropdownMenu>
            <DropdownMenuTrigger asChild>

                {children}
            </DropdownMenuTrigger>
      </DropdownMenu>
    )
}

