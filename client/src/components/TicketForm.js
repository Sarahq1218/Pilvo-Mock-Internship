import { React, useEffect } from 'react'
import { useState} from 'react'
import Navbar from './Navbar'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import DropFileInput from "./DragDrop"
import emailjs from '@emailjs/browser'
import { UserAuth } from '../context/AuthContext'

const TicketForm = () => {
      const { user } = UserAuth()
      const [client, setClient] = useState("");
      const [subject, setSubject] = useState("");
      const [request, setRequest] = useState("");
      const [description, setDescription] = useState("");
      const [loader, setLoader] = useState(false);

      const [file, setFile] = useState(null)

      const handleSubmit = (e) => {
        e.preventDefault();
        const ready = true;
        if(client === ""){
          alert("Missing name! Please enter your name")
          ready = false;
        }
        if(subject === ""){
          alert("Missing subject! Please enter a subject title")
          ready = false;
        }
        if(request === "-- Select Request Type --"){
          alert("Missing request type! Please specify the type of ticket you are submitting")
          ready = false;
        }

        if(ready){
          const collectionRef = collection(db, "tickets");
          const payload = {
            client: client,
            subject: subject,
            request: request,
            description: description,
            file:file,
          }
          addDoc(collectionRef, payload);
          emailjs.send("service_xtv7lai","template_0a0i5oc",{
            client: client,
            agent: user.displayName,
            user_email: user.email,
            subject: subject,
            request: request,
            description: description,
            }, '20oNdvSlH_5JGDAD-');          
            alert("Your message has been submitted👍");
          
          setClient("");
          setSubject("");
          setRequest("");
          setDescription("");
          setFile(null);
      }};

      const handleFile = event => {
        const file = event.target.files[0]
        setFile(file)
      }

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
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5'
                placeholder='Full Name'
                id='client'
                onChange={(e) => setClient(e.target.value)}
              />

              <select class='block border border-grey-light w-full p-3 mb-4 text-xl rounded-3xl pl-5'
              onChange={e => setRequest(e.target.value)}
              required
              >
                <option>-- Select Request Type --</option>
                <option>Returns / Exchange</option>
                <option>Delivery Status</option>
                <option>Payment Issue</option>
                <option>Product Issue</option>
                <option>Order Cancellation</option>
                <option>Missing / Lost Order</option>                
                <option>General Inquiry</option>
                <option>Other</option>
              </select>
              
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
        <DropFileInput id="dropzone-file" type="file" class="hidden"
          onFileChange={e => handleFile(e)}
          setFile={setFile}
          handleFile={handleFile} />
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
 