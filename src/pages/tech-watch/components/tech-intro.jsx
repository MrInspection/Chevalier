import {Card, CardHeader} from "@/components/ui/card.jsx";
import {FileTextIcon, InfoCircledIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export function TechIntro() {
    return (
        <>
            <div className={"mt-16"}>
                <div className={"container relative mx-auto max-w-6xl mb-32"}>


                    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-2xl lg:text-2xl ">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse
                        sed nisi. Magna sit amet purus gravida quis blandit turpis cursus. Ac auctor augue mauris
                        augue neque gravida in fermentum et. Sed arcu non odio euismod. Mattis rhoncus urna neque
                        viverra justo. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Massa
                        tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Orci porta non pulvinar
                        neque laoreet suspendisse interdum consectetur. Laoreet suspendisse interdum consectetur
                        libero id faucibus. Maecenas sed enim ut sem viverra aliquet eget sit. Non blandit massa
                        enim nec dui nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis id.
                    </p>

                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>

                    <div className={"mt-5"}>
                        <div className={"flex space-2"}>
                            <Button variant={"outline"}>Lorem ipsum</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}