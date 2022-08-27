import React from 'react'
import {  ChatEngine } from 'react-chat-engine';
import { UserAuth } from '../context/AuthContext';


const Chat = () => {
    const { user, logOut } = UserAuth();

    
    const handleLogOut = async () => {
        try {
            await logOut()
            
        } catch (error) {
            console.log(error)
        }

    }

  return (
      <div>
          <button onClick={handleLogOut}>Log Out</button>
         <ChatEngine
			height='100vh'
			userName='sarahtech1218@gmail.com'
			userSecret='sJgMo6hygEajlUP24lsP5peIBar2'
			projectID='d778b043-7572-4517-b02b-6e257c6c526d'
		/>
        
    </div>
  )
}

export default Chat