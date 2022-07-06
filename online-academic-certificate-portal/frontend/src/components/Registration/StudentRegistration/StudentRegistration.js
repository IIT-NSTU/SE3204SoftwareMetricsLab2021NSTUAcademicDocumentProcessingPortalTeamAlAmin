import PropTypes from 'prop-types'
import { useState } from 'react'
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { create_student_user } from '../../../actions/auth'
import '../registration.css'

const StudentRegistration = ({ create_student_user, isAuthenticated, isLoading, token, user }) => {
    const [student, setStudent] = useState({
        fullname: '',
        email: '',
        password: '',
        password2: ''
    })
    const handleChange = (e) => setStudent({
        ...student,
        [e.target.name]: e.target.value
    })
    const { fullname, email, password, password2 } = student
    const handleSubmit = (e) => {
        e.preventDefault();
        create_student_user({ fullname, email, password, password2 })
    }
    if (isAuthenticated && user.is_student && !user.email_validation) {
        return <p>please confirm your email</p>
    }
    else if (isAuthenticated && user.is_student && user.email_validation) {
        return <Navigate to="/student/dashboard" />
    }
    else {
        return (
            <div class="form-container">

                <div class="title">Student Registration</div>

                <form onSubmit={e => handleSubmit(e)}>
                    <div class="username">
                        <i class="fa fa-user"></i>
                        <input class="name-input"
                            type="text"
                            placeholder="Name"
                            name='fullname'
                            value={fullname}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div class="username">
                        <i class="fa fa-envelope"></i>
                        <input class="name-input"
                            type="text"
                            placeholder="E-mail"
                            name='email'
                            value={email}
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div class="password">
                        <i class="fa fa-key"></i>
                        <input class="password-input"
                            type="text"
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div class="password">
                        <i class="fa fa-key"></i>
                        <input class="password-input"
                            type="text"
                            placeholder="Confirm Password"
                            name='password2'
                            value={password2}
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <input type="submit" value="Registration" class="submit-input" />

                    <a class="btn" href="../login/Login.html"> <input type="button" value="Login" id="login-registration" /></a>
                </form>
            </div>
        )
    }
}
StudentRegistration.propTypes = {
    create_student_user: PropTypes.func.isRequired,
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
export default connect(mapStateToProps, { create_student_user })(StudentRegistration)