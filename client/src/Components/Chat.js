import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

const Chat = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    
    const handleLogOut = async () => {
        try {
            await logOut()
            
        } catch (error) {
            console.log(error)
        }

    }
   
    useEffect(() => {
        if (user == null) {
            navigate('/register')
        }
    }, [user])

  return (
    <div className='chats-page'>
          <nav>
              Pilveo
              <p>Welcome, {user?.displayName}</p>
              {user?.displayName ?<button onClick={handleLogOut}>Log Out</button> :  navigate('/')}
          </nav>
         
          <ChatEngine
              height="calc(100vh - 66px)"
              projectID="d778b043-7572-4517-b02b-6e257c6c526d"
              userName="."
              userSecret="."
          
          />
          
    </div>
  )
}

export default Chat