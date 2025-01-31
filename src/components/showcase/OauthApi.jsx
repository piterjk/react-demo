import React, {useState} from "react";
import {useAuth} from "../security/AuthContext";
import {jwtDecode} from "jwt-decode";
import {apiClient} from "../api/ApiService";



function OauthApi() {

    const authContext = useAuth();

    const [url, setUrl] = useState("http://localhost:8080/api/data-load");
    const [data, setData] = useState("");

    const [username, setUsername] = useState('piterjk');
    const [password, setPassword] = useState('piterjk');
    const [token, setToken] = useState({
        "iss": "self",
        "sub": "piterjk",
        "exp": 1738318861,
        "iat": 1738315261,
        "scope": "ROLE_USER"
    });


    //login error
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function handleUsernameChange(evt) {
        setUsername(evt.target.value);
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    //spring boot auth
    async function handleSubmit(evt) {
        evt.preventDefault();

        const success = await authContext.authorization(username, password); // ✅ 로그인 결과를 기다림

        if (success) {
            const token = sessionStorage.getItem("token");
            const json = jwtDecode(token);
            console.log(json);
            setToken(json);
        } else {
            setShowErrorMessage(true);
        }
    }

    function handleApiSubmit(){
        apiClient.get(url.replace('http://localhost:8080', ''))
            .then((response) => {
            console.log('data:',response.data);
            setData(response.data);
        }).catch((error) => {
            setData(error.message);
        })
    }

    return (
        <main className={'App-main'}>
            <div>
                로컬 스프링부트 APP 실행환경에서 작동합니다.
            </div>
            <div className="container d-flex justify-content-between align-items-center mt-5">

                <div className="card p-4 shadow" style={{width: '50%', maxWidth: '400px', height: '400px'}}>
                    <h3 className="text-center mb-4">OAuth 2.0 Authorization</h3>
                    <form onSubmit={handleSubmit}>
                        {showErrorMessage && <div className={"text-danger"}>인증실패! 사용자ID과 비밀번호를 확인하세요!</div>}
                        {/*{ <!-- 이메일 입력 --> }*/}
                        <div className="mb-3">
                            <label form="username" className="form-label">User Name</label>
                            <input type="username" className="form-control" id="username"
                                   placeholder="Enter your username" value={username}
                                   onChange={handleUsernameChange}/>
                        </div>
                        {/*{<!-- 비밀번호 입력 -->}*/}
                        <div className="mb-3">
                            <label form="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"
                                   placeholder="Enter your password"
                                   value={password} onChange={handlePasswordChange}/>
                        </div>

                        {/*{<!-- 인증 버튼 -->}*/}
                        <button type="submit" className="btn btn-primary w-100">인증</button>
                    </form>
                    <div className="mt-3 text-center">
                        {/*<p className="mb-1">Don't have an account? <a href="#">Sign Up</a></p>*/}
                        {/*<a href="#" className="small">Forgot your password?</a>*/}
                    </div>
                </div>
                <div className="card p-4 shadow" style={{width: '50%', maxWidth: '400px', height: '400px'}}>
                    <h3 className="text-center mb-4">Token 정보</h3>
                    <ul>
                        {Object.entries(token).map(([key, value]) => (
                            <li key={key} className={'text-start'}>
                                {key}: {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className={'m-5'} />
            <div className="container d-flex justify-content-between align-items-center mt-5" style={{height:'400px',verticalAlign:'top'}}>
                <div style={{height:'400px',verticalAlign:'top'}}>
                    <h3 className="text-center mb-4">OAuth 2.0 인증 처리 후 데이터 요청</h3>
                    <div  className={'d-flex justify-content-around'}>
                        <input type={'text'} value={url} className={'form-control'} style={{width: '300px'}}
                           onChange={(e) => setUrl(e.target.value)}/>
                        <button className={'btn btn-primary'} onClick={handleApiSubmit}>OAuth API 요청 테스트</button>
                    </div>
                </div>
                <div style={{height:'400px',verticalAlign:'top'}}>
                    <h3 className="text-center mb-4">결과 값 출력</h3>
                    <div>{data}</div>
                </div>
            </div>
        </main>
    )
}

export default OauthApi;