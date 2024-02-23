import React from "react";

export function DepartmentHero() {
    return (
        <>
            <div className={"bg-[#fee7fc] h-full justify-center"}>
                <div className={"container relative mx-auto max-w-6xl mb-10"}>
                    <div className={"py-12"}>
                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-4xl text-[#6E445A]">
                            Mon portfolio de développement
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-2 text-[#6E445A] font-medium">
                            La pratique est la clé de la maîtrise en développement. Seuls ceux qui développent deviennent de véritables développeurs.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}