import {InfoCircledIcon, Link1Icon, Link2Icon, LinkedInLogoIcon, NotionLogoIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";

export function Broadcast() {
    return (
        <>
            <div className={"pb-2"}>
                <div className={"bg-[#e9edfe] h-full"}>
                    <div className={"container relative h-32 md:h-20 lg:h-11 flex items-center justify-center"}>
                        <div
                            className={"inline-flex gap-1 items-center px-3 py-1 text-sm font-bold justify-items-center text-[#2F4077]"}>
                            <a
                                className={"underline"}
                                href={"https://www.linkedin.com/posts/moussa-abdallah-houmadi_%E3%85%A4-ravi-de-partager-mon-progr%C3%A8s-avec-vous-activity-7182665154319261696-7ui5?utm_source=share&utm_medium=member_desktop"}
                                target={"_blank"}
                                rel="noreferrer noopener"
                                >
                                <LinkedInLogoIcon className={"invisible lg:visible"}/>
                                La nouvelle version du portfolio est en cours de développement. Consulter le post LinkedIn
                                Post LinkedIn pour voir la démonstration de ProjectUltron
                                Argumentum
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}