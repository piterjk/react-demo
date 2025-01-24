import {useAuth} from "../security/AuthContext";
import logo from "../../logo.svg";

function Header(){

    const authContext = useAuth()

    function logout(){
        authContext.logout()
    }

    return (
        <header className="App-header">
            <nav className="navbar navbar-dark bg-dark d-flex align-items-center" style={{height: '100px',width:'100%'}}>
                {/* 좌측 로고 */}
                <div className="container-fluid">
                    <div className="navbar-brand d-flex align-items-center">
                        <img
                            src={logo}
                            alt="React Logo"
                            className="rotating-logo"
                            style={{height: '60px', width: '60px'}}
                        />
                        <span className="ms-3 text-white">React Demo</span>
                    </div>
                    {/* 우측 사용자 정보 */}
                    <div className="d-flex align-items-center">
                        <span className="text-white me-3">{authContext.user}</span>
                        <button className="btn btn-primary" onClick={logout}>
                            로그아웃
                        </button>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;