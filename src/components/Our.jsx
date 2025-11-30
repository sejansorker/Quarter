import React from 'react'
import Container from './Container'
import By1 from "../assets/by1.png"
import By2 from "../assets/by2.png"
import By3 from "../assets/by3.png"
import { FaArrowRightLong } from 'react-icons/fa6'
const Our = () => {
    return (
        <div className='bg-[url(/our.png)] '>
            <Container>
                <div className="py-25">
                    <div className="text-center">
                        <button className='py-1 px-6 text-[16px] text-[#FF5A3C] font-bold font-nuni bg-[#fb52522f] rounded-[30px]'>Our Services</button>
                        <h2 className='text-[48px] font-bold font-pop pt-4 pb-9'>Our Main Focus</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[31%]">
                            <div className="px-9.5 pt-9.5 pb-13.5 h-[412px] bg-white text-center hover:border-b-3 hover:border-b-[#FF5A3C] ">
                                <div className="flex justify-center">
                                    <img src={By1} alt="" />
                                </div>
                                <h3 className='text-[28px] font-bold font-pop pb-2.5'>Buy a home</h3>
                                <p className='text-[16px] text-[#5C727D] font-normal font-nuni pb-7'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home. </p>
                                <div className="flex items-center justify-center text-[#FF5A3C] text-[18px] font-bold font-nuni cursor-pointer gap-x-2.5">
                                    <h5 className=''>Find A Home </h5>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                        <div className="w-[31%]">
                            <div className="px-9.5 pt-9.5 h-[412px] pb-13.5 bg-white text-center hover:border-b-3 hover:border-b-[#FF5A3C] ">
                                <div className="flex justify-center">
                                    <img src={By2} alt="" />
                                </div>
                                <h3 className='text-[28px] font-bold font-pop pb-2.5'>Rent a home</h3>
                                <p className='text-[16px] text-[#5C727D] font-normal font-nuni pb-7'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home. </p>
                                <div className="flex items-center justify-center text-[#FF5A3C] text-[18px] font-bold font-nuni cursor-pointer gap-x-2.5">
                                    <h5 className=''>Find A Home </h5>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                        <div className="w-[31%]">
                            <div className="px-9.5 h-[412px] pt-9.5 pb-13.5 bg-white text-center hover:border-b-3 hover:border-b-[#FF5A3C] ">
                                <div className="flex justify-center">
                                    <img src={By3} alt="" />
                                </div>
                                <h3 className='text-[28px] font-bold font-pop pb-2.5'>Sell a home</h3>
                                <p className='text-[16px] text-[#5C727D] font-normal font-nuni pb-7'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home. </p>
                                <div className="flex items-center justify-center text-[#FF5A3C] text-[18px] font-bold font-nuni cursor-pointer gap-x-2.5">
                                    <h5 className=''>Find A Home </h5>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Our