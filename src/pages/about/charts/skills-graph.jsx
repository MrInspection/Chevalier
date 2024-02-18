import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart} from "recharts";
import React from "react";

function SkillsChart() {

    const data = [
        {
            language: "Java",
            progression: 32,
            limit: 100
        },
        {
            language: "Python",
            progression: 42,
            limit: 100
        },
        {
            language: "PHP",
            progression: 37,
            limit: 100
        },
        {
            language: "React",
            progression: 35,
            limit: 100
        },
        {
            language: "Javascript",
            progression: 40,
            limit: 100
        },
        {
            language: "HTML",
            progression: 50,
            limit: 100
        },
        {
            language: "CSS",
            progression: 20,
            limit: 100
        },
    ];

    return (
        <>
            <div>
                <RadarChart
                    cx={150}
                    cy={150}
                    outerRadius={90}
                    width={300}
                    height={300}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="language" />
                    <PolarRadiusAxis />
                    <Radar
                        name="Mike"
                        dataKey="progression"
                        stroke="#2F2F31"
                        fill="#2F2F31"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </div>
        </>
    )
}
export default SkillsChart

