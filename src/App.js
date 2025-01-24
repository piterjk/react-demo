import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppMain from "./components/AppMain";
import Error from "./components/error/Error";
import AuthProvider, {useAuth} from "./components/security/AuthContext";
import GanttChart from "./components/gantt/GanttChart";
import Dashboard from "./components/dashboard/Dashboard";


function AuthenticatedRoute({children}) {
    const authContext = useAuth();

    console.log('App AuthenticatedRoute', authContext);
    console.log(authContext.isAuthenticated)

    if( authContext.isAuthenticated )
        return children
   
    return <Navigate to={"/login"} />
}
function App() {
  return (
      <div className="App">
          <AuthProvider>
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={
                          <AuthenticatedRoute>
                            <AppMain/>
                          </AuthenticatedRoute>} />
                      <Route path='/dashboard' element={
                          <AuthenticatedRoute>
                              <Dashboard/>
                          </AuthenticatedRoute>} />
                      <Route path='/gantt-chart' element={
                          <AuthenticatedRoute>
                              <GanttChart/>
                          </AuthenticatedRoute>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path={'*'} element={<Error/>} />
                  </Routes>
              </BrowserRouter>
          </AuthProvider>
      </div>
  );
}

export default App;
