import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {EmptyStatistics, EmptyStudies, EmptyTechWatch} from "@/pages/research/components/empty-database.jsx";
import {TechResearch} from "@/pages/research/data/tech-articles/tech-research.jsx";
import {StudiesResearch} from "@/pages/research/data/cases-studies/cases-research.jsx";

export function ResearchCategories() {
    return (
        <>
            <div className={""}>
                <div className={"container relative mx-auto max-w-6xl mb-32"}>
                    <div className={"flex-1 mt-4 flex-col justify-center"}>
                        <Tabs defaultValue="tech">
                            <TabsList className={"mb-2"}>
                                <TabsTrigger value="tech">Veille</TabsTrigger>
                                <TabsTrigger value="cases">Études de cas</TabsTrigger>
                                <TabsTrigger value="statistics">Statistiques</TabsTrigger>
                            </TabsList>
                            <TabsContent value="cases"><StudiesResearch /> </TabsContent>
                            <TabsContent value="tech"> <TechResearch /> </TabsContent>
                            <TabsContent value="statistics"><EmptyStatistics/> </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}
