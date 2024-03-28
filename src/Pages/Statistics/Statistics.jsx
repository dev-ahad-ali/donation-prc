import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts';
import useDonationData from '../../Hooks/useDonationData';
import useLocalData from '../../Hooks/useLocalData';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    const { data: donationData } = useDonationData();
    const { localData } = useLocalData();

    const data = [
        { name: 'Your Donations', value: localData.length },
        {
            name: 'Available Donations',
            value: donationData.length - localData.length,
        },
    ];

    const COLORS = ['#79C23F', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill='white'
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline='central'
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='w-full h-[80vh]'>
            <Helmet>
                <title>Donation Prc | Statistics</title>
            </Helmet>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx='50%'
                        cy='50%'
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill='#8884d8'
                        dataKey='value'
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
