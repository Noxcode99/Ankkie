import React,{useState} from 'react'
import Image from 'next/image'

const Card2 = ({image,image2,heading,subtitle}) => {

    const [hover,setHover]=useState(false)

    return (
        <div className="text-center mx-10 cursor-pointer" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <Image src={hover?image:image2} width={300} height={400} alt={"pic"} />
            <div className="bg-white opacity-90 -translate-y-40 py-5">
                <p className="text-3xl font-semibold ">{heading}</p>
                <p className="text-sm -mt-5">{subtitle}</p>
            </div>
        </div>
    )
}

export default Card2