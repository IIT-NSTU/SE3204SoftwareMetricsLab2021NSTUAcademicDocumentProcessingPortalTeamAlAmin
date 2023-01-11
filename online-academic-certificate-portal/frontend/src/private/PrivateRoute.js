import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const CPrivateRoute = ({ redirectPath = '/login', children }) => {
    const state = useSelector(state => state.auth);
    if (state.isAuthenticated && state.user.is_chairman
        && state.user.email_validation) {
        return children;
    }
    return <Navigate to={redirectPath} replace />;
}

export const SPrivateRoute = ({ redirectPath = '/login', children }) => {
    const state = useSelector(state => state.auth);
    console.log('in private', state)
    if (state.isAuthenticated && state.user.is_student
        && state.user.email_validation) {
        return children;
    }
    return <Navigate to={redirectPath} replace />;
}

export const LPrivateRoute = ({ redirectPath = '/login', children }) => {
    const state = useSelector(state => state.auth);
    if (state.isAuthenticated && state.user.is_librarian
        && state.user.email_validation) {
        return children;
    }
    return <Navigate to={redirectPath} replace />;
}

export const PPrivateRoute = ({ redirectPath = '/login', children }) => {
    const state = useSelector(state => state.auth);
    if (state.isAuthenticated && state.user.is_provost
        && state.user.email_validation) {
        return children;
    }
    return <Navigate to={redirectPath} replace />;
}

export const COPrivateRoute = ({ redirectPath = '/login', children }) => {
    const state = useSelector(state => state.auth);
    if (state.isAuthenticated && state.user.is_courier
        && state.user.email_validation) {
        return children;
    }
    return <Navigate to={redirectPath} replace />;
}