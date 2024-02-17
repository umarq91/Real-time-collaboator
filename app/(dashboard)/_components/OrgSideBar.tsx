"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { LayoutDashboard, Star } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})

const OrgSideBar = () => {

const searchParams =   useSearchParams()
  const favorites = searchParams.get("favorites")

  
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 ">
      <Link href='/'>

        <div className="flex items-center gap-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            height={60}
            width={60}
          />
          <span className={cn(
            "font-semibold text-2xl",
            font.className
          )}>
            Dev Ease
          </span>

        </div>
      </Link>
      <OrganizationSwitcher hidePersonal 
      appearance={{
        elements:{
          rootBox:{
            display:'flex',
            justifyContent:"center",
            alignItems:"center",
            width:"100%"
          },
          organizationSwitcherTrigger:{

            padding:'6px',
            width:'100%',
            borderRadius:"8px",
            border:"1px solid #E5E7EB",
            justifyContent:"space-between",
            background:"white"
          }
        }
      }}
      />
      <div className="space-y- w-full">
      
        <Button size="lg" asChild
          variant={favorites ? "ghost" : "secondary"}
          className="justify-start gap-1 px-2 w-full font-normal">
          <Link href="/">
            <LayoutDashboard />
            Team Boards
          </Link>

        </Button>
        <Button size="lg"
          variant={favorites ? "secondary" : "ghost"}
          asChild
          className="justify-start gap-1 px-2 w-full font-normal">
          <Link href={{
            pathname: '/',
            query: { favorites: true } // changes the url ?favorites=true
          }}>
            <Star />
            Favorite Boards
          </Link>

        </Button>

      </div>


        </div>
  )
}

export default OrgSideBar