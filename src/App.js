import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppMain from "./components/AppMain";
import Error from "./components/error/Error";
import AuthProvider, {useAuth} from "./components/security/AuthContext";
import GanttChart from "./components/gantt/GanttChart";
import Dashboard from "./components/dashboard/Dashboard";
import PdmMain from "./components/plm/pdm/PdmMain";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Aside from "./components/layout/Aside";
import TaskMain from "./components/plm/task/TaskMain";
import EcoMain from "./components/plm/eco/EcoMain";
import QualityMain from "./components/plm/quality/QualityMain";
import GridDragAndDrop from "./components/showcase/GridDragAndDrop";
import GridTable from "./components/showcase/GridTable";



function AuthenticatedRoute({children}) {
    const authContext = useAuth();

    if( authContext.isAuthenticated )
        return children
   
    return <Navigate to={"/login"} />
}

function App() {

    return (
      <div className="App">
          <AuthProvider>
              <BrowserRouter basename="/react-demo">
                  <Header/>
                  <div className="App-container">
                      <AuthenticatedRoute>
                        <Aside/>
                      </AuthenticatedRoute>
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
                          <Route path='/plm-pdm' element={
                              <AuthenticatedRoute>
                                  <PdmMain/>
                              </AuthenticatedRoute>} />
                          <Route path='/plm-task' element={
                              <AuthenticatedRoute>
                                  <TaskMain/>
                              </AuthenticatedRoute>} />

                          <Route path='/plm-eco' element={
                              <AuthenticatedRoute>
                                  <EcoMain/>
                              </AuthenticatedRoute>} />
                          <Route path='/plm-qlt' element={
                              <AuthenticatedRoute>
                                  <QualityMain/>
                              </AuthenticatedRoute>} />
                          {/* 쇼케이스 */}
                          <Route path='/showcase-dndcards' element={
                              <AuthenticatedRoute>
                                  <GridDragAndDrop/>
                              </AuthenticatedRoute>} />
                          <Route path='/showcase-gridtable' element={
                              <AuthenticatedRoute>
                                  <GridTable/>
                              </AuthenticatedRoute>} />

                          <Route path='/login' element={<Login/>} />
                          <Route path={'*'} element={<Error/>} />
                      </Routes>
                  </div>
                  <Footer/>
              </BrowserRouter>
          </AuthProvider>
      </div>
  );
}

export default App;
