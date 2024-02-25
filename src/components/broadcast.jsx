import {InfoCircledIcon} from "@radix-ui/react-icons";

export function Broadcast() {
    return (
        <>
            <div className={"pb-2"}>
                <div className={"bg-[#e9edfe] h-full"}>
                    <div className={"container relative h-32 md:h-20 lg:h-11 flex items-center justify-center"}>
                        <div
                            className={"inline-flex gap-1 items-center px-3 py-1 text-sm font-bold justify-items-center text-[#2F4077]"}>
                            <InfoCircledIcon className={"hidden md:visible"}/>
                            🎉 La phase de développement de ce site web est maintenant terminée. Vous êtes actuellement en train de visualiser la première version officielle de ce projet.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}