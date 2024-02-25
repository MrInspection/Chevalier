import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Button} from "@/components/ui/button.jsx";
import {FileTextIcon} from "@radix-ui/react-icons";
import {Link} from "react-router-dom";

export default function CertificationsPage() {
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
                            L{"'"}Épreuve facultative de parcours de certification complémentaire (EF3)
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Examen</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>ProjectUltron Avengard</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            L{"'"}épreuve EF3 est une épreuve orale de 20 minutes sans préparation, visant
                            à évaluer la démarche entreprise par la personne candidate pour acquérir des
                            compétences complémentaires lui permettant d’enrichir son parcours en vue de
                            son insertion ou évolution professionnelle.
                        </p>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Elle se déroule sous forme d{"'"}un exposé (maximum 10 minutes) suivi d{"'"}un
                            entretien avec la commission d{"'"}interrogation (maximum 10 minutes). Pendant
                            l{"'"}exposé, le candidat présente, à l{"'"}aide des supports de son choix, son
                            besoin ainsi que sa démarche d{"'"}acquisition de compétences complémentaires, en
                            mettant en avant les certifications obtenues et leur impact sur son parcours
                            professionnel.
                        </p>

                        {/* Resources Management */}
                        <Button className={"mt-10 w-full mb-2"}>
                            <FileTextIcon className="mr-2 h-4 w-4"/>
                            Télécharger la présentation du parcours de certification complémentaire
                        </Button>
                        <div>
                            <div className={"grid gap-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2"}>
                                <Button variant={"outline"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Consulter mes certificats
                                </Button>
                                <Button variant={"outline"} className={"w-full"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/> Consulter mes compétences
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