import {ProjectsSection} from "@/pages/projects/components/data/projects-section.jsx";
import {Button} from "@/components/ui/button.jsx";
import React from "react";
import {Separator} from "@/components/ui/separator.jsx";

export function ProjectsContent () {
    return (
        <>
            <div className={"mt-14"}>
                <div className={"container relative mx-auto max-w-6xl mb-14"}>
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
                    <div className={"container relative max-w-6xl"}>
                        <h1 className="scroll-m-20 text-xl font-bold tracking-tight md:text-2xl lg:text-xl mt-10">
                            Choix d{"'"}outils professionnels de JetBrains
                        </h1>

                        <p className="leading-7 [&:not(:first-child)]:mt-3">
                            Pour mes projets, je privilégierai l<strong>{"'"}utilisation exclusive</strong> des outils
                            professionnels
                            de développement conçus par JetBrains, reconnus mondialement pour leur puissance et leur
                            efficacité dans la création de programmes Java, Web, et autres. Parmi ces outils, je
                            compte notamment utiliser :

                            <ul className="my-4 ml-6 list-disc [&>li]:mt-1">
                            <li><strong>IntelliJ IDEA Ultimate</strong> pour le développement général (Java)</li>
                                <li><strong>WebStorm</strong> et <strong>PhpStorm</strong> pour
                                    des projets de développement Web
                                </li>
                            </ul>
                        </p>
                        <h1 className="scroll-m-20 text-xl font-bold tracking-tight md:text-2xl lg:text-xl mt-7">
                            Structure de niveau entreprise pour les projets Web
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-3 mb-8">
                            Pour la structuration de mes projets web, j{"'"}opterai pour une approche de niveau
                            entreprise en utilisant des frameworks tels que Vite avec ReactJS ou Next.js, tous
                            deux intégrant React. Chaque projet web sera clairement étiqueté pour indiquer le
                            framework utilisé dans la conception de la solution applicative. Dans le cadre du
                            développement web, j{"'"}exploiterai également largement Tailwind CSS et quelques
                            librairies de composants (Radix UI, Shadcn ou NextUI).
                        </p>
                        <h1 className="scroll-m-20 text-xl font-bold tracking-tight md:text-2xl lg:text-xl mt-7">
                            Langage de prédilection et diversification
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-3 mb-10">
                            Quant à mon langage de prédilection, <strong>Java</strong> (Java, JavaFX) reste au cœur
                            de mes priorités. La <strong>majorité de mes projets</strong>, en dehors du développement
                            web, seront
                            réalisés dans ce langage. Cependant, je reste ouvert à l{"'"}exploration d{"'"}autres
                            langages, comme Python, pour m{"'"}entraîner et réaliser des projets diversifiés.
                        </p>
                    </div>
                    <Separator/>
                </div>
            </div>
            <div className={"container relative mx-auto max-w-7xl items-center my-6 mb-32"}>
                <div className={"flex flex-col justify-center items-center w-full h-full py-2 md:py-10"}>
                    <ProjectsSection/>
                </div>
            </div>
        </>
    )
}