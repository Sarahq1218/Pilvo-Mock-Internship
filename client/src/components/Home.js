import React from 'react'
import Navbar from './Navbar'
import add from './images/add.png'
import check from './images/check.png'

export default function Home() {
  return (
    <div>
      
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class='px-10 ml-36 font-[400] text-[42px]'>
          How can we help you today?
        </div>
        <div class='flex mt-6 px-10 ml-36  text-[#1D5257]'>
            <img 
                class='w-10'
                src={add}
            />
          <a href='new-ticket'>
            <div className='text-[28px] hover:font-[700] font-[500] ml-4'>
              New Support Ticket
            </div>
          </a>
            <img 
                class='ml-10 w-10'
                src={check}
            />
          <a href='ticket-dashboard'>
            <div className='text-[28px] hover:font-[700] font-[500] ml-4'>
              Check Ticket Status
            </div>
          </a>
        </div>
        <img className='mt-20 mx-44 w-[720px]' src="https://www.plivo.com/assets/dist/images/new-home/hero-unit.svg"/>

    </div>
  )
}
