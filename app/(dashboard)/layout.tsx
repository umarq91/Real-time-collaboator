import OrgSideBar from "./_components/OrgSideBar";
import { Navbar } from "./_components/navbar/navbar";
import { Sidebar } from "./_components/sidebar";

interface dashBoardLayourProps{
    children:React.ReactNode;
}



const DashboadLayout = ({children}:dashBoardLayourProps) => {
  return (
      <main className="h-full">
          <Sidebar />
          <div className="pl-[60px] h-full">
              <div className="flex gap-x-3 h-full">
                  <OrgSideBar />
                  <div className="h-full flex-1">
                      <Navbar />
                      {children}
                  </div>
              </div>
          </div>
      </main>
  )
}

export default DashboadLayout;