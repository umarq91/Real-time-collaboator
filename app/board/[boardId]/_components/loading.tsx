import { Loader } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

function loading() {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-non flex justify-center items-center">

            <Loader  className="w-6 h-6 text-muted-foreground animate-spin"/>
            <Info.Skeleton/>
    <Participants.Skeleton/>
    <Toolbar.Skeleton/>
    </main>
  )
}

export default loading