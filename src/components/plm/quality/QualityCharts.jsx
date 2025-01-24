import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


// Chart.js 구성 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const QualityCharts = () => {
    const data = {
        labels: ['1월', '2월', '3월', '4월', '5월'],
        datasets: [
            {
                label: '불량률 (%)',
                data: [5, 6, 4, 7, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',  // 1월
                    'rgba(54, 162, 235, 0.5)',  // 2월
                    'rgba(255, 206, 86, 0.5)',  // 3월
                    'rgba(75, 192, 192, 0.5)',  // 4월
                    'rgba(153, 102, 255, 0.5)', // 5월
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  // 1월
                    'rgba(54, 162, 235, 1)',  // 2월
                    'rgba(255, 206, 86, 1)',  // 3월
                    'rgba(75, 192, 192, 1)',  // 4월
                    'rgba(153, 102, 255, 1)', // 5월
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '월별 불량률',
            },
        },
    };

    return (
        <div>
            <div className="p-4 bg-primary text-white rounded shadow text-start opacity-75">
                <h2>불량률 추이</h2>
            </div>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default QualityCharts;
