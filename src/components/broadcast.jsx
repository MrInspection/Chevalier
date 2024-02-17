import {ExclamationTriangleIcon} from "@radix-ui/react-icons";

export function Broadcast() {
    return (
        <>
            <div className={"bg-[#fee7fc] h-full"}>
                <div className={"container relative h-11 flex items-center justify-center"}>
                    <div
                        className={"inline-flex gap-1 items-center px-3 py-1 text-sm font-bold justify-items-center text-[#6E445A]"}>
                        <ExclamationTriangleIcon/>
                        This website is currently under heavy development, some features are
                        currently not available.
                    </div>
                </div>
            </div>
        </>
    )
}