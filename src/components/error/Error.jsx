
import React from 'react';
import {Link} from "react-router-dom";
import './error.css'

function Error() {
    return (
        <div className="error">
            <div className="error-code">404</div>
            <div className="error-message">찾을 수 없는 페이지입니다.</div>
            <p>입력하신 주소가 잘못되었거나, 페이지가 이동되었을 수 있습니다.</p>
            <Link to="/" className="btn btn-primary btn-lg back-home">홈으로 돌아가기</Link>
        </div>
    )
}
export default Error;