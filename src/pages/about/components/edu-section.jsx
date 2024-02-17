import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.jsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import React from "react";

export function EduSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <div className={"flex-1 mt-8"}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value={"item-1"}>
                            <AccordionTrigger className={"hover:no-underline"}>
                                <h1 className={"scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl "}>
                                    Mon Parcours
                                </h1>
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className={"text-justify"}>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                                        Mon parcours éducatif a été une exploration dynamique de mes intérêts, oscillant
                                        entre diverses carrières telles que la médecine, l{"'"}ingénierie et le monde
                                        des
                                        affaires. Bien que mes compétences se soient particulièrement distinguées dans
                                        les
                                        sciences de la vie et de la Terre (SVT), j{"'"}ai écarté l{"'"}idée de devenir
                                        médecin pour éviter un engagement prolongé dans cette voie.
                                    </p>
                                    <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                                        En classe de première, j{"'"}ai choisi des spécialités en mathématiques,
                                        physique-chimie et SVT, avant de me concentrer principalement sur les deux
                                        premières disciplines au lycée. Après avoir terminé le lycée, j{"'"}ai intégré
                                        une classe préparatoire scientifique (PTSI) avec l{"'"}intention de
                                        devenir<strong>
                                        {" "}ingénieur en électronique et en génie électrique</strong>.
                                    </p>
                                    <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                                        Cependant, dès ma première année en classe préparatoire, une visite au campus de
                                        l{"'"}école d{"'"}ingénieurs Arts & Métiers a suscité des doutes quant à cette
                                        orientation. La cadence effrénée et la pression constante de la classe
                                        préparatoire
                                        ne correspondaient pas à mon style d{"'"}apprentissage. J{"'"}ai alors commencé
                                        à
                                        envisager une réorientation vers l{"'"}informatique, domaine qui avait captivé
                                        mon
                                        intérêt grâce à mes premières expériences autodidactes en développement Java au
                                        lycée.
                                    </p>
                                    <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                                        Malgré les incertitudes et le malaise ressentis en classe préparatoire, j{"'"}ai
                                        choisi de terminer cette année avant de concrétiser ma réorientation vers
                                        l{"'"}informatique, capitalisant ainsi sur les compétences et méthodologies
                                        acquises au cours de cette formation.
                                    </p>

                                    <blockquote className="mt-6 border-l-2 pl-6 font-medium">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        "Mon expérience en prépa m{"'"}a permis d'acquérir des méthodes de travail,
                                        de la rigueur et de l{"'"}organisation, des atouts qui continuent à me servir
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        malgré ma décision d{"'"}arrêter cette voie."
                                    </blockquote>

                                    <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                                        Après l{"'"}obtention de mon BTS Services Informatiques aux Organisations (SIO),
                                        mon prochain objectif est de poursuivre en licence Méthodes Informatiques
                                        Appliquées à la Gestion des Entreprises (MIAGE). Cette licence représente
                                        une étape cruciale dans mon parcours, me permettant de consolider mes
                                        compétences
                                        en informatique tout en les appliquant au domaine de la gestion d{"'"}entreprise.
                                        Par la suite, je prévois de poursuivre en master pour approfondir mes
                                        compétences
                                        et réaliser mon aspiration professionnelle de devenir chef de projet IT ou
                                        consultant en informatique.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className={"hover:no-underline"}>
                                <h1 className={"scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl "}>
                                    Mon Éducation
                                </h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className={"grid gap-4 md:grid-cols-3 lg:grid-cols-3 md:items-center"}>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Juillet 2022
                                            </CardTitle>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075
                                                    7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576
                                                    14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576
                                                    0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689
                                                    1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727
                                                    7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689
                                                    13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992
                                                    4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992
                                                    4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992
                                                    3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003
                                                    5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003
                                                    6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                                                                fill="currentColor"
                                                            >
                                                            </path>
                                                        </svg>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p><strong>Spécialités</strong>: Mathématiques, Physique-Chime</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl font-bold">Baccalauréat Général</div>
                                            <p className="text-xs text-muted-foreground">
                                                Lycée de Petite-Terre, Pamandzi (976)
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                2022 • 2023
                                            </CardTitle>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075
                                                    7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576
                                                    14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576
                                                    0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689
                                                    1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727
                                                    7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689
                                                    13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992
                                                    4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992
                                                    4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992
                                                    3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003
                                                    5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003
                                                    6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                                                                fill="currentColor"
                                                            >
                                                            </path>
                                                        </svg>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Spécialité: PTSI - Physique, Technologie et Science de l{"'"}ingénieur</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl font-bold">Prépa Scientifique</div>
                                            <p className="text-xs text-muted-foreground">
                                                Lycée César Baggio, Lille (59)
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Actuellement
                                            </CardTitle>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075
                                                    7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576
                                                    14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576
                                                    0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689
                                                    1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727
                                                    7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689
                                                    13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992
                                                    4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992
                                                    4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992
                                                    3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003
                                                    5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003
                                                    6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                                                                fill="currentColor"
                                                            >
                                                            </path>
                                                        </svg>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p><strong>Option</strong>: SLAM (Solutions Logicielles et Applications Métiers)</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl font-bold">BTS SIO</div>
                                            <p className="text-xs text-muted-foreground">
                                                Lycée Gaston Berger, Lille (59)
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    <strong>NOTA BENE: </strong>
                                    Passez votre souris sur l{"'"}<strong>icône d{"'"}information</strong> pour afficher plus de détails.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}