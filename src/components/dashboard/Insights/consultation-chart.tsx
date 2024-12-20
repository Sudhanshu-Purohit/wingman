import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

type ConsultationChartProps = {
    weeklyData: any[]
}

const ConsultationChart = ({ weeklyData }: ConsultationChartProps) => {
    return (
        <div className="col-span-1 lg:col-span-7 py-6 rounded-3xl border-[0.5px] drop-shadow-sm px-2">
            <div className="flex items-center gap-2 mb-6 px-6">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z" fill="#667085" />
                </svg>
                <p className="text-xs text-gray-500 uppercase tracking-wider">CONSULTATIONS</p>
            </div>
            {/* Scrollable container */}
            <div className="h-[300px] overflow-x-auto">
                {/* Wrapper div with fixed width */}
                <div className='min-w-[600px] w-full h-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={weeklyData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#F1F5F9"
                            />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                dy={10}
                                tick={{ fill: '#94A3B8', fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                dx={-15}
                                tick={{ fill: '#94A3B8', fontSize: 12 }}
                                ticks={[10, 20, 30, 40, 50, 60]}
                                domain={[10, 60]}
                                yAxisId="left"
                                label={{
                                    value: 'CONSULTATIONS',
                                    angle: -90,
                                    position: 'insideLeft',
                                    style: { textAnchor: 'middle', fill: '#94A3B8', fontSize: 8, opacity: 0.7 }
                                }}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                axisLine={false}
                                tickLine={false}
                                dx={10}
                                tick={{ fill: '#94A3B8', fontSize: 12 }}
                                domain={[0, 20]}
                                tickFormatter={() => '10'}
                                label={{
                                    value: 'EXPERTS ONLINE',
                                    angle: -90,
                                    position: 'insideRight',
                                    style: { textAnchor: 'middle', fill: '#94A3B8', fontSize: 8, opacity: 0.7 }
                                }}
                            />
                            <Bar
                                dataKey="experts"
                                fill="#FEF9C3"
                                yAxisId="right"
                                barSize={20}
                                radius={[4, 4, 0, 0]}
                            />
                            <Line
                                type="monotone"
                                dataKey="incoming"
                                stroke="#94A3B8"
                                strokeWidth={2}
                                dot={false}
                                strokeDasharray="5 5"
                                yAxisId="left"
                            />
                            <Line
                                type="monotone"
                                dataKey="answered"
                                stroke="#15B79E"
                                strokeWidth={2}
                                dot={false}
                                yAxisId="left"
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4 border-t-[1px] mx-6 pt-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-1 rounded-sm bg-[#94A3B8]"></div>
                    <span className="text-sm text-gray-600">Incoming</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-1 rounded-sm bg-[#15B79E]"></div>
                    <span className="text-sm text-gray-600">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-1 rounded-sm bg-[#FEF9C3] "></div>
                    <span className="text-sm text-gray-600">Experts online</span>
                </div>
            </div>
        </div>
    )
}

export default ConsultationChart;
