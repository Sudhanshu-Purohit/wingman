"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  )

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const lineData = {
    labels,
    datasets: [
        {
            label: "Incoming",
            data: [30, 35, 40, 45, 40, 35, 30],
            borderColor: "#666",
            backgroundColor: "#666",
            tension: 0.4,
            borderWidth: 2,
        },
        {
            label: "Answered",
            data: [25, 30, 35, 40, 35, 30, 25],
            borderColor: "#02796F",
            backgroundColor: "#02796F",
            tension: 0.4,
            borderWidth: 2,
        },
        {
            label: "Experts online",
            data: Array(7).fill(null),
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderWidth: 0,
            fill: true,
            type: 'bar',
        },
    ],
}

const barData = {
    labels: ["This week", "Last week"],
    datasets: [
        {
            label: "Consultations",
            data: [40, 30],
            backgroundColor: "#02796F",
            barThickness: 30,
        },
        {
            label: "Orders closed",
            data: [30, 20],
            backgroundColor: "#333",
            barThickness: 30,
        },
    ],
}


const Insights = () => {
    return (
        <div className='w-full flex flex-col gap-8'>
            <h2 className='text-xl font-medium'>Insights</h2>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Insights</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-8 md:grid-cols-[1.5fr,1fr]">
                        <Card className="border border-blue-100">
                            <CardHeader className="p-4 pb-0">
                                <CardTitle className="text-sm font-medium uppercase text-muted-foreground">
                                    Consultations
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                                <Line
                                    data={lineData}
                                    options={{
                                        responsive: true,
                                        interaction: {
                                            mode: 'index',
                                            intersect: false,
                                        },
                                        plugins: {
                                            legend: {
                                                position: "bottom",
                                                labels: {
                                                    usePointStyle: true,
                                                    boxWidth: 6,
                                                    boxHeight: 6,
                                                    padding: 20,
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                grid: {
                                                    display: false,
                                                },
                                            },
                                            y: {
                                                beginAtZero: true,
                                                position: 'left',
                                                ticks: {
                                                    stepSize: 10,
                                                },
                                                grid: {
                                                    color: '#f0f0f0',
                                                },
                                            },
                                            y1: {
                                                beginAtZero: true,
                                                position: 'right',
                                                ticks: {
                                                    stepSize: 10,
                                                },
                                                grid: {
                                                    display: false,
                                                },
                                            }
                                        },
                                    }}
                                />
                            </CardContent>
                        </Card>
                        <div className="grid gap-4 md:grid-cols-2">
                            <Card className="border border-blue-100">
                                <CardHeader className="p-4 pb-0">
                                    <CardTitle className="text-sm font-medium uppercase text-muted-foreground">
                                        VS Past Period
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <Bar
                                        data={barData}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: "bottom",
                                                    labels: {
                                                        usePointStyle: true,
                                                        boxWidth: 6,
                                                        boxHeight: 6,
                                                        padding: 20,
                                                    }
                                                },
                                            },
                                            scales: {
                                                x: {
                                                    grid: {
                                                        display: false,
                                                    },
                                                },
                                                y: {
                                                    beginAtZero: true,
                                                    ticks: {
                                                        stepSize: 10,
                                                    },
                                                    grid: {
                                                        color: '#f0f0f0',
                                                    },
                                                },
                                            },
                                        }}
                                    />
                                </CardContent>
                            </Card>
                            <div className="space-y-4">
                                <Card className="border-0 bg-[#02796F] text-white">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="text-2xl font-bold">+15%</div>
                                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M23 6L13.5 15.5L8.5 10.5L1 18" />
                                                <path d="M17 6H23V12" />
                                            </svg>
                                        </div>
                                        <p className="text-sm">
                                            forecasted increase in your sales closed by the end of the current month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-0 bg-[#02796F] text-white">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="text-2xl font-bold">+20%</div>
                                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M23 6L13.5 15.5L8.5 10.5L1 18" />
                                                <path d="M17 6H23V12" />
                                            </svg>
                                        </div>
                                        <p className="text-sm">
                                            forecasted increase in consultations by the end of the current month
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Insights
