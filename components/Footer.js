import React from 'react'
import Image from 'next/image'

import logo from "../assets/logo.png"

const Footer = () => {
    return (
       <footer className="text-gray-600 body-font bg-gray-200">
           <div
               className="container px-5 py-5 mx-auto flex flex-row justify-around items-start">
               <Image src={logo} height={150} width={150} alt={"logo"}/>
               <div className="flex flex-row justify-center items-center">
                   <div className=" w-full px-4">
                       <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Welcome Ankkie</h2>
                       <nav className="list-none mb-10">
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">Bhubaneshwar, Orissa, India</a>
                           </li>
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">+91 1234567890</a>
                           </li>
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">theankkie@gmail.com</a>
                           </li>
                       </nav>
                   </div>
                   <div className=" w-full ">
                       <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-center">Customer Services</h2>
                       <div className="flex flex-row justify-center items-center gap-20">
                       <nav className="list-none mb-10">
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">Shipping and Delivery Policy</a>
                           </li>
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">Return and Refund Policy</a>
                           </li>
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                           </li>
                       </nav>
                        <nav className="list-none mb-10">
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                           </li>
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">FAQs/Help</a>
                           </li>
                           <li>
                               <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                           </li>
                       </nav>
                       </div>
                   </div>
               </div>
           </div>
           <div className="flex flex-row justify-evenly items-center">
            <p className="font-bold text-xl">Follow Us On <i className="fa-brands fa-instagram"></i> / <i className="fa-brands fa-facebook"></i></p>
            <p className="text-xl"><i className="fa-regular fa-copyright"></i> <span className="font-bold">Ankkiee</span> All Rights Reserved</p>
            <p className="text-xl">Made with Love in India</p>
           </div>
       </footer>
    )
}

export default Footer