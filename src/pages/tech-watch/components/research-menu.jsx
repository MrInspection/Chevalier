import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {EmptyDatabase} from "@/pages/tech-watch/data/empty-database.jsx";
import {EmptyStatistics} from "@/pages/tech-watch/data/statistics/empty-statistics.jsx";
import {EmptyStudies} from "@/pages/tech-watch/data/cases-studies/empty-studies.jsx";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command.jsx";
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {ArchiveIcon, BarChartIcon, FileIcon, FileTextIcon} from "@radix-ui/react-icons";


export function ResearchMenu() {
    return (
        <>
            <div className={""}>
                <div className={"container relative mx-auto max-w-6xl mb-32"}>

                    <Tabs defaultValue="presentation">

                        <TabsList className={"mb-2"}>
                            <TabsTrigger value="tech-watch">Veille Technologique</TabsTrigger>
                            <TabsTrigger value="case-studies">Études de Cas</TabsTrigger>
                            <TabsTrigger value="statistics">Statistiques</TabsTrigger>
                        </TabsList>

                        <TabsContent value="presentation"><EmptyDatabase /> </TabsContent>
                        <TabsContent value="case-studies"><EmptyStudies /> </TabsContent>
                        <TabsContent value="tech-watch"><EmptyDatabase /> </TabsContent>
                        <TabsContent value="statistics"><EmptyStatistics /> </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export function RsearchDatabank() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mb-8"}>
                <div className={"flex-1 mt-8 h-[175px] overflow-hidden"}> {/* Added overflow-hidden here */}
                    <Command className="rounded-lg border shadow-md h-full">
                        <CommandInput placeholder="Search elements to the Research Databank"/>
                        <CommandEmpty>Aucun résultat trouvé dans la base de données </CommandEmpty>
                        <ScrollArea className="h-full overflow-y-auto"> {/* Added h-full here */}
                            <CommandList className={"overflow-hidden"}>
                                <CommandGroup heading="Featured Documents">
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span>Evolution statistiques de la veille technologique sur ChatGPT</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span>Veille Technologique — Présentation d{"'"}introduction sur ChatGPT</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span>Etude de Cas — La création du portfolio ProjectUltron Chevalier</span>
                                    </CommandItem>
                                </CommandGroup>

                                <CommandSeparator/>

                                <CommandGroup heading="Veille Technologique">
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span> ChatGPT - Rapport #1 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span>ChatGPT - Rapport #2 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span>ChatGPT - Rapport #3 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span>ChatGPT - Rapport #4 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4"/>
                                        <span>ChatGPT - Rapport #5 (Janvier 2024)</span>
                                    </CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </ScrollArea>
                    </Command>
                </div>
            </div>
        </>
    )


}