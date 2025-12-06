import React from 'react'
import Ban from "../assets/ban1.png"
import Slider from "react-slick";
import Container from './Container'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { FaSlidersH } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="h-12 w-12 bg-white hover:bg-comon hover:text-white cursor-pointer z-10 text-comon duration-300 absolute top-90 -right-25 flex justify-center items-center"
      onClick={onClick} >
      <FaArrowRightLong />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="h-12 w-12  bg-white hover:bg-comon hover:text-white cursor-pointer z-10 text-comon duration-300 absolute top-90 -left-30  flex justify-center items-center"
      onClick={onClick}>
      <FaArrowLeftLong />
    </div>
  );
}
const Banner = () => {
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
    <>
      <div className="bg-[url(/ban2.png)] bg-cover bg-center w-full mb-0 relative ">
        <Container >
          <Slider {...settings}>
            <div className="pt-24 pb-[172px]">
              <img src={Ban} alt="" />
            </div>
            <div className="pt-24 pb-[172px]">
              <img src={Ban} alt="" />
            </div>
            <div className="pt-24 pb-[172px]">
              <img src={Ban} alt="" />
            </div>
            <div className="pt-24 pb-[172px]">
              <img src={Ban} alt="" />
            </div>
          </Slider>
        </Container>
        <div className="absolute -bottom-8   left-0 w-full">
          <Container>
            <div className="pt-12 pb-9 bg-white shadow-lg flex items-center">
              <select name="" id="" className='w-[267px] border-2 border-comon ml-8.5 p-2.5 text-[#5C5B7B] font-bold font-nuni'>
                <option value="" className=''>Choose Area</option>
              </select>
              <select name="" id="" className='w-[267px] border-2 border-comon ml-8.5 p-2.5 text-[#5C5B7B] font-bold font-nuni'>
                <option value="" className=''>Property Status</option>
              </select>
              <select name="" id="" className='w-[267px] border-2 border-comon ml-8.5 p-2.5 text-[#5C5B7B] font-bold font-nuni'>
                <option value="" className=''>Property Type</option>
              </select>
              <div className="px-6.5"><FaSlidersH /></div>
              <div className="">
                <button className='py-3.5 px-13 bg-comon text-[14px] text-white font-medium - font-pop'>FIND NOW</button>
              </div>
            </div>
          </Container>
        </div>
      </div>


    </>
  )
}

export default Banner