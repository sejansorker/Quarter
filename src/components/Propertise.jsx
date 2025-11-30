import React from 'react'
import Container from './Container'
import Img from "../assets/img.png"
import Img2 from "../assets/img2.png"
import Img3 from "../assets/img3.png"
import Img1 from "../assets/img1.png"
import Ved from "../assets/video.png"
import Cam from "../assets/camera.png"
import Bedd from "../assets/bed.png"
import Will from "../assets/will.png"
import Zoom from "../assets/zoom.png"
import { FaLocationDot } from 'react-icons/fa6'
import Slider from 'react-slick'
const Propertise = () => {
    const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };
    return (
        <div className='py-28'>
            <Container>
                <div className="text-center">
                    <button className='py-1 px-6 text-[16px] text-comon font-bold font-nuni bg-[#fb52522f] rounded-[30px]'>Properties</button>
                    <h2 className='text-[48px] font-bold font-pop pt-4 pb-9'>Featured Listings</h2>
                </div>
            </Container>
            <div id='first' className="px-10 ">
                 <Slider {...settings} >
                  <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img2} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>New Apartment Nice View</h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img3} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>Light and modern </h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>Comfortable Apartment</h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img1} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>New Apartment Nice View</h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img2} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>New Apartment Nice View</h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img3} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>Light and modern </h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>Comfortable Apartment</h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="!w-[96%]">
                    <div className="">
                        <div className="relative group">
                            <img className='w-full' src={Img1} alt="" />
                            <div className="flex justify-between bg-[#00000049] py-2.5 px-6 absolute bottom-0 left-0 w-full">
                                <h4 className='flex items-center gap-x-1 text-[14px] text-white font-normal font-nuni'><FaLocationDot /> Belmont Gardens, Chicago</h4>
                                <div className="flex">
                                    <img src={Cam} alt="" />
                                    <img src={Ved} alt="" />
                                </div>
                            </div>
                            <div className="absolute top-5 right-5">
                                <button className='bg-[#77C720] px-4 py-1 text-white text-[12px] font-pop font-medium cursor-pointer group-hover:bg-[#FF6824] duration-300 ease-in-out'>FOR RENT</button>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className=" pl-6 pb-5 border-b-1 border-[#C1C1C1]">
                                <h5 className='text-comon text-[18px] font-medium font-pop pt-5'>$ 349,00/ <span className='text-[15px]'>Month</span></h5>
                                <h4 className='text-[22px] font-bold font-pop pt-1.5 pb-2.5'>New Apartment Nice View</h4>
                                <p className='text-[#5C727D] text-[13px] font-nuni font-normal pr-15 pb-6'>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                <img src={Bedd} alt="" />


                            </div>
                            <div className="flex justify-between pt-4 pb-6 px-6 items-center">
                                <div className="flex items-center">
                                    <img className='w-10' src={Will} alt="" />
                                    <div className="pl-2.5">
                                        <h3 className='text-[14px] font-pop font-medium'>William Seklo</h3>
                                        <p className='text-[#5C727D] text-[9px] font-nuni font-normal'>Estate Agents</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Zoom} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  
                
                
                
                 </Slider>

                
            </div>
        </div>
    )
}

export default Propertise