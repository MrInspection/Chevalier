import {ArchiveIcon} from "@radix-ui/react-icons";
import {Card} from "@/components/ui/card.jsx";

export function EmptyProjects() {
    return (
        <>
            <Card className="flex h-[450px] shrink-0 items-center justify-center rounded-md border ">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <ArchiveIcon className={"h-10 w-10 text-muted-foreground"}></ArchiveIcon>
                    <h3 className="mt-4 text-xl font-bold">Aucun projet ajouté</h3>
                    <p className="sm:mx-4 md:mx-0 mb-4 mt-2 text-sm text-muted-foreground">
                        Il s{"'"}agit peut-être d{"'"}une erreur, veuillez revenir plus tard ={"'"}(
                    </p>
                </div>
            </Card>
        </>
    )
}