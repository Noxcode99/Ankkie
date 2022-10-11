import React from 'react'
import Image from 'next/image';

const Card = ({ image, heading, subtitle }) => {
    return (
        <div className="text-center border border-gray-800 mx-10">
            <Image src={image} width={300} height={400} alt={"pic"} />
            <p className="text-2xl uppercase font-bold mt-5 -mb-[1px]">{heading}</p>
            <p className="text-lg text-gray-800">{subtitle}</p>
        </div>
    )
}

export default Card