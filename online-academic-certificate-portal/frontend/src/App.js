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

import ChairmanRejectedDashboard from "./components/Dashboard/Chairman/Rejected/ChairmanRejectedDashboard";
import ChairmanRequestedDashboard from "./components/Dashboard/Chairman/Requested/ChairmanRequestedDashboard";
import ChairmanRegistration from "./components/Registration/ChairmanRegistration/ChairmanRegistration";

import StudentDashboard from "./components/Dashboard/Student/StudentDashboard";
import StudentRegistration from './components/Registration/StudentRegistration/StudentRegistration';
import StudentEmailChangeForm from "./components/StudentEmailChangeForm/StudentEmailChangeForm";

import CertificateType from "./components/CertificateType/CertificateType";
import ChairmanApprovedDashboard from "./components/Dashboard/Chairman/Approved/ChairmanApprovedDashboard";
import ProvisionalReject from "./components/Dashboard/Chairman/ProvisionalReject/ProvisionalReject";
import UploadImage from "./components/Dashboard/Student/UploadImage/UploadImage";
import ForgetPasswordConfirm from './components/ForgetPassword/ForgetPasswordConfirm/ForgetPasswordConfirm.js';
import ForgetPasswordStart from './components/ForgetPassword/ForgetPasswordStart/ForgetPasswordStart';
import Registration from "./components/Registration/Registration";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import UserEmailConfirm from "./components/UserEmailConfirm/UserEmailConfirm";


const App = ({ check_continuous_auth, isAuthenticated, token, isLoading }) => {
  useEffect(() => {
    check_continuous_auth();
  }, [check_continuous_auth])


  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route exact path='/chairman/requested/dashboard' element={
            <CPrivateRoute>
              <ChairmanRequestedDashboard />
            </CPrivateRoute>
          } />
          <Route exact path='/chairman/rejeted/dashboard' element={
            <CPrivateRoute>
              <ChairmanRejectedDashboard />
            </CPrivateRoute>
          } />
          <Route exact path='/chairman/approved/dashboard' element={
            <CPrivateRoute>
              <ChairmanApprovedDashboard />
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
          <Route exact path='/student/upload/ssc' element={<UploadImage />} />
          <Route exact path='/student-details/:roll' element={<StudentDetails />} />
          <Route exact path='/chairman/:roll/reject' element={<ProvisionalReject />} />
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
