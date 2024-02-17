import {Card, CardHeader} from "@/components/ui/card.jsx";
import {Badge} from "@/components/ui/badge.jsx";

export default function PinnedContents() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <div className={"flex-1 mt-8"}>
                    <div className={"grid gap-4 grid-cols-1  sm:grid-cols-2 lg:grid-cols-4"}>

                        <Card>
                            <CardHeader className={""}>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"src/assets/imgs/Placeholder.png"} alt={"Placeholder"}
                                         className={"rounded-md object-cover  w-full h-full"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader className={""}>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"src/assets/imgs/Placeholder.png"} alt={"Placeholder"}
                                         className={"rounded-md object-cover  w-full h-full"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader className={""}>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"src/assets/imgs/Placeholder.png"} alt={"Placeholder"}
                                         className={"rounded-md object-cover  w-full h-full"}>
                                    </img>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader className={""}>
                                <div>
                                    <Badge variant={"secondary"}>Intitulé</Badge>
                                </div>
                                <h4 className="scroll-m-20 font-bold tracking-tight">
                                    Lorem ipsum dolor sit amet consectetur
                                </h4>
                                <div className={"pt-0.5"}>
                                    <img src={"src/assets/imgs/Placeholder.png"} alt={"Placeholder"}
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
