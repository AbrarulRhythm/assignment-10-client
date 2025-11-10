import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
        setUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;