import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {Button} from "@/components/ui/button.jsx";
import {CopyIcon, EnvelopeOpenIcon, FileTextIcon, PersonIcon} from "@radix-ui/react-icons";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.jsx";
import {
    Dialog,
    DialogClose,
    DialogContent, DialogDescription,
    DialogFooter,
    DialogHeader, DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";

function AboutMe() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl pt-8"}>
                <div className={"my-10"}>
                    <div className="md:flex items-center justify-between space-x-4">
                        <div className="md:flex items-center space-x-8">
                            <Avatar className={"size-72"}>
                                <AvatarImage src="/images/inquisitive-avatar-dark.png"/>
                                <AvatarFallback className={"text-6xl"}>MAH</AvatarFallback>
                            </Avatar>
                            <div className={"md:flex-1"}>
                                <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
                                    Moussa ABDALLAH HOUMADI
                                </h2>
                                <TooltipProvider>
                                    <Tooltip>
                                        <p className="leading-7 [&:not(:first-child)]:mt-3 md:text-justify">
                                            Passionné de sciences depuis l{"'"}enfance, je suis naturellement tourné
                                            vers l{"'"}informatique. La technologie est un élément qui m{"'"}a toujours
                                            fasciné et qui m{"'"}a poussé en apprendre d{"'"}avantage dessus sur la
                                            conception de sites et autres. Après une année de <TooltipTrigger
                                            className={"font-bold"}>CPGE</TooltipTrigger>, je me suis tourné vers ce
                                            domaine en BTS SIO (services informatiques aux organisations) ou je
                                            m{"'"}investis pour créer des <strong>projets qualitatifs</strong>.
                                        </p>
                                        <TooltipContent>
                                            <p>Classes préparatoires aux grandes écoles (scientifique)</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <div className={"flex space-x-2 py-5"}>
                                    <a
                                        href={"/documents/curriculum-vitae.pdf"}
                                        target={"_blank"}
                                        rel="noreferrer noopener"
                                    >
                                        <Button variant={"outline"}>
                                            <FileTextIcon className="mr-2 h-4 w-4"/> Voir mon CV
                                        </Button>
                                    </a>

                                    <div>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant={"outline"}>
                                                    <PersonIcon className="mr-2 h-4 w-4"/>
                                                    Me contacter
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-md">
                                                <DialogHeader>
                                                    <DialogTitle>Mes Coordonnées</DialogTitle>
                                                    <DialogDescription>
                                                        Consulter mes coordonnées pour pouvoir me contacter
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="flex items-center space-x-2">
                                                    <div className="grid flex-1 gap-2">
                                                        <Label htmlFor="link" className="sr-only">
                                                            Link
                                                        </Label>
                                                        <Input
                                                            id="link"
                                                            defaultValue="moussaabdallahhoumadi@gmail.com"
                                                            readOnly
                                                        />
                                                    </div>
                                                    <a href={"mailto:moussaabdallahhoumadi@gmail.com"}>
                                                        <Button type="submit" size="sm" className="px-3">
                                                            <span className="sr-only">Copy</span>
                                                            <EnvelopeOpenIcon className="h-4 w-4"/>
                                                        </Button>
                                                    </a>
                                                </div>
                                                <div className="grid gap-2 grid-cols-3 -my-1">
                                                    <div className={"col-span-2"}>
                                                        <Label htmlFor="address" className="sr-only"> Adresse
                                                        </Label>
                                                        <Input
                                                            id="address"
                                                            defaultValue="50 Rue du Bas Liévin, 59000 Lille"
                                                            readOnly
                                                        />
                                                    </div>
                                                    <Label htmlFor="phone" className="sr-only"> Numéro de téléphone
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        defaultValue="0744619400"
                                                        readOnly
                                                    />
                                                </div>
                                                <DialogFooter className="sm:justify-start" />
                                            </DialogContent>
                                        </Dialog>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe