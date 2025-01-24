import React from 'react';

const Messages = ({ messages }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5>메시지</h5>
            </div>
            <ul className="list-group list-group-flush">
                {messages.map((message, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{message.sender}</strong>: {message.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
