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
import {ReaderIcon} from "@radix-ui/react-icons";
export function TechDatabank() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <div className={"flex-1 mt-8 h-[275px] overflow-hidden"}>
                    <Command className="rounded-lg border shadow-md h-full">
                        <CommandInput placeholder="Rechercher un livrable dans la banque de données en fonction du mois..."/>
                        <CommandEmpty>Aucun résultat trouvé dans la banque de données </CommandEmpty>
                        <ScrollArea className="h-full overflow-y-auto">
                            <CommandList className={"overflow-hidden"}>

                                <CommandGroup heading="Les éditions de janvier">
                                    <CommandItem>
                                        <ReaderIcon className="mr-2 h-4 w-4"/>
                                        <span>Veille Technologique, ChatGPT - Edition #1 (Janvier 2024) [Indisponible]</span>
                                    </CommandItem>

                                    <CommandItem>
                                        <ReaderIcon className="mr-2 h-4 w-4"/>
                                        <span>Veille Technologique, ChatGPT - Edition #2 (Janvier 2024) [Indisponible]</span>
                                    </CommandItem>

                                    <CommandItem>
                                        <ReaderIcon className="mr-2 h-4 w-4"/>
                                        <span>Veille Technologique, ChatGPT - Edition #3 (Janvier 2024) [Indisponible]</span>
                                    </CommandItem>

                                    <CommandItem>
                                        <ReaderIcon className="mr-2 h-4 w-4"/>
                                        <span>Veille Technologique, ChatGPT - Edition #4 (Janvier 2024)</span>
                                    </CommandItem>

                                    <CommandItem>
                                        <ReaderIcon className="mr-2 h-4 w-4"/>
                                        <span>Veille Technologique, ChatGPT - Edition #5 (Janvier 2024)</span>
                                    </CommandItem>

                                </CommandGroup>

                                <CommandSeparator/>

                                <CommandGroup heading="Les éditions de février">
                                    <CommandItem>
                                        <ReaderIcon className="mr-2 h-4 w-4"/>
                                        <span>Veille Technologique, ChatGPT - Edition #6 (Février 2024)</span>
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