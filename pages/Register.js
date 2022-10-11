import React, { useState } from 'react'
import Header from '../components/Header'
import { Form, Radio, Input, Button } from "antd"

const Register = () => {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const [form] = Form.useForm();

    return (
        <>
            <Header />
            <div className="login flex justify-center items-center">
                <div
                    className="w-1/3 bg-gray-400 opacity-80 rounded-lg flex flex-col justify-around items-center py-20">
                    <p className="text-3xl">Registration</p>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Mr.</Radio>
                        <Radio value={2}>Mrs.</Radio>
                        <Radio value={3}>Ms.</Radio>
                    </Radio.Group>
                    <div className="flex flex-row justify-between items-center my-10">
                        <div className=" mr-10">
                            <p className="text-center text-xl">First Name</p>
                            <Input style={{ borderRadius: 10, height: 45 }} />
                        </div>
                        <div className="ml-10">
                            <p className="text-center text-xl ">Last Name</p>
                            <Input style={{ borderRadius: 10, height: 45 }} />
                        </div>
                    </div>
                    <div className="my-2">
                        <p className="text-center text-xl">Email ID</p>
                        <Input style={{ borderRadius: 10, height: 45 }} />
                    </div>
                    <div className="my-2">
                        <p className="text-center text-xl">Mobile Number</p>
                        <Input style={{ borderRadius: 10, height: 45 }} />
                    </div>
                    <div className="my-2">
                        <p className="text-center text-xl">OTP</p>
                        <Input style={{ borderRadius: 10, height: 45 }} />
                    </div>

                    <Button type="primary" shape="round"
                        style={{ backgroundColor: 'red', width: 150, height: 50, marginTop: 20 }}>
                        Start Shopping
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Register