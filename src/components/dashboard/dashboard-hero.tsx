import Decrease from "@/assets/decrease.png";
import Increase from "@/assets/increase.png";
import { cn } from '@/lib/utils';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const mockStats = [
    {
        id: 1,
        title: 'CONSULTATIONS',
        value: "24",
        percentageChange: 15
    },
    {
        id: 2,
        title: 'ORDERS PLACED',
        value: "12",
        percentageChange: -15
    },
    {
        id: 3,
        title: 'CONVERSION',
        value: "50%",
        percentageChange: -15
    },
    {
        id: 4,
        title: 'TOTAL SALES VALUE',
        value: "$2,400",
        percentageChange: 15
    },
    {
        id: 5,
        title: 'AVG ORDERS VALUE',
        value: "$240",
        percentageChange: 15
    },
    {
        id: 6,
        title: 'COMMISSION PAID',
        value: "$240",
        percentageChange: 15
    },
]

const DashboardHero = () => {
    return (
        <div className='w-full flex flex-col gap-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-medium'>At a glance</h2>
                <select className="px-4 py-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200">
                    <option value="7">7 days</option>
                    <option value="14">14 days</option>
                    <option value="30">30 days</option>
                    <option value="90">90 days</option>
                </select>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {mockStats.map((stat, index) => (
                    <Card key={index} className='shadow-sm rounded-xl'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xs font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent >
                            <p className="text-2xl font-semibold pb-1">
                                {stat.value}
                            </p>
                            <div className='flex items-center'>
                                {stat.percentageChange > 0 ? (
                                    <Image width={15} height={15} src={Increase} alt="arrow-up" />
                                ) : (
                                    <Image width={15} height={15} src={Decrease} alt="arrow-down" />
                                )}
                                <p className={cn(
                                    stat.percentageChange > 0 ? "text-green-500" : "text-red-500",
                                    "text-xs ml-2"
                                )}>
                                    {stat.percentageChange < 0 ? -stat.percentageChange + "%" : stat.percentageChange + "%"} {" "}
                                    <span className="text-xs text-muted-foreground">{stat.percentageChange > 0 ? " increase" : " decrease"}</span>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default DashboardHero
