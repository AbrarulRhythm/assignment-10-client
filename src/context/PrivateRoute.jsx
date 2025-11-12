import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/sign-in'></Navigate>
};

export default PrivateRoute;