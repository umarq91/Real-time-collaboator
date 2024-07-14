"use client"


import {memo} from "react"

import { useOthersConnectionIds } from "@/liveblocks.config";
import { Cursor } from "./cursor";

const Cursors = () => {
    const ids = useOthersConnectionIds();

    return (
        <>
        {ids.map((id) => (

            <Cursor
            key={id}
            connectionId={id}
            />
))}
        </>
    )
}
export const CursorsPresnce = memo(() => {
    return(
        <>
        {/* Todo : Draft Pencil */}
        <Cursors/>
        </>
    )
})

CursorsPresnce.displayName = "CursorsPresnce"