import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";
import {Card, CardHeader} from "@/components/ui/card.jsx";
import {HomeIcon} from "@radix-ui/react-icons";

const data = [
    {
        language: "Français",
        progression: 100
    },
    {
        language: "Anglais",
        progression: 86
    },
    {
        language: "Espagnol",
        progression: 17
    },
];

export default function LangChart() {
    return (
        <>


                    <RadarChart
                        cx={300}
                        cy={250}
                        outerRadius={100}
                        width={500}
                        height={500}
                        data={data}
                    >
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="language"/>
                        <PolarRadiusAxis domain={[0,100]}/>
                        <Radar
                            name="hello"
                            dataKey="progression"
                            stroke="#2F2F31"
                            fill="#2F2F31"
                            fillOpacity={0.6}
                        />
                    </RadarChart>

        </>
    );
}