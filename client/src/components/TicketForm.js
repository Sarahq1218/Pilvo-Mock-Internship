import { React, useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const TicketForm = () => {
      const [client, setClient] = useState("");
      const [subject, setSubject] = useState("");
      const [request, setRequest] = useState("");
      const [description, setDescription] = useState("");
      const [loader, setLoader] = useState(false);

      const [file, setFile] = useState(null)

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
  
        const collectionRef = collection(db, "tickets");
        const payload = {
          client: client,
          subject: subject,
          request: request,
          description: description,
        }
         addDoc(collectionRef, payload);
         setLoader(false);
         alert("Your message has been submitted👍");
         
        setClient("");
        setSubject("");
        setRequest("");
        setDescription("");
        setFile(null);
      };

    return (
      <div class=''>
        <Navbar/>
        <div className='justify-center mt-24 items-center'>
      <div className='max-w-[600px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold text-[#1D5257]'>
            Submit a Ticket.
          </h2>
        </div>

        <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border p-10 rounded-xl shadow-xl'>
            <form onSubmit={e => handleSubmit(e)}>
              {/* <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'> */}
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5'
                placeholder='Full Name'
                id='client'
                onChange={(e) => setClient(e.target.value)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5'
                id='request'
                placeholder='Request'
                onChange={(e) => setRequest(e.target.value)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5'
                id='subject'
                placeholder='Subject'
                onChange={(e) => setSubject(e.target.value)}
              />
              
              <textarea 
              className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5' 
              placeholder='Description' 
              id="description" 
              rows="4" 
              cols="50"
              onChange={(e) => setDescription(e.target.value)}>
              </textarea>

              <div class="flex justify-center items-center w-full">
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg class="mb-3 w-14 h-10 text-[#006970]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-xl text-[#006970] text- dark:text-gray-400">+ Attach a file</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 


              <br />
              <button
                type='submit'
                className='text-white text-xl bg-[#006970] w-6/12 mb-3 text-center py-3 rounded-2xl hover:bg-[#409e96]  my-1'
                onClick={handleSubmit}
              >
                submit
              </button>
              <br/>
              <a className='text-xl text-[#006970] hover:underline' href='chat'>
                Chat with a salesman
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default TicketForm
 