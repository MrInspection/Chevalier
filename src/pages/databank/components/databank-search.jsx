import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from "@/components/ui/command.jsx";
import {ArchiveIcon, FileTextIcon} from "@radix-ui/react-icons";
import {ScrollArea} from "@/components/ui/scroll-area.jsx";

export function DatabankSearch() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <div className={"flex-1 mt-8 h-[175px] overflow-hidden"}> {/* Added overflow-hidden here */}
                    <Command className="rounded-lg border shadow-md h-full">
                        <CommandInput placeholder="Rechercher un document dans la banque de données..." />
                        <CommandEmpty>Aucun résultat trouvé dans la banque de données </CommandEmpty>
                        <ScrollArea className="h-full overflow-y-auto"> {/* Added h-full here */}
                            <CommandList className={"overflow-hidden"}>
                                <CommandGroup heading="Featured Documents">
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span> Tableau de synthèse de l{"'"}épreuve E4</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span>Document de présentation de l{"'"}épreuve E4</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <ArchiveIcon className="mr-2 h-4 w-4" />
                                        <span> Feedback Loop System - Veille Technologique (#1) </span>
                                    </CommandItem>
                                </CommandGroup>

                                <CommandSeparator />

                                <CommandGroup heading="Veille Technologique">
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span> ChatGPT - Rapport #1 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span>ChatGPT - Rapport #2 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span>ChatGPT - Rapport #3 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span>ChatGPT - Rapport #4 (Janvier 2024)</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
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