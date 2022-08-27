import React, { useState } from 'react'
import logo from './plivo_logo.png'
import { UserAuth } from '../context/AuthContext';


function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  const { user, logOut } = UserAuth();
  
  const handleLogOut = async () => {
      try {
          await logOut()
          
      } catch (error) {
          console.log(error)
      }

  }

  return (
    <div className='App bg-gradient-to-b from-[#BBC2FA] to-white'>
      <div className='w-screen h-[120px] z-10 fixed drop-shadow-lg '>
        <div className='px-60 flex justify-between items-center w-full h-full'>
          <div className='flex items-center pl-96 text-[#424B5A]'>
            <a href='/'>
                <img
                      className="hidden lg:block h-11 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
            </a>
          </div>
          <div className='hidden md:flex pr-4 mr-60'>
            <a href='/ticket'>
              <button className='px-8 mr-4 py-3 bg-[#424B5A] text-2xl text-white rounded-2xl hover:bg-[#3c8b8a] focus:bg-[#3c8b8a]'>
                Contact Sales
              </button>
            </a>
            
            <a href='/chat'>
              <button className='px-8 py-3 bg-[#b2dfdb] text-2xl mr-4 text-black rounded-2xl hover:bg-[#58dedb] focus:bg-[#58dedb]'>
                Open Chat
              </button>
            </a>

            <a href='/'>
              <button className='flex justify-center hover:text-[#58dedb] focus:text-[#58dedb]' onClick={handleLogOut}>Log Out</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar