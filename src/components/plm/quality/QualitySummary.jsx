import React from 'react';

const QualitySummary = ({ data }) => {
    return (
        <div className="row g-4">
            {data.map((item, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text display-4">{item.value}</p>
                        </div>
                        <div className="card-footer text-muted">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QualitySummary;
