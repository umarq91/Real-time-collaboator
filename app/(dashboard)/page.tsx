"use client"
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/EmptyOrg";

const DashBoardPage = ()=>{

  const { organization } = useOrganization(); // holds the active organization
  
  return (
    <div className=" p-6 flex-1 h-[calc(100%-80px)]">

      {!organization ? <EmptyOrg /> : (
        <p>
          Board
        </p>
      )}
    </div>
  )
}


export default DashBoardPage;