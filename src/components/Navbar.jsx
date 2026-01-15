import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='shadow-[0_1px_1px_rgba(0,0,0,0.1)] sticky top-0 z-50 bg-white lg:py-7.5 '>
      <div className={`${show ? "": ""} lg:py-0 py-5`}>
        <Container>
        <div className="lg:flex items-center   ">
          <div className="lg:w-1/3 w-full">
            <div className="">
              <img className='' src={Logo} alt="" />
            </div>
          </div>
          <div className={`lg:w-2/3 w-full  overflow-hidden`}>
            <div className={`lg:flex duration-500 ease-in-out items-center justify-end gap-x-15 ${show ? "bg-[rgba(0,0,0,0.08)] lg:-0 pb-5": "lg:mt-0 mt-[-330px] pt-0"}`}>
              <div className="">
                <ul className='lg:flex text-center items-center gap-x-14 lg:text-[14px] text-[12px] font-bold text-[#0A2C3D] lg:pt-0 pt-4 lg:mt-0 mt-4 lg:bg-transparent '>
                  <Link to={"/"}><li className='cursor-pointer lg:pb-0 pb-3'>Home</li></Link>
                  <Link to={"/about"}> <li className='cursor-pointer lg:pb-0 pb-3'>Properties</li></Link>
                  <Link to={"/property"}><li className='cursor-pointer lg:pb-0 pb-3'>Property</li></Link>
                  <Link to={"/blog"}> <li className='cursor-pointer lg:pb-0 pb-3'>Blog</li></Link>
                  <Link to={"/pages"}> <li className='cursor-pointer lg:pb-0 pb-3'>Pages</li></Link>
                  <Link to={"/contact"}><li className='cursor-pointer lg:pb-0 pb-3'>Contact</li></Link>
                </ul>
              </div>
              <div className="flex justify-center lg:mt-0 mt-3 items-center gap-x-2">
                <div className="lg:px-3 px-1.5 lg:py-2.5 py-1.5 shadow-lg ">
                  <CiUser className='text-[18px] cursor-pointer hover:text-comon font-bold text-[#0A2C3D]' />
                </div>
                <div className="lg:px-3 px-1.5 lg:py-2.5 py-1.5 shadow-lg">
                  <CiHeart className='text-[18px] cursor-pointer hover:text-comon font-bold text-[#0A2C3D]' />
                </div>
                <div className="lg:px-3 px-1.5 lg:py-2.5 py-1.5 shadow-lg">
                  <CiSearch className='text-[18px] cursor-pointer hover:text-comon font-bold text-[#0A2C3D]' />
                </div>
              </div>
            </div>
          </div>
            <div onClick={()=>setShow(!show)} className="lg:hidden absolute top-9.5 right-3">
              {show ? <RxCross2 />:   <FaBars />}
               </div>
        </div>
      </Container>
      </div>
    </div>
  )
}

export default Navbar