import React from 'react';

const QualityIssues = ({ issues }) => {
    return (
        <div>
            <div className="p-4 bg-primary text-white rounded shadow opacity-75">
                <h2>품질 이슈</h2>
            </div>
            <ul className="list-group">
                {issues.map((issue, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{issue.title}</h5>
                            <p>{issue.description}</p>
                        </div>
                        <span
                            className={`badge ${issue.status === '해결됨' ? 'bg-success' : issue.status === '진행 중' ? 'bg-warning' : 'bg-danger'}`}>
              {issue.status}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QualityIssues;
