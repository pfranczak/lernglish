import React, { useContext, useEffect, useState } from 'react';
import * as Firebase from './firebase';
import FirebaseContext from "./context";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState('loading');
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        firebase.onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};
