import React, { useState } from 'react'
import Container from '../components/Container'
import { FaThList } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import For from "../assets/for.png"
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from 'react-icons/io'
import { IoLocation } from 'react-icons/io5'
import Zoom1 from "../assets/zoom1.png"
import Goo from "../assets/goo.png"
import Goo1 from "../assets/goo1.png"
import Goo2 from "../assets/goo2.png"
import Goo3 from "../assets/goo3.png"
import Goo4 from "../assets/goo4.png"
import { Link } from 'react-router-dom'
const Property = () => {
  const [filter, setFilter] = useState(false)
  const [filter1, setFilter1] = useState(false)
  const [filter2, setFilter2] = useState(false)
  const [filter3, setFilter3] = useState(false)
  const [filter4, setFilter4] = useState(false)
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(8000);
  const [gried, setGried] = useState("hello")
  return (
    <div>
      <div className='bg-[url(/a_banner.png)] bg-coveer bg-center py-26.5'>
        <Container>
          <div className="">
            <h2 className='text-[#0A2C3D] text-[48px] font-pop font-bold pb-2'>Properties List</h2>
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
                    <a href="#" class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">Properties List</a>
                  </div>
                </li>

              </ol>
            </nav>
          </div>
        </Container>
      </div>
      {/* Advance  strat */}
      <div className="mt-30 mb-10">
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-1/3">
              <h2 className='font-pop font-bold text-[22px] text-[#0A2C3D] pb-2'>Advance Information</h2>
              <p className='text-[12px] font-nuni font-normal text-[#5C727D]'>About 9,620 results (0.62 seconds) </p>
            </div>
            <div className="w-2/3 flex justify-end">
              <div className="flex items-center gap-x-[23px]">
                <div className="flex items-center gap-x-[11px]">
                  <h4 className='text-[#0A2C3D] font-pop font-normal text-[16px]'>Per Page:</h4>
                  <select className='border-[#9C9FB7]! border-2 outline-0 py-[5px] px-2 text-[12px] font-nuni font-normal text-[#9C9FB7]' name="" id="">
                    <option value="">14</option>
                    <option value="">12</option>
                    <option value="">10</option>
                  </select>
                </div>
                <div className="flex items-center gap-x-[11px]">
                  <h4 className='text-[#0A2C3D] font-pop font-normal text-[16px]'>Sort By:</h4>
                  <select className='border-[#9C9FB7]! border-2 outline-0 w-27 flex justify-center py-1.5 pl-4  text-[12px] font-nuni font-normal text-[#9C9FB7]' name="" id="">
                    <option value="">Best Match</option>
                    <option value="">12</option>
                    <option value="">10</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <div onClick={() => setGried("hello")} className={`h-8 w-8 shadow-[0_0_30px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-comon ${gried == "hello" ? "bg-comon ": "bg-white"}`}><BsFillGridFill /></div>
                  <Link ><div onClick={() => setGried("hellolist")} className={`h-8 w-8 shadow-[0_0_30px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-comon ${gried == "hellolist" ? "bg-comon ": "bg-white"}`}><FaThList /></div></Link>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </div>
      {/* Advance  end */}
      {/* filter part start */}
      <div className="pb-49">
        <Container>
          <div className="flex gap-x-5">
            <div className="w-1/3">
              <div className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                <div className="px-12 pt-10 pb-0 ">
                  <div onClick={() => setFilter(!filter)} className="flex  pb-[9px] justify-between items-center ">
                    <h4 className='text-[16px] text-[#0A2C3D] font-pop font-bold'>Property Type</h4>
                    <div className="">
                      {filter ?
                        <MdKeyboardArrowUp />
                        :

                        <MdKeyboardArrowDown />
                      }
                    </div>
                  </div>
                  {filter &&
                    <div className="">
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)] pt-5">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>House</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,924</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Single Family</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,824</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'> Apartment</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,724</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Office Villa</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,524</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Luxary Home</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>2,824</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Studio</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>1,524</p>
                        </div>
                      </div>
                      <hr className='mt-4 text-[#707070]' />
                    </div>
                  }

                </div>
                <div className="px-12 pt-5 pb-0 ">
                  <div onClick={() => setFilter1(!filter1)} className="flex  pb-[9px] justify-between items-center ">
                    <h4 className='text-[16px] text-[#0A2C3D] font-pop font-bold'>Amenities</h4>
                    <div className="">
                      {filter1 ?
                        <MdKeyboardArrowUp />
                        :

                        <MdKeyboardArrowDown />
                      }
                    </div>
                  </div>
                  {filter1 &&
                    <div className="">
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)] pt-5">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Dishwasher</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,900</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'> Floor Coverings</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,804</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'> Internet</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,424</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Build Wardrobes</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,324</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Supermarket</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>2,524</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Kids Zone</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>1,424</p>
                        </div>
                      </div>
                      <hr className='mt-4 text-[#707070]' />
                    </div>
                  }

                </div>
                <div className="px-12 pt-5 pb-0 ">
                  <div onClick={() => setFilter2(!filter2)} className="flex  pb-[9px] justify-between items-center ">
                    <h4 className='text-[16px] text-[#0A2C3D] font-pop font-bold'>Price Renge</h4>
                    <div className="">
                      {filter1 ?
                        <MdKeyboardArrowUp />
                        :

                        <MdKeyboardArrowDown />
                      }
                    </div>
                  </div>
                  {filter2 &&
                    <div className="">
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)] pt-5">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Low Budget</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,924</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Medium</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,610</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'> High Budget</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>2,912</p>
                        </div>
                      </div>

                      <hr className='mt-4 text-[#707070]' />
                    </div>
                  }
                </div>
                <div className="px-12 pt-10  ">
                  <h2 className="text-[16px] font-bold font-pop text-[#0A2C3D] mb-3">
                    Price/SQ Ft Filter
                  </h2>
                  <div className="relative w-full h-2 mt-4">

                    <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
                    <div
                      className="absolute  h-2 bg-[#FF6A4D] rounded-full"
                      style={{
                        left: `${(min / 8000) * 100}%`,
                        right: `${100 - (max / 8000) * 100}%`,
                      }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="8000"
                      value={min}
                      onChange={(e) => setMin(Number(e.target.value))}
                      className="absolute w-full pointer-events-none
                    [&::-webkit-slider-thumb]:pointer-events-auto
                    [&::-webkit-slider-thumb]:w-15
                    [&::-webkit-slider-thumb]:h-15
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:border-5
                    [&::-webkit-slider-thumb]:border-[#FF6A4D]
                    appearance-none"
                    />
                    <input
                      type="range"
                      min="0"
                      max="8000"
                      value={max}
                      onChange={(e) => setMax(Number(e.target.value))}
                      className="absolute w-full pointer-events-none
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-webkit-slider-thumb]:w-5
                     [&::-webkit-slider-thumb]:h-5
                     [&::-webkit-slider-thumb]:bg-white
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:shadow-lg
                     [&::-webkit-slider-thumb]:border-2
                     [&::-webkit-slider-thumb]:border-[#FF6A4D]
                     appearance-none"
                    />
                  </div>
                  <p className="text-[14px] font-normal pt-2 pb-3 font-pop text-[#272D61] ">
                    From ${min} to ${max}
                  </p>
                  <hr className='mt-4 text-[#707070]' />
                </div>
                <div className="px-12 pt-5 pb-0 ">
                  <div onClick={() => setFilter3(!filter3)} className="flex  pb-[9px] justify-between items-center ">
                    <h4 className='text-[16px] text-[#0A2C3D] font-pop font-bold'>Bed/bath</h4>
                    <div className="">
                      {filter3 ?
                        <MdKeyboardArrowUp />
                        :

                        <MdKeyboardArrowDown />
                      }
                    </div>
                  </div>
                  {filter3 &&
                    <div className="">
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)] pt-5">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Single</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,924</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Double</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,610</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Up To 3</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>2,912</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Up To 5</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>2,812</p>
                        </div>
                      </div>

                      <hr className='mt-4 text-[#707070]' />
                    </div>
                  }
                </div>
                <div className="px-12 pt-5 pb-9 ">
                  <div onClick={() => setFilter4(!filter4)} className="flex  pb-[9px] justify-between items-center ">
                    <h4 className='text-[16px] text-[#0A2C3D] font-pop font-bold'>Catagory</h4>
                    <div className="">
                      {filter4 ?
                        <MdKeyboardArrowUp />
                        :

                        <MdKeyboardArrowDown />
                      }
                    </div>
                  </div>
                  {filter4 &&
                    <div className="">
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)] pt-5">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Buying</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,924</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Renting</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>3,610</p>
                        </div>
                      </div>
                      <div className="flex items-center pb-4.5 justify-between border-r-8 border-[rgba(255,89,60,0.46)]">
                        <div className="flex gap-x-2.5 items-center ">
                          <input className=' ' type='checkbox' />
                          <h4 className='text-[#272D61] text-[14px]  font-pop font-normal'>Selling</h4>
                        </div>
                        <div className="pr-5">
                          <p className=' text-[#5C727D] text-[14px]  font-nuni font-normal'>2,912</p>
                        </div>
                      </div>

                      <hr className='mt-4 text-[#707070]' />
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <div className="relative pb-9">
                <input className='py-3 pl-7 outline-0 w-full text-[#5C727D] bg-[#F5F5F8]' type="text" placeholder='Search For More Properties' />
                <div className="absolute top-4 right-4">
                  <IoIosSearch className='text-[#5C727D] ' />
                </div>
              </div>
              {gried == "hello" &&
                <div className="flex justify-between gap-y-7.5 mb-15 flex-wrap">
                 <div className="w-[48%]">
                 <Link to={"/propertydetails"}> 
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
                  </Link>
                  </div>
                  <div className="w-[48%]">
                    <Link to={"/propertydetails"}>
                    <div className="shadow-2xl">
                      <img className='w-full h-63' src={Goo} alt="" />
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
                    </Link>
                  </div>
                  <div className="w-[48%]">
                    <Link to={"/propertydetails"}>
                    <div className="shadow-2xl">
                      <img className='w-full h-63' src={Goo1} alt="" />
                      <div className="pl-5.5">
                        <h5 className='text-comon text-[15px] pt-4.5 font-bold font-nuni'>For Rent</h5>
                        <h3 className='pt-1.5 pb-2.5 text-[#0A2C3D] text-[20px] font-bold font-pop'>New Apartment Nice View</h3>
                        <div className="flex items-center gap-x-1 pb-4.5">
                          <IoLocation className='text-comon' />
                          <p className='text-[#0A2C3D] text-[12px] font-normal font-nuni'>Farm in Castro St Los Angeles</p>
                        </div>
                        <div className="text-[#5C727D] text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3450</span> Sq Ft</div>
                        <img className='py-5' src={Zoom1} alt="" />

                      </div>
                      <div className="">
                        <hr className='text-[#DEDEDE]' />
                        <h3 className='pt-2.5 pb-3 pl-5.5 text-[18px] text-comon font-pop font-bold'>$ 349,00/Month</h3>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="w-[48%]">
                    <Link to={"/propertydetails"}>
                    <div className="shadow-2xl">
                      <img className='w-full h-63' src={Goo2} alt="" />
                      <div className="pl-5.5">
                        <h5 className='text-comon text-[15px] pt-4.5 font-bold font-nuni'>For Sale</h5>
                        <h3 className='pt-1.5 pb-2.5 text-[#0A2C3D] text-[20px] font-bold font-pop'>New Apartment Nice View</h3>
                        <div className="flex items-center gap-x-1 pb-4.5">
                          <IoLocation className='text-comon' />
                          <p className='text-[#0A2C3D] text-[12px] font-normal font-nuni'>Luxury Villa In Los Angeles</p>
                        </div>
                        <div className="text-[#5C727D] text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3450</span> Sq Ft</div>
                        <img className='py-5' src={Zoom1} alt="" />

                      </div>
                      <div className="">
                        <hr className='text-[#DEDEDE]' />
                        <h3 className='pt-2.5 pb-3 pl-5.5 text-[18px] text-comon font-pop font-bold'>$ 349,00/Month</h3>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="w-[48%]">
                    <Link to={"/propertydetails"}>
                    <div className="shadow-2xl">
                      <img className='w-full h-63' src={Goo3} alt="" />
                      <div className="pl-5.5">
                        <h5 className='text-comon text-[15px] pt-4.5 font-bold font-nuni'>For Rent</h5>
                        <h3 className='pt-1.5 pb-2.5 text-[#0A2C3D] text-[20px] font-bold font-pop'>Casa Lomas de Machalí</h3>
                        <div className="flex items-center gap-x-1 pb-4.5">
                          <IoLocation className='text-comon' />
                          <p className='text-[#0A2C3D] text-[12px] font-normal font-nuni'>Farm in Castro St Los Angeles</p>
                        </div>
                        <div className="text-[#5C727D] text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3450</span> Sq Ft</div>
                        <img className='py-5' src={Zoom1} alt="" />

                      </div>
                      <div className="">
                        <hr className='text-[#DEDEDE]' />
                        <h3 className='pt-2.5 pb-3 pl-5.5 text-[18px] text-comon font-pop font-bold'>$ 349,00/Month</h3>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="w-[48%]">
                    <Link to={"/propertydetails"}>
                    <div className="shadow-2xl">
                      <img className='w-full h-63' src={Goo4} alt="" />
                      <div className="pl-5.5">
                        <h5 className='text-comon text-[15px] pt-4.5 font-bold font-nuni'>For Sale</h5>
                        <h3 className='pt-1.5 pb-2.5 text-[#0A2C3D] text-[20px] font-bold font-pop'>New Apartment Nice View</h3>
                        <div className="flex items-center gap-x-1 pb-4.5">
                          <IoLocation className='text-comon' />
                          <p className='text-[#0A2C3D] text-[12px] font-normal font-nuni'>Single House Near Angeles</p>
                        </div>
                        <div className="text-[#5C727D] text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-2'>3450</span> Sq Ft</div>
                        <img className='py-5' src={Zoom1} alt="" />

                      </div>
                      <div className="">
                        <hr className='text-[#DEDEDE]' />
                        <h3 className='pt-2.5 pb-3 pl-5.5 text-[18px] text-comon font-pop font-bold'>$ 349,00/Month</h3>
                      </div>
                    </div>
                    </Link>
                  </div>

                </div>
              }
              {gried == "hellolist" &&
                <div className="">
                  <Link to={"/propertydetails"}>
                  <div className="flex mb-7.5 py-4 pl-4 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                    <div className="h-[184px] w-[263px]  pr-8">
                      <img src={For} alt="" />
                    </div>
                    <div className="">
                      <h5 className='text-comon text-[13px] pt-4.5 font-normal font-nuni'>For Rent</h5>
                      <h3 className='pt-1.5 pb-2 text-[#0A2C3D] text-[20px] font-bold font-pop'>New Apartment Nice View</h3>
                      <div className="flex items-center gap-x-1 pb-2">
                        <IoLocation className='text-comon' />
                        <p className='text-[#0A2C3D] text-[11px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                      </div>
                      <div className="text-[#5C727D] pl-1 flex gap-x-2 text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3450</span> Sq Ft</div>
                      <div className="flex gap-x-1.5 items-center pt-2">
                        <div className="h-6 w-6 bg-[#D6D6DB] rounded-full"></div>
                        <h6 className='text-[10px] font-pop font-normal text-[#0A2C3D]'>Agent Pakulla</h6>
                      </div>

                    </div>
                    <div className="pl-15 pt-4">
                      <h4 className='pb-24.5 text-comon text-[18px] font-bold font-pop'>$ 349,00/Month</h4>
                      <img className='pl-3' src={Zoom1} alt="" />
                    </div>
                  </div>
                    </Link>
                    <Link to={"/propertydetails"}>
                  <div className="flex mb-7.5 py-4 pl-4 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                    <div className="h-[184px] w-[263px]  pr-8">
                      <img src={Goo} alt="" />
                    </div>
                    <div className="">
                      <h5 className='text-comon text-[13px] pt-4.5 font-normal font-nuni'>For Sale</h5>
                      <h3 className='pt-1.5 pb-2 text-[#0A2C3D] text-[20px] font-bold font-pop'>House Highland Ave Angeles</h3>
                      <div className="flex items-center gap-x-1 pb-2">
                        <IoLocation className='text-comon' />
                        <p className='text-[#0A2C3D] text-[11px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                      </div>
                      <div className="text-[#5C727D] pl-1 flex gap-x-2 text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3450</span> Sq Ft</div>
                      <div className="flex gap-x-1.5 items-center pt-2">
                        <div className="h-6 w-6 bg-[#D6D6DB] rounded-full"></div>
                        <h6 className='text-[10px] font-pop font-normal text-[#0A2C3D]'>Agent Pakulla</h6>
                      </div>

                    </div>
                    <div className="pl-8 pt-4">
                      <h4 className='pb-24.5 text-comon text-[18px] font-bold font-pop'>$ 349,00/Month</h4>
                      <img className='pl-3' src={Zoom1} alt="" />
                    </div>
                  </div>
                    </Link>
                    <Link to={"/propertydetails"}>
                  <div className="flex mb-7.5 py-4 pl-4 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                    <div className="h-[184px] w-[263px]  pr-8">
                      <img src={Goo1} alt="" />
                    </div>
                    <div className="">
                      <h5 className='text-comon text-[13px] pt-4.5 font-normal font-nuni'>For Rent</h5>
                      <h3 className='pt-1.5 pb-2 text-[#0A2C3D] text-[20px] font-bold font-pop'>Farm in Castro St Los Angeles</h3>
                      <div className="flex items-center gap-x-1 pb-2">
                        <IoLocation className='text-comon' />
                        <p className='text-[#0A2C3D] text-[11px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                      </div>
                      <div className="text-[#5C727D] pl-1 flex gap-x-2 text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3450</span> Sq Ft</div>
                      <div className="flex gap-x-1.5 items-center pt-2">
                        <div className="h-6 w-6 bg-[#D6D6DB] rounded-full"></div>
                        <h6 className='text-[10px] font-pop font-normal text-[#0A2C3D]'>Agent Pakulla</h6>
                      </div>

                    </div>
                    <div className="pl-6 pt-4">
                      <h4 className='pb-24.5 text-comon text-[18px] font-bold font-pop'>$ 349,00/Month</h4>
                      <img className='pl-3' src={Zoom1} alt="" />
                    </div>
                  </div>
                    </Link>
                    <Link to={"/propertydetails"}>
                  <div className="flex mb-7.5 py-4 pl-4 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                    <div className="h-[184px] w-[263px]  pr-8">
                      <img src={Goo2} alt="" />
                    </div>
                    <div className="">
                      <h5 className='text-comon text-[13px] pt-4.5 font-normal font-nuni'>For Sale</h5>
                      <h3 className='pt-1.5 pb-2 text-[#0A2C3D] text-[20px] font-bold font-pop'>Luxury Villa In Real Estate</h3>
                      <div className="flex items-center gap-x-1 pb-2">
                        <IoLocation className='text-comon' />
                        <p className='text-[#0A2C3D] text-[11px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                      </div>
                      <div className="text-[#5C727D] pl-1 flex gap-x-2 text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3450</span> Sq Ft</div>
                      <div className="flex gap-x-1.5 items-center pt-2">
                        <div className="h-6 w-6 bg-[#D6D6DB] rounded-full"></div>
                        <h6 className='text-[10px] font-pop font-normal text-[#0A2C3D]'>Agent Pakulla</h6>
                      </div>

                    </div>
                    <div className="pl-16.5 pt-4">
                      <h4 className='pb-24.5 text-comon text-[18px] font-bold font-pop'>$ 349,00/Month</h4>
                      <img className='pl-3' src={Zoom1} alt="" />
                    </div>
                  </div>
                    </Link>
                    <Link to={"/propertydetails"}>
                  <div className="flex mb-7.5 py-4 pl-4 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                    <div className="h-[184px] w-[263px]  pr-8">
                      <img src={Goo3} alt="" />
                    </div>
                    <div className="">
                      <h5 className='text-comon text-[13px] pt-4.5 font-normal font-nuni'>For Rent</h5>
                      <h3 className='pt-1.5 pb-2 text-[#0A2C3D] text-[20px] font-bold font-pop'>Duplex House In Rich Apart</h3>
                      <div className="flex items-center gap-x-1 pb-2">
                        <IoLocation className='text-comon' />
                        <p className='text-[#0A2C3D] text-[11px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                      </div>
                      <div className="text-[#5C727D] pl-1 flex gap-x-2 text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3450</span> Sq Ft</div>
                      <div className="flex gap-x-1.5 items-center pt-2">
                        <div className="h-6 w-6 bg-[#D6D6DB] rounded-full"></div>
                        <h6 className='text-[10px] font-pop font-normal text-[#0A2C3D]'>Agent Pakulla</h6>
                      </div>

                    </div>
                    <div className="pl-13 pt-4">
                      <h4 className='pb-24.5 text-comon text-[18px] font-bold font-pop'>$ 349,00/Month</h4>
                      <img className='pl-3' src={Zoom1} alt="" />
                    </div>
                  </div>
                    </Link>
                    <Link to={"/propertydetails"}>
                  <div className="flex mb-7.5 py-4 pl-4 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                    <div className="h-[184px] w-[263px]  pr-8">
                      <img src={Goo4} alt="" />
                    </div>
                    <div className="">
                      <h5 className='text-comon text-[13px] pt-4.5 font-normal font-nuni'>For Rent</h5>
                      <h3 className='pt-1.5 pb-2 text-[#0A2C3D] text-[20px] font-bold font-pop'>Dining House Big Light</h3>
                      <div className="flex items-center gap-x-1 pb-2">
                        <IoLocation className='text-comon' />
                        <p className='text-[#0A2C3D] text-[11px] font-normal font-nuni'>Belmont Gardens, Chicago</p>
                      </div>
                      <div className="text-[#5C727D] pl-1 flex gap-x-2 text-[12px] font-normal font-nuni"><span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>2</span> Beedrooms <span className='text-[12px] font-bold font-nuni text-[#0A2C3D] pr-0'>3450</span> Sq Ft</div>
                      <div className="flex gap-x-1.5 items-center pt-2">
                        <div className="h-6 w-6 bg-[#D6D6DB] rounded-full"></div>
                        <h6 className='text-[10px] font-pop font-normal text-[#0A2C3D]'>Agent Pakulla</h6>
                      </div>

                    </div>
                    <div className="pl-25 pt-4">
                      <h4 className='pb-24.5 text-comon text-[18px] font-bold font-pop'>$ 349,00/Month</h4>
                      <img className='pl-3' src={Zoom1} alt="" />
                    </div>
                  </div>
                    </Link>
                </div>
              }

              {/* pagination start */}
              <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                  <ul class="flex  items-center gap-x-4.5">
                    <li className=''>
                      <a href="#" class="flex items-center justify-center hover:text-[#F58727]"><IoIosArrowBack /></a>
                    </li>
                    <li className='class=" h-10 w-10 bg-white flex justify-center items-center shadow-xl duration-200 ease-in-out text-[#6D708D] text-[16px] font-bold font-nuni hover:bg-comon hover:text-white rounded-full "'>
                      1
                    </li>
                    <li className='class=" h-10 w-10 bg-white flex justify-center items-center shadow-xl duration-200 ease-in-out text-[#6D708D] text-[16px] font-bold font-nuni hover:bg-comon hover:text-white rounded-full "'>
                      2
                    </li>
                    <li className='class=" h-10 w-10 bg-white flex justify-center items-center shadow-xl duration-200 ease-in-out text-[#6D708D] text-[16px] font-bold font-nuni hover:bg-comon hover:text-white rounded-full "'>
                      3
                    </li>
                    <li className='class=" h-10 w-10 bg-white flex justify-center items-center shadow-xl duration-200 ease-in-out text-[#6D708D] text-[16px] font-bold font-nuni hover:bg-comon hover:text-white rounded-full "'>
                      4
                    </li>
                    <li className=''>
                      <a href="#" class="flex items-center justify-center hover:text-[#F58727]"><IoIosArrowForward /></a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* pagination end */}
            </div>
          </div>
        </Container>
      </div>
      {/* filter part end */}
    </div>
  )
}

export default Property