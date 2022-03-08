import React from 'react';
import AuthLayout from "../features/auth/components/AuthLayout";
import RegisterForm from "../features/auth/components/RegisterForm";

function Register() {
    return (
        <AuthLayout>
            <RegisterForm/>
        </AuthLayout>
    );
}

export default Register;
