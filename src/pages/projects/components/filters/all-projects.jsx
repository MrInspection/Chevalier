import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";

export function AllProjects() {
    return (
        <>
            <div className={"justify-center rounded-md border-dashed"}>
                <div className={"my-3 grid gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"}>

                    <Card>
                        <CardHeader className={"my-0"}>
                            <img src={"/thumbnails/chevalier-project.png"} alt={"Portfolio Thumbnail Project"}
                                 className={"rounded-md object-cover aspect-video h-52  w-full "}>
                            </img>
                        </CardHeader>
                        <CardContent>
                            <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                ProjectUltron Chevālier
                            </h1>
                            <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                <Badge className={"bg-[#000091] hover:bg-[#000091]"}>Mise en avant</Badge>
                                <Badge variant={"secondary"}>ReactJS</Badge>
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className={"my-0"}>
                            <img src={"/thumbnails/calculator-project.png"} alt={"Calculator Thumbnail Project"}
                                 className={"rounded-md object-cover aspect-video h-52  w-full "}>
                            </img>
                        </CardHeader>
                        <CardContent>
                            <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                ProjectUltron AyCalculator
                            </h1>
                            <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                <Badge variant={"secondary"}>Solution applicative</Badge>
                                <Badge variant={"secondary"}>JavaFX</Badge>
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className={"my-0"}>
                            <img src={"/thumbnails/tetris-project.png"} alt={"Tetris Thumbnail Project"}
                                 className={"rounded-md object-cover aspect-video h-52  w-full "}>
                            </img>
                        </CardHeader>
                        <CardContent>
                            <h1 className={"scroll-m-20 font-extrabold text-xl -mt-3"}>
                                ProjectUltron AyTetris
                            </h1>
                            <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                <Badge variant={"secondary"}>Games</Badge>
                                <Badge variant={"secondary"}>Python</Badge>
                            </CardDescription>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </>
    )
}