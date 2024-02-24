import {ProjectsCategories} from "@/pages/projects/components/projects-categories.jsx";
import React from "react";
import {Separator} from "@/components/ui/separator.jsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";

export function ProjectsHero () {
    return (
        <>
            <div className={"bg-[#ececfe] h-full justify-center"}>
                <div className={"container relative mx-auto max-w-6xl mb-10"}>
                    <div className={"py-12"}>
                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-4xl text-[#000091]">
                            Mon portfolio de développement
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-2 text-[#000091] font-medium">
                            La pratique est la clé de la maîtrise en développement. Seuls ceux qui développent
                            deviennent de véritables développeurs.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export function ProjectsIntroduction() {
    return (
        <>
            <div className={"mt-14"}>
                <div className={"container relative mx-auto max-w-6xl mb-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-2xl lg:text-2xl ">
                            Présentation
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-3 mb-10">
                            Les projets constituent le <strong>socle fondamental</strong> pour tout développeur
                            souhaitant évoluer dans son domaine et accroître ses connaissances. Pour mettre en
                            pratique les enseignements théoriques reçus en cours et les appliquer à des projets
                            concrets, je m{"'"}engage à créer des initiatives qui démontrent mes compétences.
                            Dans cette optique, j{"'"}ai lancé le programme <strong>Performante</strong> avec
                            pour objectif clair et précis : <strong>concevoir des projets me permettant de
                            m{"'"}entraîner et de perfectionner mes compétences.</strong>
                        </p>
                    </div>
                    <Separator/>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className={"font-bold"}>Mes choix d{"'"}outils professionnels</AccordionTrigger>
                            <AccordionContent>
                                <div className={"mb-3"}>
                                    <p className="leading-7 [&:not(:first-child)]:mt-3">
                                        Pour mes projets, je privilégierai l<strong>{"'"}utilisation
                                        exclusive</strong> des outils
                                        professionnels
                                        de développement conçus par JetBrains, reconnus mondialement pour leur puissance
                                        et leur
                                        efficacité dans la création de programmes Java, Web, et autres. Parmi ces
                                        outils, je
                                        compte notamment utiliser :

                                        <ul className="my-4 ml-6 list-disc [&>li]:mt-1">
                                            <li><strong>IntelliJ IDEA Ultimate</strong> pour le développement général
                                                (Java)
                                            </li>
                                            <li><strong>WebStorm</strong> et <strong>PhpStorm</strong> pour
                                                des projets de développement Web
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className={"font-bold"}>La structuration de mes projets
                                Web</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 [&:not(:first-child)]:mt-3 mb-3">
                                    Pour la structuration de mes projets web, j{"'"}opterai pour une approche de niveau
                                    entreprise en utilisant des frameworks tels que Vite avec ReactJS ou Next.js, tous
                                    deux intégrant React. Chaque projet web sera clairement étiqueté pour indiquer le
                                    framework utilisé dans la conception de la solution applicative. Dans le cadre du
                                    développement web, j{"'"}exploiterai également largement Tailwind CSS et quelques
                                    librairies de composants (Radix UI, Shadcn ou NextUI).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className={"font-bold"}>Langage de prédilection et diversification</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 [&:not(:first-child)]:mt-3 mb-3">
                                    Quant à mon langage de prédilection, <strong>Java</strong> (Java, JavaFX) reste au cœur
                                    de mes priorités. La <strong>majorité de mes projets</strong>, en dehors du développement
                                    web, seront
                                    réalisés dans ce langage. Cependant, je reste ouvert à l{"'"}exploration d{"'"}autres
                                    langages, comme Python, pour m{"'"}entraîner et réaliser des projets diversifiés.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}