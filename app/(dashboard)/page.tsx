"use client"
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/emptyStates/EmptyOrg";
import { BoardList } from "./_components/board-list";

interface DashBoardProps{
  searchParams:{
    search?:string,
    favorites?:string
  }
}

const DashBoardPage = ({
  searchParams
}:DashBoardProps)=>{

  const { organization } = useOrganization(); // holds the active organization

  return (
    <div className="h-[calc(100%-80px)] p-6 flex-1 ">
      {!organization ? <EmptyOrg /> : (
          <BoardList
          orgId={organization.id}
          query={searchParams}
          />

      )}
    </div>
  )
}


export default DashBoardPage;