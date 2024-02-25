import {Card, CardHeader, CardContent, CardDescription, CardFooter} from "@/components/ui/card.jsx";
import {Link} from "react-router-dom";
import {Badge} from "@/components/ui/badge.jsx";

export function StudiesResearch() {
    return (
        <>
            <div className={"mt-2"}>
                <Card>
                    <CardHeader />
                    <CardContent className={"container max-w-5xl"}>
                        <div className={"mt-10 mb-8"}>
                            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                                Les Études de Cas
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-5">
                                Une étude de cas constitue une exploration approfondie d{"'"}un projet, d{"'"}un
                                événement ou d{"'"}une situation donnée. Elle vise à examiner en détail les divers
                                aspects qui l{"'"}ont façonné, notamment les circonstances, les défis, les décisions
                                stratégiques et les résultats obtenus. En fournissant une analyse approfondie, elle
                                permet de tirer des leçons précieuses et d{"'"}obtenir des perspectives claires sur
                                les processus impliqués, offrant ainsi des informations exploitables pour l{"'"}
                                apprentissage et la prise de décision.
                            </p>
                        </div>

                        <div className={"my-4 grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3"}>

                            <Link to={"/research/chevalier"}>
                                <Card>
                                    <CardHeader className={"my-0"}>
                                        <img src={"/thumbnails/case-studies/case-studies-thumbnail.png"}
                                             alt={"Portfolio Thumbnail Project"}
                                             className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                        </img>
                                    </CardHeader>
                                    <CardContent>
                                        <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                            ProjectUltron Chevālier
                                        </h1>
                                        <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                            <Badge>Étude de cas</Badge>
                                            <Badge variant={"secondary"}>Web Project</Badge>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Card>
                                <CardHeader className={"my-0"}>
                                    <img src={"/images/placeholder.png"}
                                         alt={"Portfolio Thumbnail Project"}
                                         className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                    </img>
                                </CardHeader>
                                <CardContent>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                        Site Web GBIT
                                    </h1>
                                    <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                        <Badge variant={"destructive"}>Indisponible</Badge>
                                        <Badge variant={"secondary"}>Web Project</Badge>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                    <CardFooter />
                </Card>
            </div>
        </>
    )
}