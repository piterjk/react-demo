import React from 'react';

const InspectionList = ({ inspections }) => {
    return (
        <div>
            <div className="p-4 bg-primary text-white rounded shadow opacity-75">
                <h2>품질 검사 결과</h2>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>검사 항목</th>
                    <th>검사자</th>
                    <th>결과</th>
                    <th>검사 날짜</th>
                </tr>
                </thead>
                <tbody>
                {inspections.map((inspection, index) => (
                    <tr key={index}>
                        <td>{inspection.item}</td>
                        <td>{inspection.inspector}</td>
                        <td>
                <span
                    className={`badge ${
                        inspection.result === '합격' ? 'bg-success' : 'bg-danger'
                    }`}
                >
                  {inspection.result}
                </span>
                        </td>
                        <td>{inspection.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InspectionList;
