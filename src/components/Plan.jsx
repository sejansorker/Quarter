import React, { useState } from 'react'
import Container from './Container'
import Text from "../assets/text.png"
import Bari from "../assets/bari.png"
const Plan = () => {
    const [top, setTop] = useState("one")
    return (
        <div className='pb-26'>
            <Container>
                <div className="text-center">
                    <button className='py-1 px-6 text-[16px] text-[#FF5A3C] font-bold font-nuni bg-[#fb52522f] rounded-[30px]'>Apartment Sketch</button>
                    <h2 className='text-[48px] font-bold font-pop pt-4 pb-9'>Apartments Plan</h2>
                </div>
                <div className="flex justify-center">
                    <div className="w-9/12">
                        <ul className='flex items-center gap-x-[50px] justify-center pb-[53px]'>
                            <li onClick={() => setTop("one")} className={`text-[#0A2C3D] cursor-pointer font-bold font-nuni text-[20px] ${top === "one" ? "text-comon border-b-2 border-comon" : ""}`}>The Studio</li>
                            <li onClick={() => setTop("two")} className={`text-[#0A2C3D] cursor-pointer font-bold font-nuni text-[20px] ${top === "two" ? "text-comon border-b-2 border-comon" : ""}`}>Deluxe Portion</li>
                            <li onClick={() => setTop("three")} className={`text-[#0A2C3D] cursor-pointer font-bold font-nuni text-[20px] ${top === "three" ? "text-comon border-b-2 border-comon" : ""}`}>Penthouse</li>
                            <li onClick={() => setTop("four")} className={`text-[#0A2C3D] cursor-pointer font-bold font-nuni text-[20px] ${top === "four" ? "text-comon border-b-2 border-comon" : ""}`}>Top Garden</li>
                            <li onClick={() => setTop("five")} className={`text-[#0A2C3D] cursor-pointer font-bold font-nuni text-[20px] ${top === "five" ? "text-comon border-b-2 border-comon" : ""}`}>Double Height</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    {top === "one" &&
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="bg-comon py-19 px-[75px]">
                                    <img src={Text} alt="" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pt-8 pl-2">
                                    <img src={Bari} alt="" />
                                </div>
                            </div>
                        </div>
                    }
                    {top === "two" &&
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="bg-[#77C720] py-19 px-[75px]">
                                    <img src={Text} alt="" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pt-8 pl-2">
                                    <img src={Bari} alt="" />
                                </div>
                            </div>
                        </div>
                    }
                    {top === "three" &&
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="bg-[#B9B8C2] py-19 px-[75px]">
                                    <img src={Text} alt="" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pt-8 pl-2">
                                    <img src={Bari} alt="" />
                                </div>
                            </div>
                        </div>
                    }
                    {top === "four" &&
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="bg-[#121F4A] py-19 px-[75px]">
                                    <img src={Text} alt="" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pt-8 pl-2">
                                    <img src={Bari} alt="" />
                                </div>
                            </div>
                        </div>
                    }
                    {top === "five" &&
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="bg-comon py-19 px-[75px]">
                                    <img src={Text} alt="" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pt-8 pl-2">
                                    <img src={Bari} alt="" />
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </Container>
        </div>
    )
}

export default Plan