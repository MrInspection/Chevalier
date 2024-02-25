import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Broadcast} from "@/components/broadcast.jsx";
import {Button} from "@/components/ui/button.jsx";
import {EnvelopeOpenIcon, GitHubLogoIcon} from "@radix-ui/react-icons";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Link} from "react-router-dom";

export default function ProjectChevalier() {
    return (
        <>
            <SiteHeader/>
            <ProjectArticleSection />
            <SiteFooter/>
        </>
    )
}

function ProjectArticleSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mt-16"}>
                <img className={"bg-cover bg-center rounded-md"} src={"/banners/blue-inquisitive-banner.png"} />
            </div>
            <div className={"container relative mx-auto max-w-3xl mb-56"}>
                <div className={"flex-1 mt-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            ProjectUltron Chevālier
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Développement Web</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>Publié le 25 Février 2024</div>
                        </div>


                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            ProjectUltron Chevālier, mon portfolio, est un projet de développement web réalisé en
                            utilisant le Framework Vite + React JS. L{"'"}bjectif avec ce projet de pouvoir présenter un
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            portfolio à la hauteur de mes compétences. Le nom du projet "Chevalier" fait référence au
                            fait que le chevalier doit monter sur son chevaux pour explorer de nouveaux horizons.
                        </p>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Pour approfondir votre compréhension de la réalisation du projet, nous vous suggérons
                            de consulter l{"'"}étude de cas associée, qui offre un aperçu détaillé des coulisses
                            de ce site. De plus, le code source du projet est disponible sur GitHub pour ceux
                            qui intéressés à explorer en détail la structure du code.
                        </p>

                        <a
                            href={"https://github.com/MrInspection/Chevalier"}
                            target={"_blank"}
                            rel="noreferrer noopener"
                        >
                            <Button variant={"outline"} className={"mt-6 w-full mb-8"}>
                                <GitHubLogoIcon className="mr-2 h-4 w-4"/> Voir le projet sur GitHub
                            </Button>
                        </a>

                        <Separator />

                        <div className={"my-12 container max-w-2xl"}>
                            <Link to={"/research/chevalier"}>
                                <Card>
                                    <CardHeader className={"my-0"}>
                                        <img src={"/thumbnails/case-studies/case-studies-thumbnail.png"}
                                             alt={"Portfolio Thumbnail Project"}
                                             className={"rounded-md object-cover aspect-video h-full  w-full "}>
                                        </img>
                                    </CardHeader>
                                    <CardContent>
                                        <h1 className={"scroll-m-20 font-extrabold text-2xl -mt-3"}>
                                            ProjectUltron Chevālier
                                        </h1>
                                        <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                            <Badge>Étude de cas</Badge>
                                            <Badge variant={"secondary"}>Web Development</Badge>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                            <figcaption className={"text-center text-muted-foreground my-2.5"}>
                                Bureau de recherches et d{"'"}études statistiques de ProjectUltron
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

