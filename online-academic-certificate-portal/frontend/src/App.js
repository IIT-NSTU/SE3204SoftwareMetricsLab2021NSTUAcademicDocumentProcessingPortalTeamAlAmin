import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { check_continuous_auth } from './actions/auth';
import { CPrivateRoute, SPrivateRoute } from './private/PrivateRoute';

import Homepage from './components/Homepage';
import Login from "./components/Login/Login";
import Layout from './hoc/Layout/Layout';

import ChairmanDashboard from "./components/ChairmanDashboard";
import ChairmanRegistration from "./components/Registration/ChairmanRegistration/ChairmanRegistration";

import StudentRegistration from './components/Registration/StudentRegistration/StudentRegistration';
import StudentDashboard from "./components/StudentDashboard";
import StudentEmailChangeForm from "./components/StudentEmailChangeForm/StudentEmailChangeForm";

import CertificateType from "./components/CertificateType/CertificateType";
import ForgetPasswordConfirm from './components/ForgetPassword/ForgetPasswordConfirm/ForgetPasswordConfirm.js';
import ForgetPasswordStart from './components/ForgetPassword/ForgetPasswordStart/ForgetPasswordStart';
import Registration from "./components/Registration/Registration";
import UserEmailConfirm from "./components/UserEmailConfirm/UserEmailConfirm";




const App = ({ check_continuous_auth, isAuthenticated, token, isLoading }) => {
  useEffect(() => {
    check_continuous_auth();
  }, [check_continuous_auth])


  return (
    <Layout>
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

          <Route exact path='/student/certificate-type' element={
            <SPrivateRoute>
              <CertificateType />
            </SPrivateRoute>
          } />

          <Route exact path='/student/email-change' element={
            <SPrivateRoute>
              <StudentEmailChangeForm />
            </SPrivateRoute>
          } />


          <Route exact path='/chairman/signup' element={<ChairmanRegistration />} />
          <Route exact path='/student/signup' element={<StudentRegistration />} />
          <Route exact path='/user/email-confirm' element={<UserEmailConfirm />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/forget-password/confirm' element={<ForgetPasswordConfirm />} />
          <Route exact path='/forget-password' element={<ForgetPasswordStart />} />
          <Route exact path='/registration' element={<Registration />} />
          <Route exact path='/' element={<Homepage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Layout>
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
