import {FileTextIcon} from "@radix-ui/react-icons";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {PublicationsSection} from "@/pages/research/data/tech-articles/publications-section.jsx";
import {Button} from "@/components/ui/button.jsx";


export function TechResearch() {
    return (
        <>
            <div className={"mt-2"}>
                <Card>
                    <CardHeader />
                    <CardContent className={"container max-w-5xl"}>
                        <div className={"mt-10 mb-8"}>
                            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                                Veille Technologique
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-5">
                                La veille technologique représente une approche proactive indispensable dans un
                                monde où les évolutions sont incessantes. Elle englobe une surveillance méthodique
                                des avancées, des tendances et des innovations dans le domaine technologique.
                                Cette démarche stratégique a pour objectif d{"'"}anticiper les mutations à venir,
                                de se tenir informé des dernières découvertes et d{"'"}exploiter les opportunités
                                naissantes.
                            </p>
                        </div>

                        <div className={"mb-8"}>
                            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight">
                                Introduction
                            </h1>
                            <p className="text-sm leading-7 [&:not(:first-child)]:mt-3">
                                L{"'"}arrivée de ChatGPT sur la scène de l{"'"}intelligence artificielle
                                le 30 novembre 2022 a été spectaculaire, attirant l{"'"}attention mondiale
                                avec son succès rapide. Cependant, son utilisation croissante pour déléguer
                                des devoirs pose des questions éthiques et met en lumière les défis sociaux
                                de l{"'"}adoption généralisée de cette technologie. Ces considérations
                                soulèvent la prolématique suivante :
                            </p>
                            <blockquote className="mt-6 border-l-4 pl-6 italic">
                                Dans quelle mesure l{"'"}évolution constante des modèles de langage
                                et les enjeux éthiques découlant des biais de ChatGPT participent-ils
                                activement à la redéfinition du panorama de l{"'"}intelligence
                                artificielle ?
                            </blockquote>
                        </div>
                        <div className={"mb-14"}>
                            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight">
                                Outils de Veille Technologique
                            </h1>

                            <p className="text-sm leading-7 [&:not(:first-child)]:mt-3">
                                Afin de mener à bien cette veille technologique, nous avons mis en œuvre
                                une gamme d{"'"}outils stratégiques pour la collecte d{"'"}informations.
                                Notre approche repose sur deux outils en mode PUSH et un outil en mode
                                PULL. Pour une visualisation détaillée, veuillez vous référer au
                                diagramme ci-dessous.
                            </p>
                            <p className="leading-7 [&:not(:first-child)]:my-6">
                                <img className={"bg-cover bg-center rounded-md"} src={"/images/gpt-tools.jpg"}/>
                                <figcaption className={"text-center text-muted-foreground my-1"}>
                                    Illustration #1 - Outils de veille technologique
                                </figcaption>
                            </p>
                        </div>
                        <a
                            href={"documents/tech/gpt-introduction.pdf"}
                            target={"_blank"}
                            rel="noreferrer noopener"
                        >
                            <Button className={"w-full mb-2"} size={"lg"} >
                                <FileTextIcon className="mr-2 h-4 w-4" />
                                Télécharger la présentation complète de la veille technologique
                            </Button>
                        </a>
                    </CardContent>
                    <CardFooter/>
                </Card>

                <Card className={"mt-5"}>
                    <CardHeader />
                    <CardContent className={"container max-w-5xl"}>
                        <div className={"mt-6 mb-8"}>
                            <div className={"mb-5"}>
                                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
                                    Les rapports de la veille technologique
                                </h1>
                                <p className="leading-7 [&:not(:first-child)]:mt-1">
                                    Cliquez sur une ligne pour télécharger une édition du livrable de la veille technologique
                                </p>
                            </div>
                            <PublicationsSection/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}