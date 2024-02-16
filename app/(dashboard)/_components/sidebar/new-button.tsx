"use client"

import { CreateOrganization } from "@clerk/nextjs"
import { Plus } from "lucide-react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Hint from "@/components/hint"

const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="Create Organization" side="right"   // tooltop that shows what this button has to do
                        align="start" sideOffset={10}
                    >
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white" />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>


            {/*  This Dialog Content Opens up Modal and inside of this opens up what ever i want in MODAL */}
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    );
}

export default NewButton;
