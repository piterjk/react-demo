import React, {useState} from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    function handleRememberMe(evt) {
        setRememberMe(evt.target.checked);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(rememberMe);
    }

    return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow" style={{width: '100%', maxWidth: '400px'}}>
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
                {/*{ <!-- 이메일 입력 --> }*/}
                <div className="mb-3">
                    <label form="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email}
                           onChange={handleEmailChange}/>
                </div>
                {/*{<!-- 비밀번호 입력 -->}*/}
                <div className="mb-3">
                    <label form="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"
                           value={password} onChange={handlePasswordChange}/>
                </div>
                {/*{<!-- 체크박스 -->}*/}
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe}
                           onChange={handleRememberMe}/>
                    <label className="form-check-label" form="rememberMe">기억하기</label>
                </div>
                {/*{<!-- 로그인 버튼 -->}*/}
                <button type="submit" className="btn btn-primary w-100">로그인</button>
            </form>
            <div className="mt-3 text-center">
                {/*<p className="mb-1">Don't have an account? <a href="#">Sign Up</a></p>*/}
                {/*<a href="#" className="small">Forgot your password?</a>*/}
            </div>
        </div>
    </div>
    )
}

export default Login;