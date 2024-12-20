import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

type PastPeriodsProps = {
    comparisonData: any[]
}

const PastPeriods = ({ comparisonData }: PastPeriodsProps) => {
    return (
        <div className="col-span-1 lg:col-span-3 bg-white py-8 rounded-3xl border-[0.5px] drop-shadow-sm">
            <div className="flex items-center gap-2 mb-6 px-6">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.875 8.75C9.875 8.84946 9.83549 8.94484 9.76517 9.01517C9.69484 9.08549 9.59946 9.125 9.5 9.125H0.5C0.400544 9.125 0.305161 9.08549 0.234835 9.01517C0.164509 8.94484 0.125 8.84946 0.125 8.75C0.125 8.65054 0.164509 8.55516 0.234835 8.48483C0.305161 8.41451 0.400544 8.375 0.5 8.375H0.875V5.375C0.875 5.27554 0.914509 5.18016 0.984835 5.10983C1.05516 5.03951 1.15054 5 1.25 5H2.375C2.47446 5 2.56984 5.03951 2.64016 5.10983C2.71049 5.18016 2.75 5.27554 2.75 5.375V8.375H3.5V3.125C3.5 3.02554 3.53951 2.93016 3.60984 2.85984C3.68016 2.78951 3.77554 2.75 3.875 2.75H5.375C5.47446 2.75 5.56984 2.78951 5.64017 2.85984C5.71049 2.93016 5.75 3.02554 5.75 3.125V8.375H6.5V0.875C6.5 0.775544 6.53951 0.680161 6.60983 0.609835C6.68016 0.539509 6.77554 0.5 6.875 0.5H8.75C8.84946 0.5 8.94484 0.539509 9.01517 0.609835C9.08549 0.680161 9.125 0.775544 9.125 0.875V8.375H9.5C9.59946 8.375 9.69484 8.41451 9.76517 8.48483C9.83549 8.55516 9.875 8.65054 9.875 8.75Z" fill="#667085" />
                </svg>
                <p className="text-xs text-gray-500 uppercase tracking-wider">VS PAST PERIOD</p>
            </div>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData} margin={{ top: 5, right: 30, left: 0, bottom: 25 }}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#F1F5F9"
                            horizontalPoints={comparisonData.map((_, index) => index)}
                        />
                        <XAxis
                            dataKey="period"
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                            tick={{ fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                        <Bar dataKey="consultations" fill="#CCFBEF" barSize={30} radius={[5, 5, 0, 0]} />
                        <Bar dataKey="orders" fill="#115E59" barSize={30} radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6  border-t-[1px] mx-6 pt-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-1 rounded-sm bg-[#CCFBEF] "></div>
                    <span className="text-sm text-gray-600">Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-1 rounded-sm bg-[#115E59] "></div>
                    <span className="text-sm text-gray-600">Orders closed</span>
                </div>
            </div>
        </div>
    )
}

export default PastPeriods
