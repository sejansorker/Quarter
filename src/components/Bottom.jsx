import React from 'react'
import Container from './Container'

const Bottom = () => {
  return (
    <div className='bg-[#273F4F]'>
        <Container>
            <div className="flex justify-between items-center py-8 ">
                <div className="w-1/3">
                <h4 className='text-[15px] font-normal font-nuni text-white'>© TunaThemes 2021 All rights reserved.</h4>
                </div>
                <div className="w-1/3 text-center">
                <p className='text-[15px] font-normal font-nuni text-white'>Terms of Use | rivacy Policy</p></div>
            </div>
        </Container>
    </div>
  )
}

export default Bottom