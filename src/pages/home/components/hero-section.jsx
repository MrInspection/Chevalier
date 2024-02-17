import { Card, CardHeader } from "@/components/ui/card.jsx"
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";
import {InfoCircledIcon, Link1Icon, StarFilledIcon} from "@radix-ui/react-icons";

function HeroSection() {
    return (
        <>
            <div className={"flex-1 mt-2 text-slate-500"}>
                <div className={"container relative max-w-screen-2xl"}>
                    <Card
                        className={"my-6 flex-grow flex-shrink h-full flex flex-col sm:flex-row items-center justify-center bg-muted"}>
                        <CardHeader>
                            <div className={"lg:flex items-center justify-between space-x-5 md:px-24 sm:px-4"}>
                                <div className={"sm:my-8"}>
                                    <Badge> Featured Project </Badge>
                                    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight  lg:text-4xl pt-2">
                                        BEHIND THE SCENES: <br className="hidden sm:inline"/>
                                        La création du projet Chevalier
                                    </h1>
                                    <p className="leading-7 [&:not(:first-child)]:mt-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <div className={"pt-3"}>
                                        <Button size={"sm"} variant={"destructive"}>
                                            <InfoCircledIcon className="mr-2 h-4 w-4"/> Unreleased Post
                                        </Button>
                                    </div>
                                </div>
                                <img src={"/thumbnails/bts-chevalier.png"} alt={"Placeholder"}
                                     className={"rounded-md object-cover max-h-96 w-full sm:w-auto"}>
                                </img>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HeroSection