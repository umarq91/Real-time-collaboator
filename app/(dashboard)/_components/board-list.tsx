"use client"

import { EmptyBoards } from "./emptyStates/empty-boards"
import { EmptyFavorites } from "./emptyStates/empty-favorits"
import { EmptySearch } from "./emptyStates/empty-search"

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
    return <EmptySearch/>
}


if(!data?.length && query.favorites){
    return <EmptyFavorites/>
}

if(!data?.length){
    return <EmptyBoards/>
}

return(
    <div className="">
        {JSON.stringify(query)}
    </div>
)
}

