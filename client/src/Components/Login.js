import React from 'react'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'



const Login = () => {
    
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()

      const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user != null) {
            navigate('/chat')
        }
    }, [user])
    


  return (
      <div>
          <h1>Login</h1> 
          <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  )
}

export default Login