import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci'
const Navbar = () => {
  return (
    <div className='shadow-[0_1px_1px_rgba(0,0,0,0.1)] sticky top-0 z-50 bg-white'>
      <Container>
        <div className="flex items-center py-7.5">
          <div className="w-1/3">
            <div className="">
              <img className='' src={Logo} alt="" />
            </div>
          </div>
          <div className="w-2/3">
            <div className="flex items-center justify-end gap-x-15">
              <div className="">
                <ul className='flex items-center gap-x-15 text-[14px] font-bold text-[#0A2C3D]'>
                  <li className='cursor-pointer'>Home</li>
                  <li className='cursor-pointer'>Properties</li>
                  <li className='cursor-pointer'>Property</li>
                  <li className='cursor-pointer'>Blog</li>
                  <li className='cursor-pointer'>Pages</li>
                  <li className='cursor-pointer'>Contact</li>
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-2.5 shadow-lg ">
                  <CiUser className='text-[18px] cursor-pointer hover:text-comon font-bold text-[#0A2C3D]' />
                </div>
                <div className="px-3 py-2.5 shadow-lg">
                  <CiHeart className='text-[18px] cursor-pointer hover:text-comon font-bold text-[#0A2C3D]' />
                </div>
                <div className="px-3 py-2.5 shadow-lg">
                  <CiSearch className='text-[18px] cursor-pointer hover:text-comon font-bold text-[#0A2C3D]' />
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