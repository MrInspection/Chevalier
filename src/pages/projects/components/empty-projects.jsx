import {ArchiveIcon} from "@radix-ui/react-icons";

export function EmptyProjects() {
    return (
        <>
            <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <ArchiveIcon className={"h-10 w-10 text-muted-foreground"}></ArchiveIcon>
                    <h3 className="mt-4 text-xl font-bold">No Projects Added</h3>
                    <p className="sm:mx-4 md:mx-0 mb-4 mt-2 text-sm text-muted-foreground">
                        This is perhaps a mistake, please come back at a later time ={"'"}(
                    </p>
                </div>
            </div>
        </>
    )
}