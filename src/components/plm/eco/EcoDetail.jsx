import React from 'react';

const EcoDetail = ({ request }) => {
    if (!request) return <p>요청을 선택하세요.</p>;

    return (
        <div className={'text-start'}>
            <div className="p-4 bg-primary text-white rounded shadow text-start mb-3 opacity-75">
                <h2>설계 변경 상세 정보</h2>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>번호:</div>
                        <div className={'col'}>{request.id}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>제목:</div>
                        <div className={'col'}>{request.title}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>상태:</div>
                        <div className={'col'}>{request.status}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>요청자:</div>
                        <div className={'col'}>{request.requester}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>변경 사유:</div>
                        <div className={'col'}>{request.reason}</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <div className={'label-col'}>변경 내용:</div>
                        <div className={'col'}>{request.details}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoDetail;
