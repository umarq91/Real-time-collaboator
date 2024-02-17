"use client"

import { EmptySearch } from "./empty-search"

interface boardListProps {
    orgId: string,
    query:{
        search?:string
        favorites?:string
    }
}

export const BoardList = ({ orgId, query }:boardListProps)=>{

const data=[] // TODO : changed to API call

if(!data?.length && query.search){
    return(
        <EmptySearch/>
    )
}


if(!data?.length && query.favorites){
    return(
        <div className="">
            No Favorites
        </div>
    )
}

if(!data?.length){
    return(
        <div className="">
            No Boards at all
        </div>
    )
}

return(
    <div className="">
        {JSON.stringify(query)}
    </div>
)
}

