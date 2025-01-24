import React from 'react';

const Notifications = ({ notifications }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5>알림</h5>
            </div>
            <ul className="list-group list-group-flush">
                {notifications.map((notification, index) => (
                    <li key={index} className="list-group-item">
                        {notification}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
