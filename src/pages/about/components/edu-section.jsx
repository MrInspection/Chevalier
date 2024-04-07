import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

export function EduSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <div className={"flex-1 mt-8"}>
                    <Separator />
                    <Accordion type="single" collapsible>
                        <AccordionItem value={"item-0"}>
                            <AccordionTrigger> Mon Parcours Scolaire (synthétique) </AccordionTrigger>
                            <AccordionContent>
                                <div className={"grid gap-4 md:grid-cols-3 lg:grid-cols-3 md:items-center my-2"}>

                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Juillet 2022
                                            </CardTitle>
                                            <svg width="15" height="15"
                                                 viewBox="0 0 15 15"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="h-4 w-4 text-muted-foreground"
                                            >
                                                <path
                                                    d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div
                                                className="text-xl font-bold">Baccalauréat Général</div>
                                            <p className="text-xs text-muted-foreground">
                                                Lycée de Petite-terre, Pamandzi (976)
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader
                                            className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Sept. 2022 - Juil. 2023
                                            </CardTitle>
                                            <svg width="15" height="15"
                                                 viewBox="0 0 15 15"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="h-4 w-4 text-muted-foreground"
                                            >
                                                <path
                                                    d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div
                                                className="text-xl font-bold">CPGE Scientifique</div>
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
                                            <svg width="15" height="15"
                                                 viewBox="0 0 15 15"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="h-4 w-4 text-muted-foreground"
                                            >
                                                <path
                                                    d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div
                                                className="text-xl font-bold">BTS SIO</div>
                                            <p className="text-xs text-muted-foreground">
                                                Lycée Gaston Berger, Lille (59)
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>


                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"item-1"}>
                            <AccordionTrigger>
                                Mon Parcours Scolaire (détaillé)
                            </AccordionTrigger>
                            <AccordionContent>

                                <div className={"text-justify my-3"}>
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
                                        Cependant, dès ma première année en classe préparatoire, une visite au
                                        campus de l{"'"}école d{"'"}ingénieurs Arts & Métiers a suscité des doutes
                                        quant à cette orientation. La cadence effrénée et la pression constante de
                                        la classe préparatoire ne correspondaient pas à mon style d{"'"}apprentissage.
                                        J{"'"}ai alors commencé à envisager une réorientation vers l{"'"}informatique,
                                        domaine qui avait captivé mon intérêt grâce à mes premières expériences
                                        autodidactes en développement Java au lycée.
                                    </p>
                                    <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                                        Malgré les incertitudes et le malaise ressentis en classe préparatoire, j{"'"}ai
                                        choisi de terminer cette année avant de concrétiser ma réorientation vers
                                        l{"'"}informatique, capitalisant ainsi sur les compétences et méthodologies
                                        acquises au cours de cette formation.
                                    </p>

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
                    </Accordion>
                </div>
            </div>
        </>
    )
}