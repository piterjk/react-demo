import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const charData = [
    { name: '1월', sales: 400 },
    { name: '2월', sales: 300 },
    { name: '3월', sales: 600 },
    { name: '4월', sales: 500 },
    { name: '5월', sales: 800 },
    { name: '6월', sales: 900 },
    { name: '7월', sales: 500 },
    { name: '8월', sales: 1000 },
    { name: '9월', sales: 1500 },
    { name: '10월', sales: 200 },
    { name: '11월', sales: 800 },
    { name: '12월', sales: 2000 },
];


const Charts = () =>{

    return (

        <LineChart width={600} height={400} data={charData}>
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>

    )
}

export default Charts;
