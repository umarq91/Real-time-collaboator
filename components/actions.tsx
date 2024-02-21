"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
} from "./ui/dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./ui/button";



interface ActionProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps['side'];
    sideOfset?: DropdownMenuContentProps['sideOffset'];
    id: string;
    title: string
}


export const Actions = ({
    children, side, sideOfset,
    id, title
}: ActionProps) => {
const{mutate,pending } = useApiMutation(api.board.remove)

    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
            .then(() => toast.success("Link copied"))
            .catch(() => toast.error("Failed to copy link"))
    }


    const onDelete = () => {
        mutate({ id })
            .then(() => toast.success("Board deleted"))
            .catch(() => toast.error("Failed to delete board"))
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                {children}
            </DropdownMenuTrigger>

            <DropdownMenuContent
                side={side}
                sideOffset={sideOfset}
                onClick={(e) => e.stopPropagation()}
                className="w-60"
            >
                <DropdownMenuItem
                    className=""
                    onClick={onCopyLink}
                >
                    <Link2 className="h-4 w-4 mr-2" />
                    Copy board link
                </DropdownMenuItem>

        <ConfirmModal
        header="Delete board?"
        description="Are you sure you want to delete this board? This action cannot be undone."
        disabled={pending}
        onConfirm={onDelete}
        >
                <Button variant="ghost"
                className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
                >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                </Button>
                        </ConfirmModal>
                    

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

