import React from 'react'
import Container from './Container'
import { FaFacebookF, FaPinterestP, FaTwitter, FaVimeoV } from 'react-icons/fa6'
import Logo from "../assets/logo1.png"
import Top from "../assets/top.png"
import { CiLocationOn } from 'react-icons/ci'
const Footer = () => {
    return (
        <div className='pt-50 pb-30 bg-[#171B2A] relative'>
            <Container>
                <div className="flex">
                    <div className="w-4/12">
                        <div className="">
                            <h4 className='text-[20px] text-white font-bold font-pop'>About Us.</h4>
                            <p className='py-7 pr-20 text-[16px] text-white  font-normal font-nuni'>orporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World. Indeed it has been more than one decade and five years that Groundlink</p>
                            <div className="flex items-center gap-x-2.5">
                                <div className="p-4 text-[#6A7695] hover:text-white bg-white hover:bg-comon rounded-full flex justify-center items-center ">
                                    <FaFacebookF />
                                </div>
                                <div className="p-4 text-[#6A7695] hover:text-white bg-white hover:bg-comon rounded-full flex justify-center items-center">
                                    <FaTwitter />
                                </div>
                                <div className="p-4 text-[#6A7695] hover:text-white bg-white hover:bg-comon rounded-full flex justify-center items-center">
                                    <FaVimeoV />
                                </div>
                                <div className="p-4 text-[#6A7695] hover:text-white bg-white hover:bg-comon rounded-full flex justify-center items-center">
                                    <FaPinterestP />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <div className="">
                            <ul>
                                <li className='text-[18px] text-white font-pop font-bold pb-6.5 '>Useful Links</li>
                                <li className='text-[16px] cursor-pointer text-white font-nuni font-normal pb-4.5'>About</li>
                                <li className='text-[16px] cursor-pointer text-white font-nuni font-normal pb-4.5'>News</li>
                                <li className='text-[16px] cursor-pointer text-white font-nuni font-normal pb-4.5'>Partners</li>
                                <li className='text-[16px] cursor-pointer text-white font-nuni font-normal pb-4.5'>Room Details</li>
                                <li className='text-[16px] cursor-pointer text-white font-nuni font-normal pb-4.5'>Gallery</li>
                                <li className='text-[16px] cursor-pointer text-white font-nuni font-normal pb-4.5'>Contacts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <div className="">
                            <ul>
                                <li className='text-[18px] text-white font-pop font-bold pb-6.5 '>Help?</li>
                                <li className='text-[16px] text-white font-nuni font-normal pb-4.5'>FAQ</li>
                                <li className='text-[16px] text-white font-nuni font-normal pb-4.5'>Term & conditions</li>
                                <li className='text-[16px] text-white font-nuni font-normal pb-4.5'>Reporting</li>
                                <li className='text-[16px] text-white font-nuni font-normal pb-4.5'>Documentation</li>
                                <li className='text-[16px] text-white font-nuni font-normal pb-4.5'>Support Policy</li>
                                <li className='text-[16px] text-white font-nuni font-normal pb-4.5'>Privacy</li>

                            </ul>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="">
                            <div className="flex items-center pb-4 gap-x-2">
                                <img src={Logo} alt="" />
                                <h3 className='text-[28px] text-white font-pop font-bold  '>Quarter</h3>
                            </div>
                            <p className='text-[16px]  text-white font-nuni font-normal pb-6 pr-15'>We are a team of designers and developers <span className=''>create high quality Magento, Prestashop, </span></p>
                            <div className="flex items-center gap-x-3 pb-8.5">
                                <CiLocationOn className='text-white font-bold text-[20px]' />
                                <p className='text-[16px] text-white font-nuni font-normal'>254 Lillian Blvd, Holbrook</p>
                            </div>
                            <div className="relative">
                                <input className='bg-white text-[#42518B] text-[16px] font-nuni font-normal py-3.5 pl-[17px] w-[317px] outline-0' type="text" placeholder=' Enter email address' />
                                <button className='text-white text-[16px] font-nuni font-normal py-2.5 px-5.5 bg-comon absolute top-1 right-19.5'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="absolute cursor-pointer -top-15 left-1/2 transform -translate-x-1/2 w-[1291px]">
               <img className='w-full' src={Top} alt="" />
            </div>
        </div>
    )
}

export default Footer