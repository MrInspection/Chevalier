import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {Button} from "@/components/ui/button.jsx";
import {FileTextIcon} from "@radix-ui/react-icons";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.jsx";

function AboutMe() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl pt-8"}>
                <div className={"my-10"}>
                    <div className="md:flex items-center justify-between space-x-4">
                        <div className="md:flex items-center space-x-8">
                            <Avatar className={"size-72"}>
                                <AvatarImage src="/images/inquisitive-avatar-2.png"/>
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
                                <a href={"/documents/curriculum-vitae.pdf"}>
                                    <div className={"flex space-x-2 py-5"}>
                                        <Button> <FileTextIcon className="mr-2 h-4 w-4"/> Téléchager mon CV </Button>
                                    </div>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe