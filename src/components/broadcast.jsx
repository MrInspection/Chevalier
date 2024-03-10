import {InfoCircledIcon} from "@radix-ui/react-icons";

export function Broadcast() {
    return (
        <>
            <div className={"pb-2"}>
                <div className={"bg-[#e9edfe] h-full"}>
                    <div className={"container relative h-32 md:h-20 lg:h-11 flex items-center justify-center"}>
                        <div
                            className={"inline-flex gap-1 items-center px-3 py-1 text-sm font-bold justify-items-center text-[#2F4077]"}>
                            <InfoCircledIcon className={"invisible lg:visible"}/>
                            Pour la prochaine mise à jour majeure de ce site web, nous mettrons à jour l'ensemble du framework de Vite & React vers Next.js.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}