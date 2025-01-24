import React, {useEffect, useState} from 'react';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import Charts from "./Charts";
import Notifications from "./Notifications";
import Messages from "./Messages";


const Dashboard = () => {

    const [notifications, setNotifications] = useState(['시스템 점검 예정: 2025-01-31',]);

    useEffect(() => {
        const interval = setInterval(() => {
            setNotifications((prev) => {
                const updatedNotifications = [
                    `새로운 알림: ${new Date().toLocaleTimeString()}`,
                    ...prev,
                ];
                // 마지막 5개만 유지
                return updatedNotifications.slice(0,5);
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    // 카드 데이터
    const cardData = [
        {
            title: '사용자 수',
            description: '현재 사용자: 150명',
            footer: '최근 업데이트: 2025-01-23',
            icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
        },
        {
            title: '매출 현황',
            description: '이번 달 매출: $12,000',
            footer: '최근 업데이트: 2025-01-22',
            icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        },
        {
            title: '할 일',
            description: '남은 작업: 5개',
            footer: '마감일: 2025-01-30',
            icon: 'https://cdn-icons-png.flaticon.com/512/1029/1029132.png',
        },
    ];


    const messages = [
        { sender: '홍길동', content: '안녕하세요, 오늘 회의는 3시에 시작합니다.' },
        { sender: '김철수', content: '파일 업로드 완료했습니다.' },
    ];


    return (
        <main className="App-main">
            <div className="p-4 bg-primary text-white rounded shadow text-start mb-3 opacity-75">
                <h2 className="text-center">대시보드</h2>
            </div>
                <div className="row g-4">
                    {cardData.map((card, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img
                                        src={card.icon}
                                        alt="icon"
                                        className="mb-3"
                                        style={{width: '50px'}}
                                    />
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                </div>
                                <div className="card-footer text-muted text-center">
                                    {card.footer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={'mt-3 row'}>
                    <div className="col-md-6">
                        <Notifications notifications={notifications}/>
                    </div>
                    <div className="col-md-6">
                        <Messages messages={messages}/>
                    </div>
                </div>

                <div className={'mt-3 row'}>
                    <div className={'col-md-5 '}>
                        <div className="card card-body">
                            <Charts/>
                        </div>
                    </div>
                    <div className={'col-md-5'}>
                        <div className="card card-body">

                        </div>
                    </div>
                </div>

        </main>
)
};

export default Dashboard;

