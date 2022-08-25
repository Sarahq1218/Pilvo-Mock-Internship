import { React, useEffect } from 'react'
import { useState } from 'react'

const TicketForm = () => {
    const [data, setData] = useState({
        customer: '',
        reason: '',
        subject: '',
        description: '',
      })

      const [file, setFile] = useState(null)


      const handleFile = event => {
        const newData = { ...data }
        const file = event.target.files[0]
        setFile(file)
      }

      const handleForm = e => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
      }

      const handleSubmit = async e => {
        e.preventDefault()
      }

    return (
        <div className='flex justify-center items-center h-screen'>
      <div className='max-w-[1240px] mx-auto'>
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
                id='name'
                onChange={e => handleForm(e)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5'
                id='req'
                placeholder='Request'
                onChange={e => handleForm(e)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5'
                id='subj'
                placeholder='Subject'
                onChange={e => handleForm(e)}
              />
              
              <textarea 
              className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5' 
              placeholder='Description' 
              id="desc" 
              rows="4" 
              cols="50">
              </textarea>

              <div class="flex justify-center items-center w-full">
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg class="mb-3 w-14 h-14 text-[#006970]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-2xl text-[#006970] text- dark:text-gray-400">+ Attach a file</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 


              <br />
              <button
                type='submit'
                className='text-white text-xl bg-[#006970] w-6/12 mb-3 text-center py-3 rounded-2xl  my-1'
              >
                submit
              </button>
              <br/>
              <a className='text-xl text-[#006970] underline' href='chat'>
                Chat with a salesman
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default TicketForm
 