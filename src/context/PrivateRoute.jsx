import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>This page is Loading...</div>
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/sign-in'></Navigate>
};

export default PrivateRoute;