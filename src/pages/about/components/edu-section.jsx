import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";

export function EduSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <div className={"flex-1 mt-8"}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value={"item-1"}>
                            <AccordionTrigger className={"hover:no-underline"}>
                                <h1 className={"scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl "}>
                                    Mon Parcours Scolaire
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