import React from 'react'
import Header from "../components/Header"
import { Input, Button } from "antd"

const Login = () => {
    return (
        <>
            <Header />
            <div className="login flex justify-center items-center">
                <div className="w-1/3 h-1/2 bg-white opacity-70 rounded-lg flex flex-col justify-center items-center">
                    <p className="text-3xl">Login/Register</p>
                    <p className="text-xl">Enter Mobile Number*</p>
                    <Input placeholder="Enter Number" style={{ width: "60%", marginBottom: 30 }} />
                    <Button type="primary" shape="round" style={{ backgroundColor: 'red', width: 150, height: 50, marginBottom: 15 }}>
                        Get OTP
                    </Button>
                    <p>Or Login With</p>
                    <div>
                        <i className="fa-brands fa-google text-3xl mx-5"></i>
                        <i className="fa-brands fa-facebook text-3xl mx-5"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login