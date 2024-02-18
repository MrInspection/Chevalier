import React from "react";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import SkillsChart from "@/pages/about/charts/skills-graph.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function SkillsSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl py-10"}>
                <div className={"md:flex items-center justify-between space-x-4"}>
                    <div className={"md:flex space-x-3 items-center justify-between"}>
                        <div className={"md:pe-10"}>
                            <h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl "}>
                                Mes Compétences
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                                Au cours de mon parcours, j{"'"}ai eu l{"'"}occasion d{"'"}acquérir un éventail
                                diversifié de compétences. Que ce soit dans le cadre de ma formation actuelle en
                                BTS Services informatiques aux organisations ou lors de ma première année de classe
                                préparatoire, j{"'"}ai développé une rigueur et une méthodologie approfondie. De
                                la programmation à la gestion de projet, mon objectif d{"'"}avoir les compétences
                                nécessaire pour mon projet professionnel.
                            </p>
                            <div className={"space-x-2 py-5"}>
                                <Button> <InfoCircledIcon className="mr-2 h-4 w-4"/>Tableau de mes compétences</Button>
                            </div>
                        </div>
                        <SkillsChart/>
                    </div>
                </div>

            </div>
        </>
    );
}