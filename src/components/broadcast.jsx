import {InfoCircledIcon} from "@radix-ui/react-icons";

export function Broadcast() {
    return (
        <>
            <div className={"pb-2"}>
                <div className={"bg-[#ececfe] h-full"}>
                    <div className={"container relative h-32 md:h-20 lg:h-11 flex items-center justify-center"}>
                        <div
                            className={"inline-flex gap-1 items-center px-3 py-1 text-sm font-bold justify-items-center text-[#000091]"}>
                            <InfoCircledIcon className={"hidden md:visible"}/>
                            Ce site web est actuellement en cours de développement. Vous êtes actuellement en
                            train de visionner la version {"'Release Candidate 5'"} du site web.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}