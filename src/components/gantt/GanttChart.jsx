import React, { useEffect } from 'react';
import gantt from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import Header from "../layout/Header";
import Aside from "../layout/Aside";
import Footer from "../layout/Footer";

const GanttChart = () => {
    useEffect(() => {
        gantt.init('gantt_here');
        gantt.parse({
            data: [
                { id: 1, text: 'Task 1', start_date: '2025-01-01', duration: 5, progress: 0.6 },
                { id: 2, text: 'Task 2', start_date: '2025-01-06', duration: 5, progress: 0.4 },
            ],
            links: [
                { id: 1, source: 1, target: 2, type: '0' },
            ],
        });
    }, []);

    return (
        <div className="AppMain">
            <Header/>
            <div className="App-container">
                <Aside/>
                <main className="App-main">
                    <h1>간트 차트</h1>
                    <div id="gantt_here" style={{height: '400px'}}/>
                </main>
            </div>
            <Footer/>
        </div>
    )
};

export default GanttChart;

