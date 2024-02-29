import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ArchiveIcon, FileTextIcon} from "@radix-ui/react-icons";
import {Link} from "react-router-dom";

export default function ExamE4Page() {
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
                            L{"'"}Épreuve E4 (coefficient 4)
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Examen</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>ProjectUltron Avengard</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            L{"'"}épreuve E4 du BTS SIO se déroule en deux parties distinctes, visant à
                            évaluer tes compétences dans des situations réelles, en mobilisant les connaissances
                            acquises tout au long de ta formation.
                        </p>


                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            La <strong>première partie</strong> consiste en un <strong>entretien de 15 minutes
                            </strong> au cours duquel tu dois présenter un projet que tu as préparé. Ensuite,
                            le jury te soumet des modifications à apporter à ton projet. Tu as alors <strong>
                            20 minutes</strong> pour les mettre en œuvre.
                        </p>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            La <strong>seconde partie</strong> comprend un second <strong>entretien de 15
                            minutes</strong>, durant lequel tu exposes les <strong>modifications</strong> que
                            tu as effectuées. Enfin, tu disposes d{"'"}une heure pour appliquer ces
                            changements à ton projet et rédiger une documentation de test.
                        </p>

                        {/* Resources Management */}
                        <Button className={"mt-14 w-full mb-2"}>
                            <ArchiveIcon className="mr-2 h-4 w-4"/>
                            Télécharger le dossier de l{"'"}épreuve E4
                        </Button>

                        <div>
                            <div className={"grid gap-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 mt-2"}>
                                <Button variant={"secondary"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Tableau de synthèse
                                </Button>
                                <Button variant={"secondary"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Réalisations professionnelles #1
                                </Button>
                                <Button variant={"secondary"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Réalisations professionnelles #2
                                </Button>
                                <Button variant={"secondary"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Réalisations professionnelles #3
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