import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import TaskForm from './TaskForm';

const TaskMain = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'UI 설계', assignee: '홍길동', status: '진행 중', deadline: '2025-02-01', description: 'UI 디자인 작업' },
        { id: 2, name: 'API 개발', assignee: '김철수', status: '완료', deadline: '2025-01-20', description: '백엔드 API 개발' },
    ]);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleSave = (newTask) => {
        setTasks((prev) => [
            ...prev,
            { ...newTask, id: prev.length + 1 },
        ]);
    };

    return (
        <main className="App-main">
            <div className="row">
                <div className="col-md-6">
                    <TaskList tasks={tasks} onSelect={setSelectedTask} />
                </div>
                <div className="col-md-6 text-start">
                    <TaskDetail task={selectedTask} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 text-start">
                    <TaskForm onSave={handleSave}/>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </main>
    );
};

export default TaskMain;
