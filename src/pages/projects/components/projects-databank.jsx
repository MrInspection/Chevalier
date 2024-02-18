import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import {AllProjects} from "@/pages/projects/components/filters/all-projects.jsx";
import {EmptyProjects} from "@/pages/projects/components/empty-projects.jsx";

export function ProjectsDatabank() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl -my-10"}>
                <div className={"flex-1 mt-8 flex-col justify-center"}>
                    <Tabs defaultValue="preview-1">
                        <div className={"max-w-6xl justify-center"}>
                            <div className={"flex flex-col items-center justify-items-center gap-2 my-4"}>
                                <TabsList className={"grid max-w-2xl grid-cols-5"}>
                                    <TabsTrigger value="preview-1">Everything</TabsTrigger>
                                    <TabsTrigger value="preview-2">Java</TabsTrigger>
                                    <TabsTrigger value="preview-3">Web</TabsTrigger>
                                    <TabsTrigger value="preview-4">Apps</TabsTrigger>
                                    <TabsTrigger value="preview-5">Python</TabsTrigger>
                                </TabsList>
                            </div>

                        </div>

                        <TabsContent value="preview-1"> <AllProjects/> </TabsContent>
                        <TabsContent value="preview-2"> <EmptyProjects/> </TabsContent>
                        <TabsContent value="preview-3"> <EmptyProjects/> </TabsContent>
                        <TabsContent value="preview-4"> <EmptyProjects/> </TabsContent>
                        <TabsContent value="preview-5"> <EmptyProjects/> </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}