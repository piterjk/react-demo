import React from "react";
import {
    Line,
    Bar,
    Pie,
    Doughnut,
    Radar,
    PolarArea,
    Bubble,
    Scatter,
} from "react-chartjs-2";
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
    ArcElement,
    RadialLinearScale,
} from "chart.js";

// Chart.js 모듈 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
);



const ChartsJS = () => {
    // 데이터 및 옵션 설정
    const lineData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Line Chart Data",
                data: [65, 59, 80, 81, 56],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
            },
        ],
    };

    const barData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Bar Chart Data",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: "Pie Chart Data",
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const doughnutData = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: "Doughnut Chart Data",
                data: [100, 200, 300],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding"],
        datasets: [
            {
                label: "Radar Chart Data",
                data: [20, 10, 4, 2, 8],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
            },
        ],
    };

    const polarData = {
        labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
        datasets: [
            {
                label: "Polar Area Chart Data",
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB",
                ],
            },
        ],
    };

    const bubbleData = {
        datasets: [
            {
                label: "Bubble Dataset",
                data: [
                    { x: 20, y: 30, r: 15 },
                    { x: 40, y: 10, r: 10 },
                    { x: 25, y: 50, r: 20 },
                ],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
            },
        ],
    };


    const scatterData = {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    { x: -10, y: 0 },
                    { x: 0, y: 10 },
                    { x: 10, y: 5 },
                    { x: 15, y: 20 },
                ],
                backgroundColor: "rgba(75, 192, 192, 1)",
            },
        ],
    };

    return (
        <main className="App-main">
            <div style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}}>
                <div>
                    <h3>Line Chart</h3>
                    <Line data={lineData}/>
                </div>
                <div>
                    <h3>Bar Chart</h3>
                    <Bar data={barData}/>
                </div>
                <div>
                    <h3>Pie Chart</h3>
                    <Pie data={pieData}/>
                </div>
                <div>
                    <h3>Doughnut Chart</h3>
                    <Doughnut data={doughnutData}/>
                </div>
                <div>
                    <h3>Radar Chart</h3>
                    <Radar data={radarData}/>
                </div>
                <div>
                    <h3>Polar Area Chart</h3>
                    <PolarArea data={polarData}/>
                </div>
                <div>
                    <h3>Bubble Chart</h3>
                    <Bubble data={bubbleData}/>
                </div>

                <div>
                    <h3>Scatter Chart</h3>
                    <Scatter data={scatterData}/>
                </div>
            </div>

            <div className={'card mt-5'}>
                <h2>react-chartjs-2</h2>
                <div className={'card-body'}>
                    npm install chart.js react-chartjs-2
                </div>
            </div>


        </main>
    );
};

export default ChartsJS;
