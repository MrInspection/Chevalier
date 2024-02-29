import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import LangChart from "@/pages/about/charts/lang-graph.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import {BookmarkFilledIcon, FileTextIcon, Link1Icon} from "@radix-ui/react-icons";

export default function CaseChevalier() {
    return (
        <>
            <SiteHeader />
            <ResearchHero />
            <ArticleSection />
            <SiteFooter />
        </>
    )
}

function ResearchHero() {
    return (
        <>
            <div className={"bg-[#fee7fc] h-full justify-center"}>
                <div className={"container relative mx-auto max-w-6xl mb-10"}>
                    <div className={"py-8"}>
                        <Link to={"/research"}>
                            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight text-[#6E445A] hover:text-[#A558A0]">
                                La recherche est une curiosité formalisée. C{"'"}est le fait de fouiller et d{"'"}enquêter dans un but précis.
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

function ArticleSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mt-16"}>
                <img className={"bg-cover bg-center rounded-md"} src={"/banners/purple-inquisitive-banner.png"}/>
            </div>
            <div className={"container relative mx-auto max-w-3xl mb-32"}>
                <div className={"flex-1 mt-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            ProjectUltron Chevālier
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Étude de Cas</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>Publié le 25 Février 2024</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            J{"'"}ai travaillé d'arrache-pied et je suis ravi de vous présenter aujourd{"'"}hui
                            le projet <strong>Chevālier</strong>, qui représente mon portfolio. L{"'"}
                            objectif de cette <strong>étude de cas</strong> est de vous dévoiler les
                            coulisses de la réalisation de ce projet.
                        </p>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-7">
                            Répondre à un besoin
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Chevālier est né pour répondre à un besoin précis : <strong>celui de
                            démontrer efficacement mes compétences en développement à des recruteurs
                            potentiels</strong>. De plus, mon cursus actuel exige la création d{"'"}un
                            portfolio, qu{"'"}il soit codé ou non, pour une épreuve orale. Le {" "}

                            <a
                                href={"https://projectultronmedia.wixsite.com/home"}
                                target={"_blank"}
                                rel="noreferrer noopener"
                                className={"text-muted-foreground hover:underline"}
                            >
                                prédécesseur de Chevalier
                            </a>

                            , conçu sur la <strong>plateforme Wix</strong>, ne répondait pas à ces
                            critères. De plus, les limitations rencontrées sur Wix en matière de
                            personnalisation m{"'"}ont poussé à rechercher une solution plus flexible,
                            notamment pour l{"'"}ajout de composantes analytiques à mes études de cas
                            et mes recherches statistiques.
                        </p>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-7">
                            La Mise en place du projet
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Pour réaliser ce projet, j{"'"}ai décidé d{"'"}opter pour l{"'"}utilisation
                            d{"'"}un framework plutôt que de développer en HTML et CSS traditionnels,
                            considérant la maîtrise d{"'"}un framework comme une compétence valorisante.
                            Cependant, je n{"'"}avais aucune expérience préalable avec les frameworks.
                            Pour relever ce défi et atteindre les objectifs que je m{"'"}étais fixés,
                            j{"'"}ai choisi d{"'"}apprendre <strong>React JS</strong> pour utilisé le
                            framework Vite + React.
                        </p>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-7">
                            Le choix des outils technologiques
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Comme mentionné précédemment, j{"'"}ai opté pour la conception du projet
                            avec React JS. Pour compléter cette technologie, j{"'"}ai appris la logique
                            de React, qui consiste à décomposer une page en plusieurs composants distincts
                            pour en faciliter l{"'"}utilisation et la réutilisation. En plus de React,
                            j{"'"}ai intégré la bibliothèque <strong>TailwindCSS</strong> pour simplifier
                            le travail de mise en page. J{"'"}ai également choisi d{"'"}utiliser une
                            bibliothèque de composants pour faciliter le développement, avec le choix
                            entre trois options : Radix UI, Next UI et Shadcn, le dernier ayant retenu
                            mon attention. Par ailleurs, j{"'"}ai exprimé le besoin d{"'"}utiliser une
                            bibliothèque de composants analytiques, d{"'"}où mon choix de Recharts.
                        </p>

                        <p className="leading-7 [&:not(:first-child)]:my-8">
                            <img className={"bg-cover bg-center rounded-md"}
                                 src={"/images/case-studies/case-chevalier-img1.png"}/>
                            <figcaption className={"text-center text-muted-foreground my-1"}>
                                Illustration de la logique React. Encadré = Composant en jsx
                            </figcaption>
                        </p>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-9">
                            Le processus de développement
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Au début du projet Chevālier, j{"'"}ai rencontré des difficultés, car je devais
                            m{"'"}habituer à React et aux différentes bibliothèques de composants utilisées,
                            ce qui m{"'"}a obligé à sortir de ma zone de confort. Au fil du processus de
                            développement, j{"'"}ai réalisé plusieurs brainstormings pour certains composants
                            de page ou pour le contenu global. Certains éléments ont évolué conformément à
                            mes attentes, tandis que d{"'"}autres ont été abandonnés ou ont subi des
                            modifications.
                        </p>

                        <Carousel className={"mt-8"}>
                            <CarouselContent>
                                <CarouselItem>
                                    <p className="leading-7 [&:not(:first-child)]:mb-4 [&:not(:first-child)]:sm:mb-8">
                                        <img className={"bg-cover bg-center rounded-md"}
                                             src={"/images/case-studies/case-chevalier-img2.jpg"}/>
                                        <figcaption className={"text-center text-muted-foreground my-1"}>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Brainstorming : Création des composants de la page "À propos"
                                        </figcaption>
                                    </p>
                                </CarouselItem>
                                <CarouselItem>
                                    <p className="leading-7 [&:not(:first-child)]:mb-4 [&:not(:first-child)]:sm:mb-8">
                                        <img className={"bg-cover bg-center rounded-md"}
                                             src={"/images/case-studies/case-chevalier-img3.jpg"}/>
                                        <figcaption className={"text-center text-muted-foreground my-1"}>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Brainstorming : Layout de la page "À propos" + Menu de navigation
                                        </figcaption>
                                    </p>
                                </CarouselItem>
                                <CarouselItem>
                                    <p className="leading-7 [&:not(:first-child)]:mb-4 [&:not(:first-child)]:sm:mb-8">
                                        <img className={"bg-cover bg-center rounded-md"}
                                             src={"/images/case-studies/case-chevalier-img4.jpg"}/>
                                        <figcaption className={"text-center text-muted-foreground my-1"}>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Brainstorming : Idée de mise en page de la page "Ressources"
                                        </figcaption>
                                    </p>
                                </CarouselItem>
                                <CarouselItem>
                                    <p className="leading-7 [&:not(:first-child)]:mb-4 [&:not(:first-child)]:sm:mb-8">
                                        <img className={"bg-cover bg-center rounded-md"}
                                             src={"/images/case-studies/case-chevalier-img5.jpg"}/>
                                        <figcaption className={"text-center text-muted-foreground my-1"}>
                                            Brainstorming : Idée de mise en page pour la veille technologique
                                            (composants)
                                        </figcaption>
                                    </p>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </Carousel>

                        <Card className={"mt-8"}>
                            <CardHeader>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <CardTitle>Exemple d{"'"}un composant issue du brainstorming</CardTitle>
                                <CardDescription>
                                    Le composant LangChart, présenté dans le brainstorming pour la création
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    de la page "À Propos", était initialement prévu pour représenter les
                                    langues que je maîtrise couramment. Bien qu{"'"}il ne soit pas utilisé
                                    actuellement, il le sera dans un avenir proche.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center">
                                <LangChart/>
                            </CardContent>
                        </Card>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-9">
                            Le routage client
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Une autre problématique rencontrée lors du développement de Chevālier a été
                            la <strong>navigation entre les pages</strong>. Contrairement au HTML
                            traditionnel, je ne pouvais pas utiliser simplement un balisage <strong>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p> &lt;a href="research.html"&gt; Lorem ipsum &lt;/a&gt; </p>
                        </strong>
                            <br className="hidden sm:inline"/>Pour résoudre ce problème, j{"'"}ai intégré
                            une nouvelle bibliothèque appelée React Router, qui m{"'"}a permis de gérer
                            efficacement la navigation côté client. Cette solution m{"'"}a offert la
                            possibilité de créer des liens de manière dynamique et de rendre la navigation
                            plus fluide pour les utilisateurs, tout en optimisant les performances du site
                        </p>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-7">
                            L{"'"}idée de certaines fonctionnalités
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            En recherchant de l{"'"}inspiration pour mon portfolio, jai remarqué que
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            de nombreux portfolios incluaient des sections "Case Studies" ou
                            études de cas. Ces sections permettent de présenter un projet de manière
                            détaillée, en exposant les problématiques rencontrées, les solutions
                            apportées et tout le processus de développement. J{"'"}ai choisi d{"'"}adopter
                            cette approche car elle permet à une personne externe de comprendre ma
                            philosophie et ma méthodologie en matière de développement de solutions
                            applicatives.
                        </p>

                        <h4 className="scroll-m-20 text-xl font-bold tracking-tight mt-7">
                            Conclusion
                        </h4>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            La réalisation de Chevālier m{"'"}a permis de constater à quel point
                            le développement web avec un framework comme React JS et l{"'"}utilisation
                            de TailwindCSS facilitent la conception de sites complexes. Travailler avec
                            des composants modulaires offre une approche plus flexible et efficace, où
                            chaque élément s{"'"}emboîte comme des pièces de Lego pour former une solution
                            applicative cohérente. L{"'"}utilisation de TailwindCSS a également accéléré
                            le processus de développement en permettant la création rapide de composants
                            responsifs grâce à ses propriétés prédéfinies pour différentes tailles d{"'"}écrans.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}