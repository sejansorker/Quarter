import React from 'react'
import Container from '../components/Container'
import For from "../assets/for.png"
import Goo from "../assets/goo.png"
import Goo1 from "../assets/goo1.png"
import Slider from 'react-slick';
import { FaArrowLeftLong, FaArrowRightLong, FaCheck, FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa6';
import Zoom1 from "../assets/zoom1.png"
import { IoLocation } from 'react-icons/io5'
import P1 from "../assets/p1.png"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import P4 from "../assets/p4.png"
import P5 from "../assets/p5.png"
import P6 from "../assets/p6.png"
import P7 from "../assets/p7.png"
import P8 from "../assets/p8.png"
import Guru from "../assets/guru.png"
import Comment from "../assets/comment.png"
import Sada from "../assets/sada.png"
import { CiStar } from 'react-icons/ci'
import Lee from "../assets/lee1.png"
import { IoIosSearch } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { BiSolidMessageRounded } from 'react-icons/bi'
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='h-12 w-12 bg-white hover:bg-comon hover:text-white cursor-pointer z-10 text-comon duration-300 absolute top-1/2 transform -translate-1/2 -right-12 flex justify-center items-center rounded-full ' onClick={onClick}
        ><FaArrowRightLong /> </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='h-12 w-12 bg-white hover:bg-comon hover:text-white cursor-pointer z-10 text-comon duration-300 absolute top-1/2 transform -translate-1/2 left-0 flex justify-center items-center rounded-full ' onClick={onClick}
        > <FaArrowLeftLong /></div>
    );
}
const Propertydetails = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className='bg-[url(/a_banner.png)] bg-coveer bg-center py-26.5'>
                <Container>
                    <div className="">
                        <h2 className='text-[#0A2C3D] text-[48px] font-pop font-bold pb-2'>Properties Details</h2>
                        <nav class="flex" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li class="inline-flex items-center">
                                    <a href="#" class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" /></svg>
                                        Pages
                                    </a>
                                </li>
                                <li>
                                    <div class="flex items-center space-x-1.5">
                                        <svg class="w-3.5 h-3.5 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                                        <a href="#" class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">Properties Details</a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </Container>
            </div>
            <div className="bg-[#B4B4C2] mb-30">
                <Container>
                    <div className="w-238 mx-auto">
                        <Slider {...settings}>
                            <div className=" mx-auto h-126">
                                <img className='w-full' src={For} alt="" />
                            </div>
                            <div className=" mx-auto h-126">
                                <img className='w-full' src={Goo} alt="" />
                            </div>
                            <div className=" mx-auto h-126">
                                <img className='w-full' src={Goo1} alt="" />
                            </div>
                        </Slider>

                    </div>

                </Container>
            </div>
            <div className="mb-49">
                <Container>
                    <div className="flex gap-x-5">
                        <div className="w-2/3">
                            <div className="">
                                <div className="flex items-center justify-between pb-8">
                                    <div className="flex items-center">
                                        <button className='text-[14px] font-normal font-pop text-white py-[3px] px-6 bg-[#F58727]'>FEATURED</button>
                                        <button className='text-[14px] font-normal font-pop text-white py-[3px] px-2.5 bg-[#B13BFF] ml-5'>FOR RENT</button>
                                        <h6 className='text-[13px] text-[#647589] font-nuni font-bold pl-10'>July 27, 2021</h6>
                                        <p className='text-[13px] text-[#647589] font-nuni font-bold pl-7.5'>4 Comments</p>
                                    </div>
                                    <div className="">
                                        <img src={Zoom1} alt="" />
                                    </div>
                                </div>
                                <div className="flex justify-between pb-9">
                                    <div className="">
                                        <h3 className='text-[36px] font-bold text-[#0A2C3D] font-pop'>Diamond Manor Apartment</h3>
                                        <div className="flex items-center gap-x-1.5 ">
                                            <IoLocation className='text-comon' />
                                            <p className='text-[#133344] text-[14px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                                        </div>
                                    </div>
                                    <h3 className='font-pop font-bold pt-2 text-comon text-[22px]'>$ 349,00/ <span className='text-[16px]'>Month</span></h3>
                                </div>
                                <div className=" ">
                                    <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3'>Description</h4>
                                    <p className='pt-4.5 pb-9 text-[#5C727D] font-nuni font-normal leading-7.5'>Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</p>
                                    <p className='text-[#5C727D] font-nuni font-normal leading-7'>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p>
                                    <div className="py-12.5">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3  pb-6'>Property Detail</h4>
                                        <div className=" pl-10 bg-[#F4F4F8] flex items-center">
                                            <ul className='py-10 pr-35'>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Property ID: <span className='font-bold text-[#133344]'>HZ29</span></li>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Home Area: <span className='font-bold text-[#133344]'>120 sqft</span></li>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Rooms: <span className='font-bold text-[#133344]'>7</span></li>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Baths: <span className='font-bold text-[#133344]'>2</span></li>
                                                <li className='text-[14px] font-pop font-normal text-[#5C727D]'>Year built: <span className='font-bold text-[#133344]'>1992</span></li>

                                            </ul>
                                            <ul className='py-10 pl-11.5 border-l-1 border-[#8B8BAE]'>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Lot Area: <span className='font-bold text-[#133344]'>HZ29</span></li>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Lot dimensions: <span className='font-bold text-[#133344]'>120 sqft</span></li>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Beds: <span className='font-bold text-[#133344]'>7</span></li>
                                                <li className='text-[14px] pb-5.5 font-pop font-normal text-[#5C727D]'>Price: <span className='font-bold text-[#133344]'>2</span></li>
                                                <li className='text-[14px] font-pop font-normal text-[#5C727D]'>Property Status: <span className='font-bold text-[#133344]'>For Sale</span></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pb-[57px]">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3'>Facts and Features</h4>
                                        <div className="flex items-center justify-between">
                                            <div className="">
                                                <div className="flex gap-2 items-center pb-8 pt-4.5">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P1} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Living Room</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 items-center  ">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P2} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Bathroom</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="flex gap-2 items-center pb-8 pt-4.5">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P2} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Garage</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 items-center  ">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P6} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Gym Area</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="flex gap-2 items-center pb-8 pt-4.5">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P3} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Dining Area</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 items-center  ">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P7} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Garden</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="flex gap-2 items-center pb-8 pt-4.5">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P4} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Bedroom</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 items-center  ">
                                                    <div className="h-10 w-10 bg-[#f5872723] flex justify-center items-center">
                                                        <img src={P8} alt="" />
                                                    </div>
                                                    <div className="text-[#133344] font-medium font-pop text-[15px]">
                                                        <h6>Parking</h6>
                                                        <p className='text-[#5C727D] text-[12px] font-light font-nuni'>20 x 16 sq feet</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-13">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3 pb-6'>From Our Gallery</h4>
                                        <div className="flex gap-x-5">
                                            <div className="w-[370px] ">
                                                <img className='h-44 w-full' src={For} alt="" />
                                                <img className='h-[213px] pt-7 w-full' src={Goo} alt="" />
                                            </div>
                                            <div className=" w-[370px]">
                                                <img className='h-[389px]' src={Goo1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-13">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3 pb-4.5'>From Our Gallery</h4>
                                        <div className="flex gap-x-26.5 items-center">
                                            <ul>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Air Conditioning</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Gym</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Microwave</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' />Swimming Pool</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> WiFi</li>
                                            </ul>
                                            <ul>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' />Barbeque</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Recreation</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Wine Cellar</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' />Basketball Cout</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Fireplace</li>
                                            </ul>
                                            <ul>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Refrigerator</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Window Coverings</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Washer</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' />24x7 Security</li>
                                                <li className='flex pb-6 items-center gap-x-2 text-[16px] text-[#5C727D] font-normal font-pop'> <FaCheck className='h-[15px] w-[15px] bg-comon text-white flex justify-center items-center text-[12px]' /> Indoor Game</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pb-13">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3 pb-4.5'>Location</h4>
                                        <div className="">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13885.245554373523!2d90.36556224967002!3d23.747030308759633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e1!3m2!1sen!2sbd!4v1764941016243!5m2!1sen!2sbd" width="670" height="360" allowfullscreen="" loading="lazy" ></iframe>
                                        </div>
                                    </div>
                                    <div className="pb-13">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3 pb-4.5'>Floor Plans</h4>
                                        <ul className='flex items-center gap-x-12'>
                                            <li className='text-[18px] font-nuni font-bold text-[#0A2C3D] hover:text-comon hover:border-b-2 hover:border-comon w-fit h-7'>First Floor</li>
                                            <li className='text-[18px] font-nuni font-bold text-[#0A2C3D] hover:text-comon hover:border-b-2 hover:border-comon w-fit h-7'>Second Floor</li>
                                            <li className='text-[18px] font-nuni font-bold text-[#0A2C3D] hover:text-comon hover:border-b-2 hover:border-comon w-fit h-7'>First Floor</li>
                                            <li className='text-[18px] font-nuni font-bold text-[#0A2C3D] hover:text-comon hover:border-b-2 hover:border-comon w-fit h-7'>First Floor</li>
                                        </ul>
                                        <div className="pt-14">
                                            <img className='w-[772px] h-[530px] ' src={Guru} alt="" />
                                        </div>
                                    </div>
                                    <div className="pb-13">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3 pb-4.5'>Property Video</h4>
                                        <div className="">
                                            <iframe width="770" height="479" src="https://www.youtube.com/embed/yzRdQv9qQ_g?si=BOpUMCY2k9Q_xtcb"   ></iframe>
                                        </div>
                                    </div>
                                    <div className="pb-13">
                                        <img src={Comment} alt="" />
                                    </div>
                                    <div className="py-[53px] px-8.5 w-[709px] bg-[#F4F4F8]">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3 pb-4.5'>Write A Review</h4>
                                        <div className="">
                                            <input className='w-[285px] py-2 pl-2 outline-0 text-[#133344] text-[15px] font-nuni font-normal border-b-2 border-[#CED4D8]' type="text" placeholder='Your Name*' />
                                            <input className='w-[285px] py-2 pl-2 outline-0 text-[#133344] text-[15px] font-nuni font-normal border-b-2 border-[#CED4D8] ml-17.5 ' type="text" placeholder='Email Address ' />
                                            <textarea className='mt-16 outline-0 text-[#133344] text-[15px] font-nuni font-normal border-b-2 border-[#CED4D8] pb-23 w-[640px] pl-2' placeholder='Write Comment' name="" id=""></textarea>
                                            <div className="flex items-center gap-x-1 mt-10">
                                                <input type="checkbox" className='h-3 w-3' />
                                                <p className='text-[#133344] text-[14px] font-nuni font-normal'>Save my name, email, and website in this browser for the next time I comment.</p>
                                            </div>
                                            <button className='text-white text-[16px] font-nuni font-normal bg-comon py-3 px-8.5 mt-15 cursor-pointer'>Post Comment</button>
                                        </div>
                                    </div>
                                    <div className="pt-26">
                                        <h4 className='text-[22px] relative after:absolute after:top-[7px] after:left-0 after:h-4.5 after:w-0.5 after:bg-comon  font-bold text-[#133344] font-pop pl-3 pb-4.5'>related Properties</h4>
                                        <div className="flex gap-x-7.5">
                                            <div className="w-[370px]">
                                                <div className="shadow-2xl">
                                                    <img className='w-full' src={For} alt="" />
                                                    <div className="pl-5.5">
                                                        <h5 className='text-comon text-[15px] pt-4.5 font-bold font-nuni'>For Rent</h5>
                                                        <h3 className='pt-1.5 pb-2.5 text-[#0A2C3D] text-[20px] font-bold font-pop'>New Apartment Nice View</h3>
                                                        <div className="flex items-center gap-x-1 pb-4.5">
                                                            <IoLocation className='text-comon' />
                                                            <p className='text-[#0A2C3D] text-[12px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                                                        </div>
                                                        <div className="text-[#5C727D] text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3450</span> Sq Ft</div>
                                                        <img className='py-5' src={Zoom1} alt="" />

                                                    </div>
                                                    <div className="">
                                                        <hr className='text-[#DEDEDE]' />
                                                        <h3 className='pt-2.5 pb-3 pl-5.5 text-[18px] text-comon font-pop font-bold'>$ 349,00/Month</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[370px]">
                                                <div className="shadow-2xl">
                                                    <img className='w-full h-63.5' src={Goo} alt="" />
                                                    <div className="pl-5.5">
                                                        <h5 className='text-comon text-[15px] pt-4.5 font-bold font-nuni'>For Sale</h5>
                                                        <h3 className='pt-1.5 pb-2.5 text-[#0A2C3D] text-[20px] font-bold font-pop'>House Highland Ave Angeles</h3>
                                                        <div className="flex items-center gap-x-1 pb-4.5">
                                                            <IoLocation className='text-comon' />
                                                            <p className='text-[#0A2C3D] text-[12px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                                                        </div>
                                                        <div className="text-[#5C727D] text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3450</span> Sq Ft</div>
                                                        <img className='py-5' src={Zoom1} alt="" />
                                                    </div>
                                                    <div className="">
                                                        <hr className='text-[#DEDEDE]' />
                                                        <h3 className='pt-2.5 pb-3 pl-5.5 text-[18px] text-comon font-pop font-bold'>$ 349,00/Month</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="">
                                <div className="py-10 pl-12.5 pr-17.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)] flex justify-center ">
                                    <div className="text-center">
                                        <div className="flex justify-center">
                                            <img className='w-22.5 h-22.5' src={Lee} alt="" />
                                        </div>
                                        <h4 className='text-[22px] font-bold font-pop text-[#0A2C3D] pt-5'>Jehnny Rose</h4>
                                        <h5 className='text-[12px] text-[#5C727D] font-nuni font-normal pb-2.5'>Traveller/Photographer</h5>
                                        <p className='flex font-nuni font-normal items-center justify-center text-comon '><CiStar /> <CiStar /> <CiStar /> <CiStar /> <span className='text-[#5C727D] text-[12px]'>(1 Review)</span></p>
                                        <p className='text-[14px] text-[#5C727D] font-nuni font-normal pt-4 pb-9 leading-6.5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                        <div className="flex items-center gap-x-6 justify-center">
                                            <div className="h-7 w-7 bg-white hover:bg-comon flex justify-center items-center rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] text-black hover:text-white duration-200">
                                                <FaFacebookF />
                                            </div>
                                            <div className="h-7 w-7 bg-white hover:bg-comon flex justify-center items-center rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] text-black hover:text-white duration-200">
                                                <FaTwitter />
                                            </div>
                                            <div className="h-7 w-7 bg-white hover:bg-comon flex justify-center items-center rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] text-black hover:text-white duration-200">
                                                <FaInstagram />
                                            </div>
                                            <div className="h-7 w-7 bg-white hover:bg-comon flex justify-center items-center rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] text-black hover:text-white duration-200">
                                                <FaGooglePlusG />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-9.5 px-6 my-6.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                                    <h3 className='relative text-[#133344] text-[20px]  font-bold font-pop after:absolute after:top-0.5 after:left-0 after:h-5 after:w-0.5 after:bg-comon pb-4 pl-3'>Search Bar</h3>
                                    <div className="relative">
                                        <input className='border-[1px]  border-[#5c727d9c] w-full py-3.5 pl-3.5 text-[#5C727D] font-nuni font-normal text-[14px] outline-0' type="text" placeholder='Search Blogs' />
                                        <button className='w-[69px] h-12.5 bg-comon flex text-white text-[20px] justify-center items-center absolute top-0 right-0 '><IoIosSearch /></button>
                                    </div>
                                </div>
                                <div className="pt-11 pb-12 px-6 mb-7 bg-[#F4F4F8]">
                                    <h3 className='text-[#133344] text-[20px]  font-bold font-pop pb-7'>Drop Messege For Book</h3>
                                    <form action="">
                                        <div className="relative mb-5">
                                            <input
                                                type="text"
                                                required
                                                className="peer w-full py-3 pl-3 bg-white outline-0"
                                            />
                                            <label
                                                className=" absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 pointer-events-none peer-focus:hidden peer-valid:hidden "
                                            >
                                                <FaUser />
                                                Your Name*
                                            </label>
                                        </div>
                                        <div className="relative mb-5">
                                            <input
                                                type="text"
                                                required
                                                className="peer w-full py-3 pl-3 bg-white outline-0"
                                            />
                                            <label
                                                className=" absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 pointer-events-none peer-focus:hidden peer-valid:hidden "
                                            >
                                                <MdEmail />
                                                Your Email*
                                            </label>
                                        </div>
                                        <div className="relative mb-7.5">
                                            <textarea  required  rows="4"  className="peer w-full pt-4 pb-2 pl-3 bg-white outline-0 resize-none"
                                            ></textarea>
                                            <label className="absolute left-2 top-2 flex  items-center gap-2 text-gray-400 pointer-events-none  peer-focus:hidden peer-valid:hidden"
                                            >
                                                <BiSolidMessageRounded />
                                                Write Message
                                            </label>
                                        </div>
                                          <button className='text-[16px] text-white bg-comon font-normal font-nuni w-full py-3 cursor-pointer'>Send Messege</button>
                                    </form>
                                </div>
                                <div className="py-9.5 pr-14 pl-6 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                                    <h3 className='relative text-[#133344] text-[20px]  font-bold font-pop after:absolute after:top-0.5 after:left-0 after:h-5 after:w-0.5 after:bg-comon pb-4 pl-3'>Latest Properties</h3>
                                    <div className="flex items-center gap-x-5.5 pb-[17px]">
                                        <div className="">
                                            <img className='w-24 h-20.5' src={Goo} alt="" />
                                        </div>
                                        <div className="">
                                            <h5 className='font-bold font-nuni text-[14px] text-comon'>$320,000</h5>
                                             <h4 className='font-bold font-nuni text-[14px] text-[#133344] pt-1'>Neue Dimensionen im Schrägdach</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-5.5 pb-[17px]">
                                        <div className="">
                                            <img className='w-24 h-20.5' src={Goo1} alt="" />
                                        </div>
                                        <div className="">
                                            <h5 className='font-bold font-nuni text-[14px] text-comon'>$330,000</h5>
                                             <h4 className='font-bold font-nuni text-[14px] text-[#133344] pt-1'>Neue Dimensionen im Schrägdach</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-5.5 pb-[17px]">
                                        <div className="">
                                            <img className='w-24 h-20.5' src={Goo} alt="" />
                                        </div>
                                        <div className="">
                                            <h5 className='font-bold font-nuni text-[14px] text-comon'>$350,000</h5>
                                             <h4 className='font-bold font-nuni text-[14px] text-[#133344] pt-1'>Neue Dimensionen im Schrägdach</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-5.5 ">
                                        <div className="">
                                            <img className='w-24 h-20.5' src={Goo1} alt="" />
                                        </div>
                                        <div className="">
                                            <h5 className='font-bold font-nuni text-[14px] text-comon'>$400,000</h5>
                                             <h4 className='font-bold font-nuni text-[14px] text-[#133344] pt-1'>Neue Dimensionen im Schrägdach</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10.5 my-6 pb-10 px-6 bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                                    <h3 className='relative text-[#133344] text-[20px]  font-bold font-pop after:absolute after:top-0.5 after:left-0 after:h-5 after:w-0.5 after:bg-comon pb-4 pl-3'>Top Catagories</h3>
                                    <div className="mb-4  rounded-[5px] bg-[rgba(255,89,60,0.06)] py-2.5 pl-4.5 ">
                                        <h5 className='text-comon text-[14px] font-nuni font-normal'>Apartment (14)</h5>
                                    </div>
                                    <div className="mb-4  rounded-[5px] bg-[rgba(255,89,60,0.06)] py-2.5 pl-4.5 ">
                                        <h5 className='text-comon text-[14px] font-nuni font-normal'>Picture Stodio (14)</h5>
                                    </div>
                                    <div className="mb-4  rounded-[5px] bg-[rgba(255,89,60,0.06)] py-2.5 pl-4.5 ">
                                        <h5 className='text-comon text-[14px] font-nuni font-normal'>Office (14)</h5>
                                    </div>
                                    <div className="mb-4  rounded-[5px] bg-[rgba(255,89,60,0.06)] py-2.5 pl-4.5 ">
                                        <h5 className='text-comon text-[14px] font-nuni font-normal'>Luxary Vilas (14)</h5>
                                    </div>
                                    <div className=" rounded-[5px] bg-[rgba(255,89,60,0.06)] py-2.5 pl-4.5 ">
                                        <h5 className='text-comon text-[14px] font-nuni font-normal'>Duplex House (14)</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Propertydetails