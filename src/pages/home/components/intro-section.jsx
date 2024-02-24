import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {GitHubLogoIcon, InfoCircledIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";
import {siteConfig} from "@/config/siteConfig.js";
import {Link} from "react-router-dom";

export function IntroSection() {
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
                                <p className="leading-7 [&:not(:first-child)]:mt-3 md:text-justify">
                                    Passionné de sciences depuis l{"'"}enfance, je suis naturellement tourné
                                    vers l{"'"}informatique. La technologie est un élément qui m{"'"}a toujours
                                    fasciné et qui m{"'"}a poussé en apprendre d{"'"}avantage dessus sur la
                                    conception de sites et autres. Après une année de <strong>prépa scientifique
                                    (PTSI)</strong>, je me suis tourné vers ce
                                    domaine en BTS SIO (services informatiques aux organisations) ou je
                                    m{"'"}investis pour créer des <strong>projets qualitatifs</strong>.
                                </p>

                                <div className={"flex space-x-2 py-5"}>
                                    <Link to={"/about"}>
                                        <Button variant={"outline"}>
                                            <InfoCircledIcon className="mr-2 h-4 w-4"/>
                                            Plus d{"'"}informations
                                        </Button>
                                    </Link>
                                    <Link to={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon">
                                            <GitHubLogoIcon className="h-4 w-4"/>
                                        </Button>
                                    </Link>
                                    <Link to={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon">
                                            <LinkedInLogoIcon className="h-4 w-4"/>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}