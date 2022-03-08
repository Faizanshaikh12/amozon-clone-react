import React from 'react';
import AuthLayout from "../features/auth/components/AuthLayout";
import LoginForm from "../features/auth/components/LoginForm";

function Login() {
    return (
        <AuthLayout>
            <LoginForm/>
        </AuthLayout>
    );
}

export default Login;
