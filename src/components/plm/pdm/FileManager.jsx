import React, { useState } from 'react';

const FileManager = () => {
    const [files, setFiles] = useState([]);

    const handleUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles((prev) => [...prev, ...uploadedFiles]);
    };

    return (
        <div className="mt-3 text-start">
            <input type="file" multiple onChange={handleUpload}/>
            <ul className={'list-group mt-3'}>
                {files.map((file, index) => (
                    <li key={index} className={'list-group-item d-flex justify-content-between align-items-center'}>
                        {file.name}
                        <button className="btn btn-primary btn-sm">다운로드</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileManager;
