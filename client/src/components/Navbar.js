import React, { useState } from 'react'
import logo from './images/plivo_logo.png'
import { UserAuth } from '../context/AuthContext';


function Navbar() {

  const { user, logOut } = UserAuth();
  
  const handleLogOut = async () => {
      try {
          await logOut()
          
      } catch (error) {
          console.log(error)
      }

  }

  return (
    <nav className='nav bg-white flex-wrap'>
      <div className='w-screen h-[100px] z-10 fixed'>
        <div className='px-10 flex justify-between relative flex items-center w-full h-full'>
          <div className='relative flex items-center ml-32 text-[#424B5A]'>
            <a href='/'>
                <img
                      className="hidden lg:block h-11 w-[160px] h-[36px]"
                      src="https://s3.amazonaws.com/plivo_blog_uploads/logo/Plivo-logo.svg?v=202209051230"
                      alt="Workflow"
                    />
            </a>
          </div>
          <div className='hidden md:flex pr-4 mr-32'>
            <a href='/new-ticket'>
              <button className='px-8 mr-4 py-3 drop-shadow-lg bg-[#424B5A] text-2xl text-white rounded-2xl hover:bg-[#3c8b8a] focus:bg-[#3c8b8a]'>
                Contact Sales
              </button>
            </a>
            
            <a href='/chat'>
              <button onClick={handleLogOut} className='px-8 py-3 bg-[#b2dfdb] drop-shadow-lg text-2xl mr-4 text-black rounded-2xl hover:bg-[#58dedb] focus:bg-[#58dedb]'>
                Log Out
              </button>
            </a>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='w-screen h-[59px] z-10 fixed drop-shadow bg-[#F4FEFF]'>
        <div className='px-10 flex justify-between items-center w-full h-full'>
          <div className='flex items-center pl-36 text-[#1D5257] text-[24px] hover:text-[700] focus:text-[700]'>
            <a class='mr-5 hover:underline' href='/home'>
              Home
            </a>
            <a class='ml-5 mr-5 hover:underline' href='/ticket-dashboard'>
            Tickets
            </a>
            <a class='ml-5 hover:underline' href='/chat'>
            Chat
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar