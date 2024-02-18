import {ProjectsDatabank} from "@/pages/projects/components/projects-databank.jsx";

export function PorfolioHero () {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl items-center my-6 mb-32"}>
                <div className={"flex flex-col justify-center items-center w-full h-full py-2 md:py-10"}>
                    <section className="max-w-[980px] flex-col items-center
                     justify-items-center gap-6 pb-8 pt-8 md:py-10">
                        <div className="flex flex-col items-center justify-items-center gap-2">
                            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl my-2 text-center">
                                Mon Portfolio<br className="hidden sm:inline"/>
                            </h1>
                            <p className="sm:max-w-[700px] md:max-w-4xl text-lg text-muted-foreground text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </section>
                    <ProjectsDatabank />
                </div>
            </div>
        </>
    )
}