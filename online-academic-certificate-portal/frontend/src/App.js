import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { check_continuous_auth } from './actions/auth';
import ChairmanDashboard from "./components/ChairmanDashboard";
import ChairmanSignup from './components/ChairmanSignup';
import Homepage from './components/Homepage';
import Login from "./components/Login/Login";
import StudentRegistration from './components/Registration/StudentRegistration/StudentRegistration';
import StudentDashboard from "./components/StudentDashboard";
import { CPrivateRoute, SPrivateRoute } from './private/PrivateRoute';

const App = ({ check_continuous_auth, isAuthenticated, token }) => {
  useEffect(() => {
    check_continuous_auth();
    console.log(token)
  }, [check_continuous_auth, token])


  return (
    <div className="App">
      <Routes>
        <Route exact path='/chairman/dashboard' element={
          <CPrivateRoute>
            <ChairmanDashboard />
          </CPrivateRoute>
        } />
        <Route exact path='/student/dashboard' element={
          <SPrivateRoute>
            <StudentDashboard />
          </SPrivateRoute>
        } />
        <Route exact path='/chairman/signup' element={<ChairmanSignup />} />
        <Route exact path='/student/signup' element={<StudentRegistration />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </div>
  );

}
App.propTypes = {
  check_continuous_auth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  token: PropTypes.string,
  user: PropTypes.object
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  token: state.auth.token,
  user: state.auth.user
})
export default connect(mapStateToProps, { check_continuous_auth })(App);
