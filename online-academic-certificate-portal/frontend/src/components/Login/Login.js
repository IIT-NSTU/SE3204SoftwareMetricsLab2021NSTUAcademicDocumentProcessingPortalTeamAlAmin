import PropTypes from 'prop-types'
import { useState } from 'react'
import { connect } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { login } from '../../actions/auth'
import '../../assets/css/NeumorphismForm.css'
const Login = ({ login, isAuthenticated, isLoading, token, user }) => {
    const [userFormDetails, setUserFormDetails] = useState({
        email: "",
        password: ""
    })
    const { email, password } = userFormDetails

    const loginChange = (e) => {
        setUserFormDetails({
            ...userFormDetails,
            [e.target.name]: e.target.value
        })
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        login({ email, password })
    }
    if (isAuthenticated && user.is_chairman && user.email_validation) {
        return <Navigate to="/chairman/dashboard" />
    } else if (isAuthenticated && user.is_student && user.email_validation) {
        return <Navigate to="/student/dashboard" />
    }
    else if (isAuthenticated && (user.is_student || user.is_chairman) && !user.email_validation) {
        return <p>please confirm your email</p>
    }
    else {
        return (
            <div className="form-container">
                <div className="avatar"></div>
                <div className="title">IIT Certificate</div>
                <div className="sub-title">CR3W</div>
                <form onSubmit={(e) => handleLoginSubmit(e)}>
                    <div className="username">
                        <i className="fa fa-envelope"></i>
                        <input type="text"
                            className="name-input"
                            onChange={e => loginChange(e)}
                            placeholder="E-mail"
                            name="email"
                            value={email}
                        />
                    </div>
                    <div className="password">
                        <i className="fa fa-key"></i>
                        <input
                            className="password-input"
                            type="text"
                            onChange={e => loginChange(e)}
                            placeholder="Password"
                            name="password" value={password}
                        />
                    </div>
                    <input type="submit" value="Login" className="submit-input" />
                    <Link to="/forget-password">
                        <p style={{ 'textAlign': 'center', 'marginTop': '15px' }}>Forgotten Password?</p>
                    </Link>
                    <a className="btn" href="#open-modal"> <input type="button" value="Create Account" id="submit-registration" /></a>
                    <div id="open-modal" className="modal-window">
                        <div>
                            <a href="#/" title="Close" className="modal-close">Close</a>
                            <a href="/student/signup">
                                <input type="button" value="registration as student" id="type-registration" />
                            </a>
                            <a href="/chairman/signup">
                                <input type="button" value="registration as director" id="type-registration" />
                            </a>

                            <a href="/librarian/signup">
                                <input type="button" value="registration as librarian" id="type-registration" />
                            </a>
                            <a href="/provost/signup">
                                <input type="button" value="registration as hall provost" id="type-registration" />
                            </a>
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { login })(Login)