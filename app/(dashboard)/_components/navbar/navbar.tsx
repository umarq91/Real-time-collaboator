"use client"

import { OrganizationSwitcher, UserButton,useOrganization } from "@clerk/nextjs"
import { SearchInput } from "./searchInput"
import { InviteButton } from "./invite-button"

export const Navbar =()=>{
const {organization} = useOrganization(); // holds the active organization
    return(
        <div className="flex items-center gap-x-4 p-5 ">
            <div className="hidden lg:flex flex-1 ">
                <SearchInput />
            </div>
            {/* Mobile */}
            <div className="block lg:hidden flex-1">
                <OrganizationSwitcher hidePersonal                         // same thing we added in Organization bar but this is for mobile
                    appearance={{
                        elements: {
                            rootBox: {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                maxWidth: "376px"
                            },
                            organizationSwitcherTrigger: {

                                padding: '6px',
                                width: '100%',
                                borderRadius: "8px",
                                border: "1px solid #E5E7EB",
                                justifyContent: "space-between",
                                background: "white"
                            }
                        }
                    }} />
            </div>
            {/* Only render the InviteButton when organization is Active / selected */}
                {organization &&   <InviteButton/> }  
            <UserButton />
        </div>
    )
}