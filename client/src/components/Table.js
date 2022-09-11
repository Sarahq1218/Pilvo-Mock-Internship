
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Cards from "./Cards";
import { useNavigate } from 'react-router-dom'


export default function App() {
  const [tickets, setTickets] = useState([{ name: "Loading...", id: "initial" }]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()


  useEffect(
    () =>
      onSnapshot(collection(db, "tickets"), (snapshot) =>
        setTickets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id.substring(0,5)})))
      ),
    []
  );

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className=''>
      {/* Search */}
      <div className='flex mx-auto w-full px-3'>
        <div className='ml-96 flex justify-between items-center w-full h-full'>
          <Cards/>
          <div className='mt-32 mr-80 flex h-16 border-2 w-96 ml-10 rounded-3xl text-[#424B5A] shadow-lg'>
            <button className=' items-center justify-right px-4 border-r'>
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
              className='px-4 text-[24px] py-2 w-72 rounded-3xl '
              placeholder='Search...'
              onChange={event => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
      </div>



      <div className='mt-14 justify-center flex'>
        
        <div className='border-b border-gray-200 '>
          <table className=' text-3xl mt-4 divide-y px-10'>
            <thead className='h-14 bg-[#eafbf9] text-[#1D5257]'>
              <tr className="shadow-2xl h-14">
                <th className='px-6 py-2 text-2xl underline'>ID</th>
                <th className='px-6 py-2 text-2xl underline'>Client</th>
                <th className='px-6 py-2 text-2xl underline'>Request Type</th>
                <th className='px-6 py-2 text-2xl underline'>Subject</th>
                <th className='px-6 py-2 text-2xl underline'>Description</th>
              </tr>
            </thead>

            <tbody className='drop-shadow-xl bg-white'>

              {tickets.map(ticket => (
                <tr className='text-center h-20 divide-y-2 border-[#ecf2f2]'>
                  <td onClick={(handleClick)} className='divide-y-2 px-6 py-4 bg-[#ecf2f2] cursor-pointer hover:font-semibold'>#{ticket.id}</td>
                  <td className='px-6 py-4 bg-[#d3f2ef] max-w-xl max-h-1 '>{ticket.client}</td>
                  <td className='px-6 py-4 bg-[#ecf2f2] max-w-xl max-h-1 '>{ticket.request}</td>
                  <td className='px-6 py-4 bg-[#d3f2ef] max-w-xl max-h-1 '>{ticket.subject}</td>
                  <td className='px-6 py-4 bg-[#ecf2f2] max-w-xl max-h-3 text-ellipses'>{ticket.description}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}




// import { db } from "../firebase";
// import {ref, onValue} from 'firebase/firestore'
// import'bootstrap/dist/css/bootstrap.min.css'

// export default class Table extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       tableData: []
//     }
//   }

//   render(){
//     return(
//       <Table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Client</th>
//             <th>Request Type</th>
//             <th>Subject</th>
//             <th>Description</th>
//           </tr>
//         </thead>

//         <tbody>
//           {this.state.tableData.map((rowdata, index)=>{
//             <tr>
//               <td>{index}</td>
//               <td>{row.key}</td>
//               <td>{row.data.client}</td>
//               <td>{row.data.request}</td>
//               <td>{row.data.subject}</td>
//               <td>{row.data.description}</td>
//             </tr>
//           })}
//         </tbody>
//       </Table>
//     )
//   }
// }