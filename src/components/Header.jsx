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
                    <div className="w-1/3">
                        <div className="flex gap-x-[23px] items-center text-[14px] font-normal font-nuni text-white">
                            <div className="flex items-center gap-x-2 ">
                                <IoLocationOutline />
                                <p>254 Lillian Blvd, Holbrook</p>
                            </div>
                            <div className="flex items-center gap-x-2 ">
                                <TfiEmail />
                                <p>info@santizex-site.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex justify-end items-center space-x-4.5 text-[14px] font-normal font-pop text-white">
                            <div className="flex  gap-3.5">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaVimeoV />
                            </div>
                            <div className="">
                                <button className='px-6.5 py-3.5 bg-comon'>Add Listings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header