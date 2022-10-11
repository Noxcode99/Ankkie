import React, { useState } from 'react'
import Image from 'next/image'



const Card3 = ({ image, image2, heading, subtitle }) => {

    const [hover, setHover] = useState(false)

    return (
        <div className="text-center mx-10 cursor-pointer" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <Image src={hover ? image : image2} width={300} height={400} alt={"pic"} />
            <div className="bg-white opacity-90  py-2">
                <p className="text-base font-semibold">{heading}</p>
                <p className="text-sm -mt-3">{subtitle}</p>
                <div className="flex justify-around items-center">
                    <p>PRICE</p>
                    <p className="text-red-700 font-semibold">Buy It{">>"}</p>
                </div>
            </div>
        </div>
    )
}

export default Card3