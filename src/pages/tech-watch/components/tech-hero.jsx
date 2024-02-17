import {TechIntro} from "@/pages/tech-watch/components/tech-intro.jsx";
import {TechDatabank} from "@/pages/tech-watch/components/tech-databank.jsx";

export function TechHero() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl items-center my-6 mb-32"}>
                <div className={"flex flex-col justify-center items-center w-full h-full py-2 md:py-10"}>
                    <section className="max-w-[980px] flex-col items-center
                     justify-items-center gap-6 pb-8 pt-8 md:py-10">
                        <div className="flex flex-col items-center justify-items-center gap-2">
                            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl my-2 text-center">
                                Veille Technologique<br className="hidden sm:inline"/>
                            </h1>
                            <p className="sm:max-w-[700px] md:max-w-4xl text-lg text-muted-foreground text-center">
                                Dans un monde où les progrès technologiques sont rapides et constants, la veille
                                technologique se révèle être une démarche proactive d{"'"}une importance capitale.
                                Elle englobe une surveillance méticuleuse des avancées, des tendances et des
                                innovations dans le domaine technologique. Cette approche stratégique dépasse
                                la simple observation pour embrasser une anticipation des changements à venir,
                                une connaissance approfondie des dernières découvertes et une capacité à saisir
                                les opportunités émergentes. En adoptant une attitude vigilante et proactive, les
                                organisations se positionnent favorablement pour rester compétitives dans un
                                paysage technologique en perpétuelle évolution.
                            </p>
                        </div>
                        <TechDatabank />

                    </section>

                    <div className={"max-w-4xl my-3"}>
                        <TechIntro />
                    </div>


                </div>
            </div>
        </>
    )
}