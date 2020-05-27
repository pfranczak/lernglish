import React from 'react';
import './App.css';
import { AuthProvider } from "./firebase/auth";
import Routes from "./Routes";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </div>
    );
}

export default App;
