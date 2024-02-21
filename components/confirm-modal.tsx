"use client"


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { DialogContent } from "./ui/dialog"
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog"


interface ConfirmModalProps {
    children: React.ReactNode
    description?: string
    onConfirm: () => void
    disabled?: boolean
    header: string
}

export const ConfirmModal = ({ children, description, onConfirm, disabled, header }: ConfirmModalProps) => {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>

                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel> Cancel </AlertDialogCancel>
                    <AlertDialogAction disabled={disabled} onClick={()=>onConfirm()}>
                       Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    )
}

