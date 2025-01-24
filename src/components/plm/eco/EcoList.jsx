import React, { useState } from 'react';

const EcoList = ({ requests, onSelect }) => {
    const [search, setSearch] = useState('');

    const filteredRequests = requests.filter((request) =>
        request.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={'text-start'}>
            <div className="p-4 bg-primary text-white rounded shadow text-start mb-3 opacity-75">
                <h2>설계 변경 요청 리스트</h2>
            </div>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="요청 검색"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>상태</th>
                    <th>요청자</th>
                </tr>
                </thead>
                <tbody>
                {filteredRequests.map((request) => (
                    <tr key={request.id} onClick={() => onSelect(request)}>
                        <td>{request.id}</td>
                        <td>{request.title}</td>
                        <td>{request.status}</td>
                        <td>{request.requester}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EcoList;
