import axios from "axios";

//spring boot OAuth 2.0 jwt 토큰 로그인 처리

console.log('token :', sessionStorage.getItem('token'));

let headers = {}
if( sessionStorage.getItem('token') ){
    headers = {Authorization: `Bearer ${sessionStorage.getItem('token')}`}
}

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers:headers,
})


export const retrieveLogin = (username,password) => {
    return apiClient.post('/auth/login',{username:username,password:password})
        .then(response => {
            console.log(response);  // 응답 객체 전체 출력
            return response.data;   // JWT 토큰 반환
        })
        .catch(error => {
            console.error("로그인 실패:", error.response ? error.response.data : error.message);
            throw error;
        });
}