import {Card, CardHeader} from "@/components/ui/card.jsx";
import {FileTextIcon, InfoCircledIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";

export function TechIntro() {
    return (
        <>
            <Card className={"bg-muted"}>
                <CardHeader>
                    <div className={"lg:flex items-center justify-between space-x-5 md:px-8 sm:px-4"}>
                        <div className={"sm:my-8"}>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight  lg:text-4xl pt-2">
                                ChatGPT : PLONGÉE AU CŒUR DE L{"'"}IA, ENTRE SECRETS ET DÉFIS
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-5 font-medium">
                                ChatGPT, une intelligence artificielle qui a secoué le monde dès
                                son lancement, a profondément transformé la sphère de l{"'"}IA.
                                Cependant, derrière cette révolution technologique, émergent
                                des questionnements profonds et des enjeux éthiques majeurs.
                            </p>
                            <div className={"pt-3"}>
                                <Button size={"sm"}>
                                    <FileTextIcon className="mr-2 h-4 w-4"/>
                                    Présentation d{"'"}introduction
                                </Button>

                            </div>
                        </div>
                        <img src={"/thumbnails/tech-watch.png"} alt={"Tech Watch Thumbnail"}
                             className={"rounded-md object-cover max-h-72 w-56 sm:w-auto"}>
                        </img>

                    </div>
                </CardHeader>
            </Card>
        </>
    )
}