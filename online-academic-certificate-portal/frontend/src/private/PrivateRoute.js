import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export const CPrivateRoute = ({ redirectPath = '/login', children }) => {
    const state = useSelector(state => state.auth);
    // return <Route path={path} {...rest} render={props => {
    //     if (state.isLoading) {
    //         return <h3>Loading...</h3>
    //     } else if (!state.isAuthenticated && !state.isChairman) {
    //         return <Navigate to="/login" />
    //     } else {
    //         return <Component {...props} />
    //     }
    // }} />
    if (!state.isAuthenticated && !state.isChairman) {
        return <Navigate to={redirectPath} replace />
    }
    return children;
}

export const SPrivateRoute = ({ component: Component, path, ...rest }) => {
    const state = useSelector(state => state.auth);
    return <Route path={path} {...rest} render={props => {
        if (state.isLoading) {
            return <h3>Loading...</h3>
        } else if (!state.isAuthenticated && !state.isChairman) {
            return <Navigate to="/login" />
        } else {
            console.log('state', state)
            return <Component {...props} />
        }
    }} />
}