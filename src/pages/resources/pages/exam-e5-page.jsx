import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ArchiveIcon, FileTextIcon} from "@radix-ui/react-icons";
import {Link} from "react-router-dom";

export default function ExamE5Page() {
    return (
        <>
            <SiteHeader />
            <ProjectUltron />
            <PageContent />
            <SiteFooter />
        </>
    )
}

function ProjectUltron() {
    return (
        <>
            <Link to={"/resources"}>
                <div className={"bg-[#fee9e9] h-full justify-center"}>
                    <div className={"container relative mx-auto max-w-6xl mb-10"}>
                        <div className={"py-8"}>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-[#c9191e] hover:text-[#f93f42]">
                                ProjectUltron Avengard Organization System
                            </h1>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

function PageContent () {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mt-16"}>
                <img className={"bg-cover bg-center rounded-md"}
                     src={"/banners/red-inquisitive-banner.png"}
                     alt={"ProjectUltron InquisitiveMinds Banner"}
                />
            </div>
            <div className={"container relative mx-auto max-w-3xl mb-44"}>
                <div className={"flex-1 mt-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            L{"'"}Épreuve E5 (coefficient 4)
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Examen</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>ProjectUltron Avengard</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            L{"'"}épreuve E5 du BTS SIO se déroule sur <strong>poste informatique</strong> et
                            repose sur un dossier contenant 2 fiches décrivant des situations professionnelles.
                            Avant l{"'"}épreuve, 30 minutes de préparation sont allouées pour structurer les
                            idées et préparer les réponses.
                        </p>


                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Cette épreuve se décompose en deux parties distinctes : une présentation d{"'"}une
                            dizaine de minutes de ton travail, suivie d{"'"}une interrogation de 20 minutes sur
                            poste informatique. C{"'"}est lors de cette seconde partie que tes aptitudes
                            d{"'"}adaptation et d{"'"}analyse seront mises à l{"'"}épreuve.
                        </p>

                        {/* Resources Management */}
                        <Button className={"mt-14 w-full mb-2"}>
                            <ArchiveIcon className="mr-2 h-4 w-4"/>
                            Télécharger le dossier de l{"'"}épreuve E5
                        </Button>

                        <div>
                            <div className={"grid gap-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2"}>
                                <Button variant={"outline"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Réalisations profesionnelles #1
                                </Button>
                                <Button variant={"outline"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Réalisations professionnelles #2
                                </Button>
                            </div>
                            <figcaption className={"text-center text-muted-foreground my-2.5"}>
                                ProjectUltron - Avengard Organization System
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
