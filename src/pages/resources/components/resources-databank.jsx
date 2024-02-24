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

export function ResourcesDatabank() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl"}>
                <div className={"flex-1 mt-8 h-[175px] overflow-hidden"}> {/* Added overflow-hidden here */}
                    <Command className="rounded-lg border shadow-md h-full">
                        <CommandInput placeholder="Rechercher des ressources dans la banque de données...." />
                        <CommandEmpty>Aucun résultat trouvé dans la banque de données </CommandEmpty>
                        <ScrollArea className="h-full overflow-y-auto"> {/* Added h-full here */}
                            <CommandList className={"overflow-hidden"}>
                                <CommandGroup heading="Featured Documents">
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span> Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <FileTextIcon className="mr-2 h-4 w-4" />
                                        <span>Lorem ipsum dolor sit amet consectetur elit</span>
                                    </CommandItem>
                                    <CommandItem>
                                        <ArchiveIcon className="mr-2 h-4 w-4" />
                                        <span>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                                    </CommandItem>
                                </CommandGroup>

                                <CommandSeparator />
                            </CommandList>
                        </ScrollArea>
                    </Command>
                </div>
            </div>
        </>
    )
}