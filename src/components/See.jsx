import React from 'react'
import Container from './Container'

const See = () => {
    return (
        <div className='mt-80 pb-25'>
            <Container>
                <div className="text-center w-3/5 mx-auto">
                    <button className='py-1 px-6 text-[16px] text-comon font-bold font-nuni bg-[#fb52522f] rounded-[30px]'>News & Blogs</button>
                    <h2 className='text-[48px] font-bold font-pop pt-4 pb-9'>See Our Leatest News & Read Blogs</h2>
                </div>
                <div className="flex items-center gap-x-5">
                    <div className="w-1/3">
                        
                        <div className="bg-[url(/one.png)] bg-cover bg-center bg-no-repeat pt-[110px] pr-24.5 pb-7 pl-6.5 relative">
                            <div className="bg-[#00000080] absolute inset-0 z-0"></div>
                            <div className="relative z-20">
                                <div className="flex items-center gap-3 pb-4">
                                    <h5 className='text-[15px] font-nuni font-bold text-white'>
                                        Product Design
                                    </h5>
                                    <button className='pt-[9px] pb-2.5 pr-[17px] pl-4.5 bg-white text-black text-[12px] font-nuni font-bold rounded-[20px]'>
                                        02 sep 2020
                                    </button>
                                </div>

                                <h4 className='text-white text-[20px] font-pop font-bold'>
                                    This consumer-focused blog gives clients
                                </h4>
                            </div>
                        </div>
                        <div className="bg-[url(/two.png)] bg-cover bg-center bg-no-repeat mt-8.5 pt-[110px] pr-24.5 pb-7 pl-6.5 relative">
                            <div className="bg-[#00000080] absolute inset-0 z-0"></div>
                            <div className="relative z-20">
                                <div className="flex items-center gap-3 pb-4">
                                    <h5 className='text-[15px] font-nuni font-bold text-white'>
                                        Product Design
                                    </h5>
                                    <button className='pt-[9px] pb-2.5 pr-[17px] pl-4.5 bg-white text-black text-[12px] font-nuni font-bold rounded-[20px]'>
                                        02 sep 2020
                                    </button>
                                </div>

                                <h4 className='text-white text-[20px] font-pop font-bold'>
                                    This consumer-focused blog gives clients
                                </h4>
                            </div>
                        </div>

                    </div>
                    <div className="w-1/3">
                    <div className="bg-[url(/three.png)] bg-cover bg-center bg-no-repeat  pt-[358px] pr-[76px] pb-[31px] pl-6.5 relative">
                            <div className="bg-[#00000080] absolute inset-0 z-0"></div>
                            <div className="relative z-20">
                                <div className="flex items-center gap-3 pb-4">
                                    <h5 className='text-[15px] font-nuni font-bold text-white'>
                                        Web Developer
                                    </h5>
                                    <button className='pt-[9px] pb-2.5 pr-[17px] pl-4.5 bg-white text-black text-[12px] font-nuni font-bold rounded-[20px]'>
                                        02 sep 2020
                                    </button>
                                </div>

                                <h4 className='text-white text-[20px] font-pop font-bold'>
                                    Have an ear to the ground on what real estate invest
                                </h4>
                                <h6 className='text-[16px] pt-2.5 font-nuni font-bold text-white'>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                    <div className="bg-[url(/four.png)] bg-cover bg-center bg-no-repeat  pt-[358px] pr-[76px] pb-[31px] pl-6.5 relative">
                            <div className="bg-[#00000080] absolute inset-0 z-0"></div>
                            <div className="relative z-20">
                                <div className="flex items-center gap-3 pb-4">
                                    <h5 className='text-[15px] font-nuni font-bold text-white'>
                                        Estate Agencie
                                    </h5>
                                    <button className='pt-[9px] pb-2.5 pr-[17px] pl-4.5 bg-white text-black text-[12px] font-nuni font-bold rounded-[20px]'>
                                        02 sep 2020
                                    </button>
                                </div>

                                <h4 className='text-white text-[20px] font-pop font-bold'>
                                    appraisal skills and real estate career? McKissock
                                </h4>
                                <h6 className='text-[16px] pt-2.5 font-nuni font-bold text-white'>Read More</h6>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default See