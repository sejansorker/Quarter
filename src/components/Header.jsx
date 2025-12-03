import React from 'react'
import Container from './Container'
import { IoLocationOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='bg-[#0A2C3D]'>
            <Container>
                <div className="flex justify-between items-center ">
                    <div className="lg:w-1/3 w-full">
                        <div className="lg:flex lg:py-0 py-1 gap-x-[23px] lg:pl-0 pl-3 items-center text-[12px] lg:text-[14px] font-normal font-nuni text-white">
                            <div className="flex items-center gap-x-2 ">
                                <IoLocationOutline />
                                <p className='text-[11px] lg:text-[14px]'>254 Lillian Blvd, Holbrook</p>
                            </div>
                            <div className="flex items-center gap-x-2 ">
                                <TfiEmail />
                                <p>info@santizex-site.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full">
                        <div className="flex justify-end items-center space-x-4.5 text-[14px] font-normal font-pop text-white">
                            <div className="flex  lg:gap-3.5 gap-2.5">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaVimeoV />
                            </div>
                            <div className="">
                                <button className='lg:px-6.5 lg:py-3.5 px-3 py-3 bg-comon text-[12px] lg:text-[16px]'>Add Listings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header