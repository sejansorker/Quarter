import React from 'react'
import Container from './Container'
import One from "../assets/one.png"
import Two from "../assets/two.png"
import Three from "../assets/three.png"
import To2 from "../assets/to2.png"
import To3 from "../assets/to3.png"
const Today = () => {
  return (
    <div className='pb-27'>
        <Container>
            <div className="flex">
                <div className="w-1/2">
                <div className="">
                    <button className='py-1 px-6 text-[16px] text-comon font-bold font-nuni bg-[#fb52522f] rounded-[30px]'>About Us</button>
                     <h2 className='text-[44px] font-bold font-pop pt-4 pb-2'>Today Sells Properties</h2>
                      <p className='text-[#5C727D] text-[16px] font-normal font-nuni pb-6 pr-20'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                      <ul className=''>
                        <li className='text-[#0A2C3D] relative text-[16px] font-bold font-nuni  pl-6 after:absolute  after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-0.5 after:w-3 after:bg-comon'>Live Music Cocerts at Luviana</li>
                        <li className='text-[#0A2C3D] relative text-[16px] font-bold font-nuni  pl-6 after:absolute  after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-0.5 after:w-3 after:bg-comon py-4.5'>Our SecretIsland Boat Tour is Just for You</li>
                        <li className='text-[#0A2C3D] relative text-[16px] font-bold font-nuni  pl-6 after:absolute  after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-0.5 after:w-3 after:bg-comon'>Live Music Cocerts at Luviana</li>
                        <li className='text-[#0A2C3D] relative text-[16px] font-bold font-nuni  pl-6 after:absolute  after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-0.5 after:w-3 after:bg-comon mt-4.5'>Live Music Cocerts at Luviana</li>
                      </ul>
                     <div className="">
                         <img className='py-8' src={To3} alt="" />
                     </div>
                     <div className="flex">
                       <img src={One} alt="" />
                       <img src={Two} alt="" />
                       <img src={Three} alt="" />
                     </div>
                </div>
                </div>
                <div className="w-1/2">
                <div className="">
                    <img src={To2} alt="" />
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Today