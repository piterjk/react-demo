import React from 'react';

const TaskDetail = ({ task }) => {
    if (!task) return <p>작업을 선택하세요.</p>;

    return (
        <div>
            <div className="p-4 bg-primary text-white rounded shadow text-start mb-3 opacity-75">
                <h2>작업 상세 정보</h2>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>작업 이름:</div>
                        <div className={'col'}>{task.name}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>담당자:</div>
                        <div className={'col'}>{task.assignee}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>상태:</div>
                        <div className={'col'}>{task.status}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>마감일:</div>
                        <div className={'col'}>{task.deadline}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>설명:</div>
                        <div className={'col'}>{task.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;
