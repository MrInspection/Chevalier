import {DatabankSearch} from "@/pages/databank/components/databank-search.jsx";
import PinnedContents from "@/pages/databank/components/pinned-contents.jsx";

export default function DatabankHeroSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl items-center my-6"}>
                <div className={"flex flex-col justify-center items-center w-full h-full py-6 md:py-10"}>
                    <section
                        className="max-w-[980px] flex-col items-center justify-items-center gap-6 pb-8 pt-8 md:py-10">
                        <div className="flex flex-col items-center justify-items-center gap-2">
                            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl my-2 text-center">
                                ProjectUltron Databank<br className="hidden sm:inline"/>
                            </h1>
                            <p className="sm:max-w-[700px] md:max-w-4xl text-lg text-muted-foreground text-center">
                                Bienvenue dans la banque de données de ProjectUltron. Ici, vous trouverez
                                tous les documents de notre site web, accessibles via la barre de recherche
                                ci-dessous. En sélectionnant un résultat de recherche, le document correspondant
                                s{"'"}ouvrira automatiquement, vous permettant ainsi de le consulter instantanément.
                            </p>
                        </div>
                        <DatabankSearch />
                        <PinnedContents />
                    </section>
                </div>
            </div>
        </>
    )
}