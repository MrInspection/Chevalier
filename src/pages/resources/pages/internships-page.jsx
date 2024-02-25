import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ArchiveIcon, FileTextIcon} from "@radix-ui/react-icons";
import {Link} from "react-router-dom";

export default function InternshipsPage() {
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

function PageContent() {
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
                            Mes Stages
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Examen</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>ProjectUltron Avengard</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Un stage est une période d{"'"}immersion professionnelle au cours de laquelle un
                            individu acquiert une expérience pratique dans un environnement de travail. Ce type
                            d{"'"}opportunité offre une occasion précieuse d{"'"}appliquer les connaissances
                            théoriques acquises lors des études dans un contexte professionnel réel. Pendant
                            le stage, les stagiaires ont la possibilité de développer des compétences spécifiques
                            liées à leur domaine d{"'"}études, d{"'"}observer le fonctionnement quotidien d{"'"}une
                            entreprise, et souvent de contribuer activement à des projets concrets. Le stage
                            constitue ainsi un moyen concret de renforcer sa compréhension du monde professionnel
                            et de faciliter la transition entre la formation académique et la vie professionnelle.
                        </p>

                        {/* Resources Management */}
                        <Button className={"mt-14 w-full mb-2"}>
                            <ArchiveIcon className="mr-2 h-4 w-4"/>
                            Télécharger le bundle sur mes situations professionnelles
                        </Button>

                        <div>
                            <div className={"grid gap-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2"}>
                                <Button variant={"outline"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Rapport de stage de première année
                                </Button>
                                <Button variant={"outline"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Rapport de stage de deuxième année
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