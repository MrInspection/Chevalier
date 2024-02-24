import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import {EmptyProjects} from "@/pages/projects/components/empty-projects.jsx";
import {FilterEverything} from "@/pages/projects/components/projects-filters.jsx";

export function ProjectsCategories() {
    return (
        <>
            <div className={"mb-24"}>
                <div className={"container relative mx-auto max-w-6xl"}>
                    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
                        Mes réalisations
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-1">
                        La pratique est la clé de la maîtrise en développement.
                        Seuls ceux qui développent deviennent de véritables développeurs.
                    </p>
                    <div className={"flex-1 mt-5 flex-col justify-center"}>
                        <Tabs defaultValue="everything" className="mb-5">
                            <TabsList className={"mb-2"}>
                                <TabsTrigger value="everything">Tous</TabsTrigger>
                                <TabsTrigger value="java">Java</TabsTrigger>
                                <TabsTrigger value="web">Web</TabsTrigger>
                                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                            </TabsList>
                            <TabsContent value="everything"><FilterEverything/></TabsContent>
                            <TabsContent value="java"> <EmptyProjects/> </TabsContent>
                            <TabsContent value="web"> <EmptyProjects/> </TabsContent>
                            <TabsContent value="mobile"> <EmptyProjects/> </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>

        </>
    )
}