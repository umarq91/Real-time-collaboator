"use client"
import qs from "query-string"
import { Search } from "lucide-react"
import { useDebounce } from "usehooks-ts"
import { useRouter } from "next/navigation"
import { useEffect, useState, ChangeEvent } from "react"
import { Input } from "@/components/ui/input"



export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState('')
    const deboucedValue = useDebounce(value, 500)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: '/',
            query: {
                search: deboucedValue
            },
        }, { skipNull: true, skipEmptyString: true }
        )

        router.push(url)
    }, [deboucedValue, router])


    return (
        <div className="w-full relative">
            <Search
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            />
            <Input
                placeholder="Search boards"
                className="w-full max-w-[516px] pl-9"
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}