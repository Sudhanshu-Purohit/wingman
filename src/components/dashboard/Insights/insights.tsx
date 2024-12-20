'use client';

import ConsultationChart from "./consultation-chart"
import Forecast from "./forecast";
import PastPeriods from "./past-periods";

const weeklyData = [
    { day: 'Mon', incoming: 33, answered: 28, experts: 8 },
    { day: 'Tue', incoming: 32, answered: 27, experts: 8 },
    { day: 'Wed', incoming: 38, answered: 32, experts: 9 },
    { day: 'Thu', incoming: 45, answered: 40, experts: 5 },
    { day: 'Fri', incoming: 43, answered: 34, experts: 9 },
    { day: 'Sat', incoming: 48, answered: 35, experts: 8 },
    { day: 'Sun', incoming: 52, answered: 37, experts: 8 }
];

const comparisonData = [
    { period: 'This week', consultations: 20, orders: 15 },
    { period: 'Last week', consultations: 15, orders: 10 },
];

const Insights = () => {
    return (
        <div className='w-full flex flex-col gap-8'>
            <h2 className='text-xl font-medium'>Insights</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <ConsultationChart weeklyData={weeklyData} />
                <PastPeriods comparisonData={comparisonData} />
                <Forecast />
            </div>
        </div>
    )
}

export default Insights