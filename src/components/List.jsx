import React from 'react'
import Container from './Container'
import { FaArrowRight } from 'react-icons/fa6'
import One from "../assets/one.svg"
import Two from "../assets/two.svg"
import Three from "../assets/three.svg"
import Four from "../assets/four.svg"
import Five from "../assets/five.svg"
import Six from "../assets/six.svg"
import Seven from "../assets/seven.svg"
import Eight from "../assets/eight.svg"
import { SiX } from 'react-icons/si'
const List = () => {
    return (
        <div className='mb-25'>
            <Container>
                <div className="text-center">
                    <button className='py-1 px-6 text-[16px] text-comon font-bold font-nuni bg-[#fb52522f] rounded-[30px]'>Properties</button>
                    <h2 className='text-[48px] font-bold font-pop pt-4 pb-9'>Featured Listings</h2>
                </div>
                <div className="flex flex-wrap justify-between gap-y-10">
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5 x] pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={One} alt="" />
                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>Parking Space</h4>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                             <FaArrowRight />
                           </div>
                        </div>
                    </div>
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5 x] pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={Two} alt="" />

                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>Swimming Pool</h4>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                             <FaArrowRight />
                           </div>
                        </div>
                    </div>
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5 x] pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={Three} alt="" />

                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>Privat Security</h4>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                             <FaArrowRight />
                           </div>
                        </div>
                    </div>
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5 x] pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={Four} alt="" />

                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>Medical Center</h4>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                             <FaArrowRight />
                           </div>
                        </div>
                    </div>
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5 x] pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={Five} alt="" />

                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>Library Area</h4>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                             <FaArrowRight />
                           </div>
                        </div>
                    </div>
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5 x] pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={Six} alt="" />

                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>King Size Beds</h4>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                             <FaArrowRight />
                           </div>
                        </div>
                    </div>
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5 x] pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={Seven} alt="" />

                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>Smart Homes</h4>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                             <FaArrowRight />
                           </div>
                        </div>
                    </div>
                    <div className="w-[23%] relative group text-center bg-white hover:bg-comon duration-300 ease-in-out">
                        <div className="pt-6.5  pb-[55px]  shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                            <div className="flex justify-center">
                                <div className="h-25 w-25  duration-300 ease-in-out group-hover:bg-white bg-[rgba(251,82,82,0.1)] flex justify-center items-center rounded-full">
                                <img src={Eight} alt="" />
                            </div>
                            </div>
                            <h4 className='font-pop font-bold text-[20px] pt-5 group-hover:text-white'>Kid’s Playland</h4>
                        </div>
                           <div className="h-10.5 w-10.5 flex justify-center items-center bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)] absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                             <FaArrowRight />
                           </div>
                    </div>
                    
                   
                    
                </div>
            </Container>
        </div>
    )
}

export default List