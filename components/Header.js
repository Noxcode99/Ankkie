import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Input } from 'antd';
const { Search } = Input;

import logo from "../assets/logo.png"

const Header = () => {

    const onSearch = (value) => console.log(value);
    const router = useRouter()

    return (
        <div className="flex flex-row justify-evenly items-center  py-4">
            <div className="-translate-x-20" onClick={() => { router.push("/") }}>
                <Image src={logo} height={100} width={100} alt={"logo"} />
            </div>
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: 500,
                }}
            />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center cursor-pointer" onClick={() => { router.push("/Shop") }}>
                    <p className="uppercase text-lg font-bold mr-2">Shop</p>
                    <i className="fa-sharp fa-solid fa-chevron-down -translate-y-2 font-bold"></i>
                </div>
                <p className="uppercase mx-10 text-lg font-bold cursor-pointer">
                    New Arrivals
                </p>
                <div className="flex flex-row justify-between items-center cursor-pointer">
                    <p className="uppercase text-lg font-bold mr-2">About Us</p>
                    <i className="fa-sharp fa-solid fa-chevron-down -translate-y-2"></i>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <i className="fa-solid fa-heart text-xl -translate-y-2 mr-10"></i>
                <i className="fa-solid fa-cart-shopping text-xl -translate-y-2 mr-10"></i>
                <div className="flex flex-row justify-between items-center">
                    <i className="fa-regular fa-user text-xl -translate-y-2 cursor-pointer" onClick={() => { router.push('/Login') }}></i>
                    <p className="text-lg font-semibold mx-5 cursor-pointer" onClick={() => { router.push('/Login') }}>Login</p>
                    <i className="fa-solid fa-user text-xl -translate-y-2 cursor-pointer" onClick={() => { router.push('/Register') }}></i>
                </div>
            </div>

        </div>
    )
}

export default Header