import React from "react";
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.jsx";

export function ResourcesHero() {
    return (
        <>
            <div className={"bg-[#fee9e9] h-full justify-center"}>
                <div className={"container relative mx-auto max-w-6xl mb-10"}>
                    <div className={"py-8"}>
                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-[#c9191e]">
                            Système d{"'"}organisation Avengard de ProjectUltron
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export function ExamsQuickAccess() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mt-8"}>
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-3xl">
                    Ressources concernant mon cursus
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-1 mb-9">
                    Vous y trouverez des informations sur mes stages, mes examens à venir et plus encore...
                </p>

                <div className={"flex-1 mb-8"}>
                    <div className={"my-4 grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4"}>

                        <Link to={"/resources/exam-e4"}>
                            <Card>
                                <CardHeader>
                                    <div>
                                        <Badge>Examen</Badge>
                                    </div>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl"}>
                                        L{"'"}épreuve E4
                                    </h1>
                                    <div className={"pt-1.5"}>
                                        <img src={"/thumbnails/resources/rsrc-school.png"} alt={"ProjectUltron"}
                                             className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                        </img>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link to={"/resources/exam-e5"}>
                            <Card>
                                <CardHeader>
                                    <div>
                                        <Badge>Examen</Badge>
                                    </div>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl"}>
                                        L{"'"}épreuve E5
                                    </h1>
                                    <div className={"pt-1.5"}>
                                        <img src={"/thumbnails/resources/rsrc-school.png"} alt={"ProjectUltron"}
                                             className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                        </img>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link to={"/resources/certification-sio"}>
                            <Card>
                                <CardHeader>
                                    <div>
                                        <Badge>Examen</Badge>
                                    </div>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl"}>
                                        Certification SIO
                                    </h1>
                                    <div className={"pt-1.5"}>
                                        <img src={"/thumbnails/resources/rsrc-school.png"} alt={"ProjectUltron"}
                                             className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                        </img>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link to={"/resources/internships"}>
                            <Card>
                                <CardHeader>
                                    <div>
                                        <Badge variant={"secondary"}>Rapports</Badge>
                                    </div>
                                    <h1 className={"scroll-m-20 font-extrabold text-xl"}>
                                        Mes Stages
                                    </h1>
                                    <div className={"pt-1.5"}>
                                        <img src={"/thumbnails/resources/rsrc-school.png"} alt={"ProjectUltron"}
                                             className={"rounded-md object-cover aspect-video h-52  w-full "}>
                                        </img>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                    <Separator />
                </div>
            </div>
        </>
    )
}

export function QuickAccess() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <h1 className="mt-8 scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-3xl">
                    Les ressources de ProjectUltron
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-1 mb-9">
                    Consultez les ressources disponibles sur ProjectUltron, le cœur de chacun de mes projets.
                </p>

                <div className={"flex-1 mt-8"}>
                    <div className={"grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}>

                        <Link to={"/resources/feedback-loop-system"}>
                            <Card>
                                <CardHeader>
                                    <div>
                                        <Badge variant={"secondary"}>System</Badge>
                                    </div>
                                    <h4 className="scroll-m-20 font-bold tracking-tight">
                                        ProjectUltron Feedback Loop
                                    </h4>
                                    <div className={"pt-0.5"}>
                                        <img src={"/thumbnails/resources/rsrc-feedback.png"} alt={"Placeholder"}
                                             className={"rounded-md object-cover  w-full h-full"}>
                                        </img>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>



                        <Card>
                            <CardHeader>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"/images/placeholder.png"} alt={"Placeholder"}
                                         className={"rounded-md object-cover  w-full h-full"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"/images/placeholder.png"} alt={"Placeholder"}
                                         className={"rounded-md object-cover  w-full h-full"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"/images/placeholder.png"} alt={"Placeholder"}
                                         className={"rounded-md object-cover  w-full h-full"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"/images/placeholder.png"} alt={"Placeholder"}
                                         className={"rounded-md object-cover  w-full h-full"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}