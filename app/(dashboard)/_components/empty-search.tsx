import Image from "next/image";

export const EmptySearch = ()=>{
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <Image 
            src="/empty-search.svg"
            height={140}
            width={140}
            alt="Emtpy"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No results Found
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try searching something else
            </p>

        </div>
    )
}