import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppMain from "./components/AppMain";
import Error from "./components/error/Error";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<AppMain/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path={'*'} element={<Error/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
