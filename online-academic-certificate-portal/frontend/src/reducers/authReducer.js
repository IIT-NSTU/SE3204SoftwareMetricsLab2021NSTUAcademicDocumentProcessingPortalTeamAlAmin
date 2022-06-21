import * as actionTypes from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isChairman: null,
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
                isChairman: action.payload.user.is_chairman,
                isLoading: false
            }
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                isChairman: action.payload.is_chairman,

            }

        case actionTypes.REGISTER_STUDENT_USER_FAILED:
        case actionTypes.REGISTER_CHAIRMAN_USER_FAILED:
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isChairman: null,
                isLoading: false
            }

        default:
            return state;
    }
}

