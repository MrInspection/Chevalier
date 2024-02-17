import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

export function FeaturedWorks() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl pt-4"}>
                    <div className={"flex flex-col justify-center items-center w-full h-full md:py-10 text-center"}>
                        <section className="max-w-[980px] flex-col items-center
                         justify-items-center gap-6 pb-6 pt-2 md:py-8">
                            <div className="flex flex-col items-center justify-items-center gap-2">
                                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl pb-2">
                                    My Amazing Work<br className="hidden sm:inline"/>
                                </h1>
                                <p className="max-w-3xl text-lg text-muted-foreground">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p className={"flex space-x-2 py-2"}>
                                    <Button> View all projects</Button>
                                    <Button> View all resources</Button>
                                </p>
                            </div>
                        </section>
                    </div>

                <div className={"flex-1 pb-5 -mt-8"}>
                    <Link to={"/tech-watch"}>
                        <Card className={"bg-muted"}>
                            <CardHeader>
                                <div className={"lg:flex items-center justify-between space-x-5 md:px-8 sm:px-4"}>
                                    <div className={"sm:my-8"}>
                                        <Badge> Veille Technologique </Badge>
                                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight  lg:text-4xl pt-2">
                                            ChatGPT : PLONGÉE AU CŒUR DE L{"'"}IA, ENTRE SECRETS ET DÉFIS
                                        </h1>
                                        <p className="leading-7 [&:not(:first-child)]:mt-5 font-medium">
                                            ChatGPT, une intelligence artificielle qui a secoué le monde dès
                                            son lancement, a profondément transformé la sphère de l{"'"}IA.
                                            Cependant, derrière cette révolution technologique, émergent
                                            des questionnements profonds et des enjeux éthiques majeurs.
                                        </p>
                                    </div>
                                    <img src={"/thumbnails/tech-watch.png"} alt={"Tech Watch Thumbnail"}
                                         className={"rounded-md object-cover max-h-72 w-56 sm:w-auto"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>
                    </Link>

                    <div className={"my-4 grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3"}>

                        <Card>
                            <CardHeader className={"my-0"}>
                                <img src={"/images/placeholder.png"} alt={"Placeholder"}
                                     className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                </img>
                            </CardHeader>
                            <CardContent>
                                <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                    ProjectUltron Chevālier
                                </h1>
                                <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                    <Badge>Featured Project</Badge>
                                    <Badge variant={"secondary"}>React JS</Badge>
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className={"my-0"}>
                                <img src={"/images/placeholder.png"} alt={"Placeholder"}
                                     className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                </img>
                            </CardHeader>
                            <CardContent>
                                <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                    ProjectUltron AyCalculator
                                </h1>
                                <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                    <Badge>Featured Project</Badge>
                                    <Badge variant={"secondary"}>Java</Badge>
                                    <Badge variant={"secondary"}>JavaFX</Badge>
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className={"my-0"}>
                                <img src={"/images/placeholder.png"} alt={"Placeholder"}
                                     className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                </img>
                            </CardHeader>
                            <CardContent>
                                <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                    ProjectUltron AyTetris
                                </h1>
                                <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                    <Badge>Featured Project</Badge> <Badge
                                    variant={"secondary"}>Python</Badge>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}
