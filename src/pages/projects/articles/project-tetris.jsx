import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";

export default function ProjectTetris() {
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
                <img className={"bg-cover bg-center rounded-md"} src={"/banners/blue-inquisitive-banner.png"} />
            </div>
            <div className={"container relative mx-auto max-w-3xl mb-44"}>
                <div className={"flex-1 mt-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            ProjectUltron AyTetris
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Développement Python, Games</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>Publié le 25 Février 2024</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            ProjectUltron AyTetris est un projet <strong>d{"'"}initiative personnelle</strong>
                            {" "}axé sur le développement Python, visant à recréer le célèbre jeu Tetris. Ce projet
                            m{"'"}a permis de manipuler la bibliothèque Pygame et m{"'"}a également initié à
                            l{"'"}utilisation des classes en Python pour mettre en place la randomisation des
                            pièces, le système de score, et bien d{"'"}autres aspects. Le code source du projet
                            est disponible sur GitHub. Vous trouverez ci-dessous une démonstration du jeu.
                        </p>

                        <a
                            href={"https://github.com/MrInspection/AyTetris"}
                            target={"_blank"}
                            rel="noreferrer noopener"
                        >
                            <Button variant={"outline"} className={"mt-6 w-full mb-5"}>
                                <GitHubLogoIcon className="mr-2 h-4 w-4" /> Voir le projet sur GitHub
                            </Button>
                        </a>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-7">
                            Démonstration de ProjectUltron AyTetris
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:my-6">
                            <img className={"bg-cover bg-center rounded-md"}
                                 src={"/demonstration/aytetris-demo.gif"}/>
                            <figcaption className={"text-center text-muted-foreground my-2"}>
                                    ProjectUltron Preview - AyTetris
                            </figcaption>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
