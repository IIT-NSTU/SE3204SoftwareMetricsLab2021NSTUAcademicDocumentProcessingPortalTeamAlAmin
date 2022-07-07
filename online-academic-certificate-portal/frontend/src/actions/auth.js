import axios from "axios";
import * as actionTypes from './types';

export const create_chairman_user = ({ fullname, email, password, password2 }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ fullname, email, password, password2 })

    axios.post('signup/chairman/', body, config)
        .then(res => {
            dispatch({
                type: actionTypes.REGISTER_CHAIRMAN_USER_SUCCESS,
                payload: res.data
            })
            console.log(res.data)
        }).catch(err => {
            dispatch({
                type: actionTypes.REGISTER_CHAIRMAN_USER_FAILED
            })
            console.log(err.response.data)
        })

}

export const create_student_user = ({ fullname, email, password, password2 }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ fullname, email, password, password2 })
    console.log('inside')
    axios.post('http://localhost:8000/api/signup/student/', body, config)
        .then(res => {
            dispatch({
                type: actionTypes.REGISTER_STUDENT_USER_SUCCESS,
                payload: res.data
            })
            console.log(res.data)
        }).catch(err => {
            dispatch({
                type: actionTypes.REGISTER_STUDENT_USER_FAILED
            })
            console.log(err.response.data)
        })

}


export const login = ({ email, password }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({ email, password })
    console.log(body)
    axios.post('http://localhost:8000/api/login/', body, config)
        .then(response => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: response.data
            })
        }).catch(err => {
            dispatch({
                type: actionTypes.LOGIN_FAILED
            })
        })

}

export const check_continuous_auth = () => (dispatch) => {
    const token = localStorage.getItem("token")
    if (!token) {
        dispatch(logout)
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    }
    axios.get('http://localhost:8000/api/checkauth/', config)
        .then(response => {
            dispatch({
                type: actionTypes.CONTINUOUS_USER_AUTH_SUCCESS,
                payload: response.data
            })
        }).catch(err => {
            dispatch({
                type: actionTypes.CONTINUOUS_USER_AUTH_FAILED
            })
        })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("token")
    dispatch({ type: actionTypes.AUTH_LOGOUT })
}