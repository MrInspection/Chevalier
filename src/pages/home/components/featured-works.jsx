import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

export function FeaturedWorks() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl pt-4"}>

                    <div className={"flex flex-col justify-center items-center w-full h-full sm:py-10 text-center"}>
                        <section className="max-w-[980px] flex-col items-center
                         justify-items-center gap-6  pb-6 pt-2 my-10 md:my-4">
                            <div className="flex flex-col items-center justify-items-center gap-2">
                                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter lg:text-4xl mb-2">
                                    Mes différents projets<br className="hidden sm:inline"/>
                                </h1>
                                <p className="max-w-3xl text-lg text-muted-foreground">
                                    Les projets sont la pierre angulaire de tout développeur pour mettre en
                                    pratique et montrer ce qu{"'"}il a appris et ce qu{"'"}il sait faire. Vous
                                    trouverez ci-dessous quelques-uns de mes travaux dans différentes langues
                                    de programmation ainsi que ma veille technologique actuelle.
                                </p>
                                <p className={"flex space-x-2 py-2 mb-8 sm:mb-2 md:mb-2 lg:mb-0"}>
                                    <Link to={"/projects"}>
                                        <Button variant={"outline"}>Mes projets</Button>
                                    </Link>
                                    <Link to={"/research"}>
                                        <Button variant={"outline"}>Mes recherches</Button>
                                    </Link>
                                </p>
                            </div>
                        </section>
                    </div>

                <div className={"flex-1 pb-5 -mt-8"}>
                    <Link to={"/research"}>
                        <Card className={""}>
                            <CardHeader>
                                <div className={"lg:flex items-center justify-between space-x-5 md:px-8 sm:px-4"}>
                                    <div className={"sm:my-8"}>
                                        <Badge>Veille Technologique</Badge>
                                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mt-2">
                                            ChatGPT : PLONGÉE AU CŒUR DE <br className="hidden sm:inline"/>L{"'"}IA,
                                            ENTRE SECRETS ET DÉFIS
                                        </h1>
                                        <p className="leading-7 [&:not(:first-child)]:mt-4 font-medium">
                                            ChatGPT, une intelligence artificielle qui a secoué le monde dès
                                            son lancement, a profondément transformé la sphère de l{"'"}IA.
                                            Cependant, derrière cette révolution technologique, émergent
                                            des questionnements profonds et des enjeux éthiques<br
                                            className="hidden sm:inline"/> majeurs.
                                        </p>
                                    </div>
                                    <img src={"/images/inquisitive-avatar-light.png"} alt={"Logo ChatGPT"}
                                         className={"rounded-md object-cover max-h-72 w-56 sm:w-auto"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>
                    </Link>

                    <div className={"my-4 grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3"}>

                        <Link to={"/research/chevalier"}>
                            <Card>
                                <CardHeader className={"my-0"}>
                                    <img src={"/thumbnails/case-studies/case-studies-thumbnail.png"} alt={"Portfolio Thumbnail Project"}
                                         className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                    </img>
                                </CardHeader>
                                <CardContent>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                        Chevālier (Mon Portfolio)
                                    </h1>
                                    <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                        <Badge>Étude de cas</Badge>
                                        <Badge variant={"secondary"}>Web Development</Badge>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link to={"/projects/calculator"}>
                            <Card>
                                <CardHeader className={"my-0"}>
                                    <img src={"/thumbnails/projects/project-calculator.png"} alt={"Calculator Thumbnail Project"}
                                         className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                    </img>
                                </CardHeader>
                                <CardContent>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                        ProjectUltron AyCalculator
                                    </h1>
                                    <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                        <Badge>Projet</Badge>
                                        <Badge variant={"secondary"}>Java Development</Badge>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link to={"/projects/tetris"}>
                            <Card>
                                <CardHeader className={"my-0"}>
                                    <img src={"/thumbnails/projects/project-tetris.png"} alt={"Tetris Thumbnail Project"}
                                         className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                    </img>
                                </CardHeader>
                                <CardContent>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                        ProjectUltron AyTetris
                                    </h1>
                                    <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                        <Badge>Projet</Badge>
                                        <Badge variant={"secondary"}>Python Development</Badge>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>

                    </div>
                </div>
            </div>

        </>
    )
}
