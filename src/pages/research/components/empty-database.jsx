import {BarChartIcon, ExclamationTriangleIcon, FileTextIcon} from "@radix-ui/react-icons";
import {Card} from "@/components/ui/card.jsx";

export function EmptyTechWatch() {
    return (
        <>
            <Card className="flex h-[450px] shrink-0 items-center justify-center rounded-md border ">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <ExclamationTriangleIcon className={"h-10 w-10 text-muted-foreground"}></ExclamationTriangleIcon>
                    <h3 className="mt-4 text-xl font-bold">Aucune donnée trouvée</h3>
                    <p className="sm:mx-4 md:mx-0 mb-4 mt-2 text-sm text-muted-foreground">
                        Il s{"'"}agit peut-être d{"'"}une erreur, veuillez revenir plus tard ={"'"}(
                    </p>
                </div>
            </Card>
        </>
    )
}

export function EmptyStatistics() {
    return (
        <>
            <Card className="flex h-[450px] shrink-0 items-center justify-center rounded-md border ">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <BarChartIcon className={"h-10 w-10 text-muted-foreground"}></BarChartIcon>
                    <h3 className="mt-4 text-xl font-bold">Pas de statistiques trouvées</h3>
                    <p className="sm:mx-4 md:mx-0 mb-4 mt-2 text-sm text-muted-foreground">
                        Il s{"'"}agit peut-être d{"'"}une erreur, veuillez revenir plus tard ={"'"}(
                    </p>
                </div>
            </Card>
        </>
    )
}

export function EmptyStudies() {
    return (
        <>
            <Card className="flex h-[450px] shrink-0 items-center justify-center rounded-md border ">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <FileTextIcon className={"h-10 w-10 text-muted-foreground"}></FileTextIcon>
                    <h3 className="mt-4 text-xl font-bold">Aucune étude de cas trouvée</h3>
                    <p className="sm:mx-4 md:mx-0 mb-4 mt-2 text-sm text-muted-foreground">
                        Il s{"'"}agit peut-être d{"'"}une erreur, veuillez revenir plus tard ={"'"}(
                    </p>
                </div>
            </Card>
        </>
    )
}