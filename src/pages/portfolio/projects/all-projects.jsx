import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";

export function AllProjects() {
    return (
        <>
            <div className={"justify-center rounded-md border-dashed"}>
                <div className={"my-3 grid gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"}>
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
                                <Badge variant={"secondary"}>React</Badge>
                                <Badge variant={"secondary"}>Web</Badge>
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
                                Lorem ipsum dolor sit amet
                            </h1>
                            <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                <Badge variant={"secondary"}>Lorem ipsum</Badge> <Badge
                                variant={"secondary"}>Lorem</Badge>
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
                                Lorem ipsum dolor sit amet
                            </h1>
                            <CardDescription className={"my-1.5 font-medium flex space-x-1"}>
                                <Badge variant={"secondary"}>Lorem ipsum</Badge> <Badge
                                variant={"secondary"}>Lorem</Badge>
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}