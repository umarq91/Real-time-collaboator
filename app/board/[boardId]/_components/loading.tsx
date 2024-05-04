import { Loader } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-non flex justify-center items-center">

            <Loader  className="w-6 h-6 text-muted-foreground animate-spin"/>
    </main>
  )
}

export default loading