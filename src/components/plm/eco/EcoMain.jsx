import React, { useState } from 'react';
import EcoList from './EcoList';
import EcoDetail from './EcoDetail';
import EcoForm from './EcoForm';

const EcoMain = () => {
    const [requests, setRequests] = useState([
        { id: 1, title: '제품 A 설계 변경', status: '검토 중', requester: '홍길동', reason: '부품 불량', details: '부품 A를 B로 교체 필요' },
        { id: 2, title: '제품 B 재질 변경', status: '승인 완료', requester: '김철수', reason: '원가 절감', details: '재질 C를 D로 변경' },
    ]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleSave = (newRequest) => {
        setRequests((prev) => [...prev, newRequest]);
    };

    return (
        <main className="App-main">
            <div className="row">
                <div className="col-md-6">
                    <EcoList requests={requests} onSelect={setSelectedRequest}/>
                </div>
                <div className="col-md-6">
                    <EcoDetail request={selectedRequest}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <EcoForm onSave={handleSave}/>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </main>
    );
};

export default EcoMain;
