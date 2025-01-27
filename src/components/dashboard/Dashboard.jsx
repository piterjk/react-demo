import React, {useEffect, useState} from 'react';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import Charts from "./Charts";
import Notifications from "./Notifications";
import Messages from "./Messages";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa"; // 아이콘

const Dashboard = () => {

    const [notifications, setNotifications] = useState(['시스템 점검 예정: 2025-01-31',]);
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {

            const message = `새로운 알림: ${new Date().toLocaleTimeString()}`;

            setNotifications((prev) => {
                const updatedNotifications = [
                    message,
                    ...prev,
                ];
                // 마지막 5개만 유지
                return updatedNotifications.slice(0,5);
            });

            //알림
            setToasts((prevToasts) => {
                const id = Date.now();

                const types = ['success','warning','error'];
                const type = types[Math.floor(Math.random() * types.length)];
                console.log('id',id);
                const newToast = { id, message, type };
                const updatedToasts = [newToast, ...prevToasts]
                //console.log('updatedToasts', updatedToasts);
                // 타이머 설정: 일정 시간이 지나면 삭제
                setTimeout(() => {
                    removeToast(id);
                }, 5000); // 5초 후 삭제

                return updatedToasts;
            });

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // 메시지 제거
    const removeToast = (id) => {
        setToasts((prevToasts) => {
            const updatedToasts = prevToasts.filter((toast) => toast.id !== id);
            return updatedToasts;
        });
    };
    // 알림 유형별 스타일
    const getToastStyle = (type) => {
        switch (type) {
            case "success":
                return "bg-success text-light";
            case "warning":
                return "bg-warning text-dark";
            case "error":
                return "bg-danger text-light";
            default:
                return "bg-secondary text-light";
        }
    };

    // 알림 유형별 아이콘
    const getIcon = (type) => {
        switch (type) {
            case "success":
                return <FaCheckCircle />;
            case "warning":
                return <FaExclamationTriangle />;
            case "error":
                return <FaTimesCircle />;
            default:
                return <FaCheckCircle />;
        }
    };
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
                <div className={'col-md-4 '}>
                    <div className="card card-body overflow-scroll" >
                        <Charts/>
                    </div>
                </div>
                <div className="col-md-4 text-start">
                    <Notifications notifications={notifications}/>
                </div>
                <div className="col-md-4 text-start">
                    <Messages messages={messages}/>
                </div>
            </div>




            {/* Toast Container */}
            <div
                style={{
                    position: "fixed",
                    top: "130px",
                    right: "20px",
                    zIndex: 1050,
                }}
            >
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`toast show ${getToastStyle(toast.type)}`}
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        style={{
                            minWidth: "300px",
                            marginBottom: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <div className="toast-header">
                            <span className="me-2">{getIcon(toast.type)}</span>
                            <strong className="me-auto">Notification</strong>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={() => removeToast(toast.id)}
                            ></button>
                        </div>
                        <div className="toast-body">{toast.message}</div>
                    </div>
                ))}
            </div>
        </main>
    )
};

export default Dashboard;

