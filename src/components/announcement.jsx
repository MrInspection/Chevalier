import { ArrowRightIcon } from "@radix-ui/react-icons"
import {Separator} from "@/components/ui/separator.jsx";

export function Announcement() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl items-center text-center"}>
                <div className={"flex-1 mt-8"}>

                    <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                        🎉 <Separator className="mx-2 h-4" orientation="vertical"/>{" "}
                        <span className="sm:hidden">New components and more.</span>
                        <span className="hidden sm:inline">
                         ProjectUltron Avengard
                        </span>
                        <ArrowRightIcon className="ml-1 h-4 w-4"/>
                    </div>

                </div>
            </div>
        </>
    )
}