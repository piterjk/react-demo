import React, { useState } from 'react';

const TaskForm = ({ onSave }) => {
    const [task, setTask] = useState({
        name: '',
        assignee: '',
        status: '진행 중',
        deadline: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(task);
        setTask({ name: '', assignee: '', status: '진행 중', deadline: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>작업 추가/수정</h2>
            <div className="mb-3">
                <label>작업 이름</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={task.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label>담당자</label>
                <input
                    type="text"
                    name="assignee"
                    className="form-control"
                    value={task.assignee}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label>상태</label>
                <select
                    name="status"
                    className="form-select"
                    value={task.status}
                    onChange={handleChange}
                >
                    <option>진행 중</option>
                    <option>완료</option>
                    <option>지연</option>
                </select>
            </div>
            <div className="mb-3">
                <label>마감일</label>
                <input
                    type="date"
                    name="deadline"
                    className="form-control"
                    value={task.deadline}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label>설명</label>
                <textarea
                    name="description"
                    className="form-control"
                    value={task.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">저장</button>
        </form>
    );
};

export default TaskForm;
