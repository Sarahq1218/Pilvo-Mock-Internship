import { React, useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDoc, getDocs } from 'firebase/firestore'

export default function Table() {
  const [searchTerm, setSearchTerm] = useState('')
  const [tickets, setTickets] = useState([])

  const colRef = collection(db, "tickets")
  getDocs(colRef)
  .then((snapshot) => {
    let tickets = []
    snapshot.docs.forEach((doc) => { 
      tickets.push({ ...doc.data(), id: doc.id })
    })
    console.log(tickets)
  })
  .catch(err => { 
    console.log(err.message)
  })

  return (
    <div className=''>
      {/* Search */}
      <div className='flex mx-auto w-full px-10'>
        <div className='flex justify-between items-center w-full h-full'>
          <div>
            <h1 className='text-3xl text-[#424B5A] flex items-center justify-center '>Tickets</h1>
          </div>
          <div className='flex border-2 rounded-3xl text-[#424B5A]'>
            <button className='flex items-center justify-center px-4 border-r '>
              <svg
                className='w-6 h-6 text-gray-600'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'></path>
              </svg>
            </button>
            <input
              type='text'
              className='px-4 py-2 w-80 rounded-3xl'
              placeholder='Search...'
              onChange={event => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className='mt-5'>
        <div className='flex justify-center align-center border-b border-gray-200'>
          <table className='table-auto w-screen'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>ID</th>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>Client</th>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>Subject</th>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>Assigned Agent</th>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>Priority</th>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>Status</th>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>Created</th>
                <th className='px-6 py-2 text-[20px] text-[#1D3557]'>Due</th>
              </tr>
            </thead>

            <tbody className='bg-white'>

              {tickets.filter(val => {
                    if (searchTerm === "") {
                      return val
                    } else if (val.content.includes(searchTerm)) {
                      return val
                    }
                  }).map(ticket => (
                <tr className=''>
                  <td className='px-6 py-4 text-sm text-gray-500'>
                    {ticket._id.substring(1, 5)}
                  </td>
                  <td className='px-6 py-4'>{ticket.client}</td>
                  <td className='px-6 py-4'>{ticket.subject}</td>
                  <td className='px-6 py-4'>{ticket.request}</td>
                  <td className='px-6 py-4'>{ticket.description}</td>
                  <td className='px-6 py-4'>🔗</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
