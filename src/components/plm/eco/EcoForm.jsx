import React, { useState } from 'react';

const EcoForm = ({ onSave }) => {
    const [form, setForm] = useState({
        title: '',
        reason: '',
        details: '',
        requester: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...form, id: Date.now(), status: '검토 중' });
        setForm({ title: '', reason: '', details: '', requester: '' });
    };

    return (
        <div  className={'text-start'}>
            <form onSubmit={handleSubmit}>
                <div className="p-4 bg-primary text-white rounded shadow text-start mb-3 opacity-75">
                    <h2>새 요청 추가</h2>
                </div>
                <div className="mb-3">
                    <label>제목</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>변경 사유</label>
                    <textarea
                        name="reason"
                        className="form-control"
                        value={form.reason}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>변경 내용</label>
                    <textarea
                        name="details"
                        className="form-control"
                        value={form.details}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>요청자</label>
                    <input
                        type="text"
                        name="requester"
                        className="form-control"
                        value={form.requester}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">저장</button>
            </form>
        </div>
    );
};

export default EcoForm;
