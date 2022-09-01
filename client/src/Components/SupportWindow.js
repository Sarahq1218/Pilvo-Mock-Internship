import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Agent from './Agent'

const SupportWindow = () => {
    const { user, logOut } = UserAuth()
    const navigate = useNavigate()
    
    const handleLogOut = async () => {
        try {
            await logOut()
            navigate ('/supportlogin')
        } catch (error) {
            console.log(error)
        }
    } 

    return (
      <div>
         {user?.displayName ? <button onClick={handleLogOut}>Logout</button> : null}
          <Agent />
          
    </div>
  )
}

export default SupportWindow