import logo from "../../logo.svg";

function Main(){
    return (
        <main className="App-main">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Welcome to React Native App
            </p>
            <p>
                Developer : 김정수<br/>
                Mail: <a href={'mailto:piterjk@naver.com'}>piterjk@naver.com</a>
            </p>
        </main>
    )
}

export default Main;