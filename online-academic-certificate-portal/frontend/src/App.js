import { Route, Routes } from "react-router-dom";
import ChairmanDashboard from "./components/ChairmanDashboard";
import ChairmanSignup from './components/ChairmanSignup';
import Homepage from './components/Homepage';
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";
import StudentSignup from "./components/StudentSignup";
import { CPrivateRoute, SPrivateRoute } from './private/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/chairman/signup' element={<ChairmanSignup />} />
        <Route exact path='/student/signup' element={<StudentSignup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/chairman/dashboard' element={
          <CPrivateRoute>
            <ChairmanDashboard />
          </CPrivateRoute>
        } />
        <Route exact path='/student/dashboard' element={
          <SPrivateRoute exact path='/student/dashboard' component={StudentDashboard} />} />
      </Routes>


    </div>
  );
}

export default App;
