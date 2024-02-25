import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

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
            <div>
                <RadarChart
                    cx={150}
                    cy={150}
                    outerRadius={90}
                    width={300}
                    height={230}
                    data={data}
                >
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="language"/>
                    <PolarRadiusAxis domain={[0,100]}/>
                    <Radar
                        name="hello"
                        dataKey="progression"
                        stroke="#CE70CC"
                        fill="#CE70CC"
                        fillOpacity={0.55}
                    />
                </RadarChart>
            </div>
        </>
    );
}