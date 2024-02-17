"use client"
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/EmptyOrg";
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
    <div className=" p-6 flex-1 h-[calc(100%-80px)]">
      {!organization ? <EmptyOrg /> : (
        <p>
          <BoardList
          orgId={organization.id}
          query={searchParams}
          />
        </p>
      )}
    </div>
  )
}


export default DashBoardPage;