import React from 'react'
import Container from './Container'
import Ic1 from "../assets/ic1.png"
import Ic2 from "../assets/ic2.png"
import Ic3 from "../assets/ic3.png"
import Ic4 from "../assets/ic4.png"
const Counter = () => {
   return (
      <div className='bg-[#F6F5FC] my-28'>
         <Container>
            <div className="flex">
               <div className="w-1/4 relative">
                  <div className="py-[79px] after:absolute after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-10 after:w-1 hover:after:bg-[#F58727] text-center hover:bg-white duration-300 ease-in-out before:absolute before:top-[50%] before:transform before:translateY-[-50%]  before:right-0 before:h-10 before:w-1 hover:before:bg-[#F58727]">
                     <div className="flex justify-center pb-8">
                        <img src={Ic1} alt="" />
                     </div>
                     <h3 className='text-[42px] font-pop font-bold text-black'>560</h3>
                     <p className='text-[20px] text-[#5C727D] font-bold font-nuni'>Total Area Sq</p>
                  </div>
               </div>
               <div className="w-1/4 relative">
                  <div className="py-[77px] after:absolute after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-10 after:w-1 hover:after:bg-[#F58727] text-center hover:bg-white duration-300 ease-in-out before:absolute before:top-[50%] before:transform before:translateY-[-50%]  before:right-0 before:h-10 before:w-1 hover:before:bg-[#F58727]">
                     <div className="flex justify-center pb-8">
                        <img src={Ic2} alt="" />
                     </div>
                     <h3 className='text-[42px] font-pop font-bold text-black'>197</h3>
                     <p className='text-[20px] text-[#5C727D] font-bold font-nuni'>Apartments Sold</p>
                  </div>
               </div>
               <div className="w-1/4 relative">
                  <div className="py-[75px] after:absolute after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-10 after:w-1 hover:after:bg-[#F58727] text-center hover:bg-white duration-300 ease-in-out before:absolute before:top-[50%] before:transform before:translateY-[-50%]  before:right-0 before:h-10 before:w-1 hover:before:bg-[#F58727]">
                     <div className="flex justify-center pb-8">
                        <img src={Ic3} alt="" />
                     </div>
                     <h3 className='text-[42px] font-pop font-bold text-black'>268</h3>
                     <p className='text-[20px] text-[#5C727D] font-bold font-nuni'>Total Constructions</p>
                  </div>
               </div>
               <div className="w-1/4 relative">
                  <div className="py-[76px] after:absolute after:top-[50%] after:transform after:translateY-[-50%]  after:left-0 after:h-10 after:w-1 hover:after:bg-[#F58727] text-center hover:bg-white duration-300 ease-in-out before:absolute before:top-[50%] before:transform before:translateY-[-50%]  before:right-0 before:h-10 before:w-1 hover:before:bg-[#F58727]">
                     <div className="flex justify-center pb-8">
                        <img src={Ic4} alt="" />
                     </div>
                     <h3 className='text-[42px] font-pop font-bold text-black'>340</h3>
                     <p className='text-[20px] text-[#5C727D] font-bold font-nuni'>Apartio Rooms</p>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}

export default Counter