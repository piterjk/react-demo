import {createContext, useContext, useEffect, useState} from "react";
import {retrieveLogin} from "../api/ApiService";


export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태

    const [isAuthenticated  , setAuthenticated] = useState(false);

    // 새로고침 시 localStorage에서 로그인 정보 복구
    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser))
            setAuthenticated(true)
        }
        setIsLoading(false); // 로딩 완료
        console.log(`storedUser : ${storedUser}`);
    }, []);


     //spring boot auth
    function authorization(username, password) {
        return retrieveLogin(username, password)
            .then(response => {
                console.log(response); // 서버 응답 확인
                if (response && response.token) {
                    sessionStorage.setItem('token', response.token);
                    return true;
                } else {
                    return false;
                }
            })
            .catch(err => {
                console.log("인증 실패:", err);
                return false;
            });


    }

    function login(email, password) {
        if( email === 'piterjk@naver.com' && password === '1234'){
            setAuthenticated(true)
            setUser(email);
            sessionStorage.setItem('user', JSON.stringify(email));
            return true
        }else{
            setAuthenticated(false)
            setUser(null)
            sessionStorage.removeItem('user');
            return false
        }

    }

    function logout(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setAuthenticated(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setAuthenticated, login, logout, authorization }}>
            {!isLoading ? children : <div>Loading...</div>} {/* 로딩 중 UI */}
        </AuthContext.Provider>
    )
}

export default AuthProvider;