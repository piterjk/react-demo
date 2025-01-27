import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa"; // 아이콘


let count = 0;

const PushAlert = () => {

    // 로컬 스토리지에서 메시지 불러오기
    const [toasts, setToasts] = useState([]);

    // 로컬 스토리지에서 메시지 로드
    useEffect(() => {
        //메시지 초기화
        const savedMessages = [];
        setToasts(savedMessages.reverse());

        if ("Notification" in window) {
            Notification.requestPermission();
        }

        const handleStorageChange = (event) => {
            if (event.key === "messages") {
                const updatedMessages = JSON.parse(event.newValue || "[]").reverse();
                setToasts(updatedMessages);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    // 메시지 추가
    const addToast = (message, type = "success") => {
        const id = Date.now();

        // 중복 방지: 동일한 메시지가 이미 존재하는지 확인
        setToasts((prevToasts) => {

            // 중복 메시지는 추가하지 않음
            // if (prevToasts.some((toast) => toast.message === message)) {
            //     return prevToasts;
            // }

            const newToast = { id, message, type };
            const updatedToasts = [newToast, ...prevToasts];

            localStorage.setItem("messages", JSON.stringify(updatedToasts));
            return updatedToasts;
        });

        // 푸시 알림 호출
        showPushNotification("New Notification", message);

        // 타이머 설정: 일정 시간이 지나면 삭제
        setTimeout(() => {
            removeToast(id);
        }, 5000); // 5초 후 삭제
    };


    // 메시지 제거
    const removeToast = (id) => {
        setToasts((prevToasts) => {
            const updatedToasts = prevToasts.filter((toast) => toast.id !== id);
            localStorage.setItem("messages", JSON.stringify(updatedToasts));
            return updatedToasts;
        });
    };

    const showPushNotification = (title, body) => {
        if ("Notification" in window && Notification.permission === "granted") {
            new Notification(title, {
                body,
                icon: '/react-demo/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
            });
        }
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

    return (
        <div>
            <h1 className="text-center my-3">Push 알림</h1>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-success mx-2"
                    onClick={() => addToast("성공 메시지 입니다.", "success")}
                >
                    성공 알림
                </button>
                <button
                    className="btn btn-warning mx-2"
                    onClick={() => addToast("경고 메시지 입니다.", "warning")}
                >
                    경고 알림
                </button>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => addToast("에러 메시지 입니다.", "error")}
                >
                    에러 알림
                </button>
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
        </div>
    );
};

export default PushAlert;
