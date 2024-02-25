import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Link} from "react-router-dom";

export function FilterEverything() {
    return (
        <>
            <div className={"justify-center rounded-md border-dashed"}>
                <div className={"my-3 grid gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"}>

                    <Link to={"/projects/chevalier"}>
                        <Card>
                            <CardHeader className={"my-0"}>
                                <img src={"/thumbnails/projects/project-chevalier.png"} alt={"Portfolio Thumbnail Project"}
                                     className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                </img>
                            </CardHeader>
                            <CardContent>
                                <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                    ProjectUltron Chevālier
                                </h1>
                                <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                    <Badge>Mise en avant</Badge>
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
                                    <Badge variant={"secondary"}>App</Badge>
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
                                    <Badge variant={"secondary"}>MiniGame</Badge>
                                    <Badge variant={"secondary"}>Python Development</Badge>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </>
    )
}

export function FilterJavaProjects() {
    return (
        <>

        </>
    )
}

export function FilterWebProjects() {
    return(
        <>

        </>
    )
}

export function FilterMobileProjects() {
    return (
        <>

        </>
    )
}