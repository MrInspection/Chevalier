import {Separator} from "@/components/ui/separator.jsx";
import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Button} from "@/components/ui/button.jsx";
import {GitHubLogoIcon} from "@radix-ui/react-icons";

export default function ProjectCalculator() {
    return (
        <>
            <SiteHeader />
            <ProjectArticleSection />
            <SiteFooter />
        </>
    )
}

function ProjectArticleSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mt-16"}>
                <img className={"bg-cover bg-center rounded-md"}
                     src={"/banners/blue-inquisitive-banner.png"}
                     alt={"ProjectUltron InquisitiveMinds Banner"}
                />
            </div>
            <div className={"container relative mx-auto max-w-3xl mb-44"}>
                <div className={"flex-1 mt-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            ProjectUltron AyCalculator
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Développement Java</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>Publé le 25 Février 2024</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            ProjectUltron AyCalculator est un projet d{"'"}<strong>initiative personnelle
                        </strong> axé sur le développement Java, avec pour objectif de me familiariser
                            avec <strong>JavaFX</strong> pour la création de solutions applicatives. La
                            calculatrice en question offre des <strong>fonctions élémentaires</strong> {" "}
                            telles que l{"'"}addition, la soustraction, la racine carrée, et d{"'"}autres.
                            Ce projet m{"'"}a également permis de découvrir l{"'"}utilisation du CSS en
                            Java, ce qui a été une agréable surprise.

                            Le code source du projet est disponible sur GitHub. Vous trouverez ci-dessous une
                            démonstration de la calculatrice.
                        </p>

                        <a
                            href={"https://github.com/MrInspection/AyCalculator"}
                            target={"_blank"}
                            rel="noreferrer noopener"
                        >
                            <Button variant={"outline"} className={"mt-6 w-full mb-5"}>
                                <GitHubLogoIcon className="mr-2 h-4 w-4"/> Voir le projet sur GitHub
                            </Button>
                        </a>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-7">
                            Démonstration de ProjectUltron AyCalculator
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:my-6">
                            <img className={"bg-cover bg-center rounded-md"}
                                 src={"/demonstration/aycalculator-demo.gif"}/>
                            <figcaption className={"text-center text-muted-foreground my-2"}>
                                ProjectUltron Preview - AyCalculator
                            </figcaption>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}