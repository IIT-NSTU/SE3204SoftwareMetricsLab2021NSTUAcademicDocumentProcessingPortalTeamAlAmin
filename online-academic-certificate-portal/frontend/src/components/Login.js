import PropTypes from 'prop-types'
import { useState } from 'react'
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { login } from "../actions/auth"

function Login({ login, isAuthenticated, isChairman }) {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const { username, password } = user

    const loginChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
    }
    if (isAuthenticated && isChairman) {
        return <Navigate to="/chairman/dashboard" />
    } else if (isAuthenticated && !isChairman) {
        return <Navigate to="/student/dashboard" />
    } else {
        return (
            <div className='container mb-5'>

                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <h2>Sign In</h2>
                        <form onSubmit={(e) => handleLoginSubmit(e)}>
                            <div className="form-group mb-3">
                                <label>Username</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={e => loginChange(e)}
                                    placeholder="username..."
                                    name="username" value={username} />
                            </div>
                            <div className="form-group mb-3">
                                <label>Password</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={e => loginChange(e)}
                                    placeholder="username..."
                                    name="password" value={password} />
                            </div>
                            <button className='btn btn-primary'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isChairman: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isChairman: state.auth.isChairman
})

export default connect(mapStateToProps, { login })(Login)