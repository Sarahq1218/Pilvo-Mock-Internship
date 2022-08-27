import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const { googleSignIn, user } = UserAuth();
  // const navigate = useNavigate()
  //     useEffect(() => {
  //         if (user != null) {
  //             navigate('/chat')
  //         }
  //     }, [user])
      
  const handleGoogleSignIn = async () => {
  try {
      await googleSignIn();
  } catch (error) {
      console.log(error);
  }
  };

  return (
    <section class="flex justify-center h-screen items-center">

    <div class="position:relative xl:w-1/2 px-10
          flex items-center justify-center">
  
      <div class="w-full h-100">
        <h1 class="text-8xl flex justify-center text-[#1D5257] font-bold mb-10">Welcome!</h1>
  
        <form action="#" method="POST">
          <div>
            <label class="block font-bold text-3xl text-[#1D5257]">Full Name</label>
            <input type="text" name="" id="" placeholder="Enter your name" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
          </div>
          
          <div class="mt-8">
            <label class="block font-bold text-3xl text-[#1D5257]">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter your email" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
          </div>
  
          <div class="mt-8">
            <label class="block font-bold text-3xl text-[#1D5257]">Password</label>
            <input type="password" name="" id="" placeholder="Enter your password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required/>
          </div>
          
          <div class="mt-8">
            <label class="block font-bold text-3xl text-[#1D5257]">Confirm Password</label>
            <input type="password" name="" id="" placeholder="Passwords must match" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required/>
          </div>
  
          <button type="submit" class="w-full block bg-[#1D5257] hover:bg-[#58dedb] focus:bg-[#58dedb] text-2xl text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Sign Up</button>
        </form>
  
        <hr class="my-6 mt-10 border-black w-full"/>
  
          <div class="flex mt-10 justify-center">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
  
        <p class="mt-10 text-2xl text-[#308b93] flex justify-center">
          Already have an account?   
          <a href="/" class="ml-2 text-2xl text-[#1D5257] hover:text-[#58dedb] focus:text-[#58dedb] font-semibold">
             Sign in!
          </a>
        </p>
  
      </div>

    </div>
  
  </section>
  ) 
}
 