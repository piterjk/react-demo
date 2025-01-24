import React, { useState } from 'react';

const TaskList = ({ tasks, onSelect }) => {
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={'text-start'}>
      <h2>작업 리스트</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="작업 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>작업 이름</th>
            <th>담당자</th>
            <th>상태</th>
            <th>마감일</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} onClick={() => onSelect(task)}>
              <td>{task.name}</td>
              <td>{task.assignee}</td>
              <td>{task.status}</td>
              <td>{task.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
