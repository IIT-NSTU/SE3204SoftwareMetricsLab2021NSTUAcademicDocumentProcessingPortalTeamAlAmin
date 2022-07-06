import * as actionTypes from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_STUDENT_USER_SUCCESS:
        case actionTypes.REGISTER_CHAIRMAN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token)

            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload.user
            }
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)

            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload.user
            }
        case actionTypes.CONTINUOUS_USER_AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case actionTypes.REGISTER_STUDENT_USER_FAILED:
        case actionTypes.REGISTER_CHAIRMAN_USER_FAILED:
        case actionTypes.LOGIN_FAILED:
        case actionTypes.CONTINUOUS_USER_AUTH_FAILED:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            }
        case actionTypes.AUTH_LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            }
        default:
            return state;
    }
}

