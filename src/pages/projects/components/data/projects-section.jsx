import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import {EmptyProjects} from "@/pages/projects/components/data/empty-projects.jsx";
import React from "react";
import {FilterEverything} from "@/pages/projects/components/data/filter-everything.jsx";
export function ProjectsSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl -my-10"}>
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-2xl lg:text-3xl">
                    Mes différents projets
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-1">
                    La pratique est la clé de la maîtrise en développement. Seuls ceux qui développent deviennent de véritables développeurs.
                </p>
                <div className={"flex-1 mt-5 flex-col justify-center"}>
                    <Tabs defaultValue="everything" className="mb-5">
                        <TabsList className={"mb-2"}>
                            <TabsTrigger value="everything">Tous</TabsTrigger>
                            <TabsTrigger value="java">Java</TabsTrigger>
                            <TabsTrigger value="web">Web</TabsTrigger>
                            <TabsTrigger value="mobile">Mobile</TabsTrigger>
                        </TabsList>
                        <TabsContent value="everything"><FilterEverything /></TabsContent>
                        <TabsContent value="java"> <EmptyProjects/> </TabsContent>
                        <TabsContent value="web"> <EmptyProjects/> </TabsContent>
                        <TabsContent value="mobile"> <EmptyProjects/> </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}