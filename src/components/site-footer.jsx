function SiteFooter() {
    return (
        <>
            <footer className={"py-2 mt-10 md:px-8 md:py-0 w-full border-2 border-border/40 bottom sticky"}>
                <div className={"container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"}>
                    <p className={"text-balance text-center text-sm leading-loose text-muted-foreground md:text-left"}>
                        Built by <strong>Moussa</strong>. The source code is available on
                        <a className={"font-medium underline underline-offset-4 ps-1"}
                           href={"https://github.com/mrinspection"} target={"_blank"}
                           rel={"noreferrer"}>GitHub</a>
                        .
                    </p>
                </div>
            </footer>
        </>
    )
}

export default SiteFooter