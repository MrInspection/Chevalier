import React from "react";

export function ResearchHero() {
    return (
        <>
            <div className={"bg-[#fee7fc] h-full justify-center"}>
                <div className={"container relative mx-auto max-w-6xl mb-10"}>
                    <div className={"py-8"}>
                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-[#6E445A]">
                            Bureau de recherches et d{"'"}études statistiques de ProjectUltron
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export function ResearchContent() {
    return (
        <>
            <div className={"mt-16"}>
                <div className={"container relative mx-auto max-w-6xl mb-4"}>
                    <div className={"md:flex space-x-10 align-middle"}>

                        <div>
                            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-2xl lg:text-4xl ">
                                L{"'"}importance de la recherche
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-5 mb-9">
                                Dans tous les domaines, la compétence de <strong>rechercher</strong> et
                                d{"'"}<strong>analyser</strong> des informations avec rigueur est d{"'"}une
                                importance capitale. Dans le domaine du développement, cette compétence se
                                traduit par la pratique de la veille technologique afin de rester constamment
                                informé des avancées dans les technologies pertinentes, ainsi que par la capacité
                                à analyser les articles et documents collectés au cours de cette veille. De plus,
                                elle se manifeste également à travers la réalisation d{"'"}études de cas
                                détaillées pour des projets spécifiques, permettant ainsi une analyse approfondie
                                des solutions mises en œuvre.
                            </p>
                        </div>
                        <img src={"/images/research.png"} alt={"Tech Watch Thumbnail"}
                             className={"rounded-md object-cover max-h-60 w-80"}>
                        </img>

                    </div>

                </div>
            </div>
        </>
    )
}
