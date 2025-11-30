import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci'
const Navbar = () => {
  return (
    <div className='shadow-[0_1px_1px_rgba(0,0,0,0.1)]'>
      <Container>
        <div className="flex items-center  py-7.5  ">
          <div className="w-1/3">
            <div className="">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="w-2/3">
            <div className="flex items-center justify-end gap-x-15">
              <div className="">
                <ul className='flex items-center gap-x-15 text-[14px] font-bold text-[#0A2C3D]'>
                  <li>Home</li>
                  <li>Properties</li>
                  <li>Property</li>
                  <li>Blog</li>
                  <li>Pages</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-2.5 shadow-lg ">
                  <CiUser className='text-[18px] hover:text-[#FF5A3C] font-bold text-[#0A2C3D]' />
                </div>
                <div className="px-3 py-2.5 shadow-lg">
                  <CiHeart className='text-[18px] hover:text-[#FF5A3C] font-bold text-[#0A2C3D]' />
                </div>
                <div className="px-3 py-2.5 shadow-lg">
                  <CiSearch className='text-[18px] hover:text-[#FF5A3C] font-bold text-[#0A2C3D]' />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Navbar