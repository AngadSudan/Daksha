import React, { useState } from 'react'
import {motion} from 'framer-motion'
import configure from '../Conf/configure';
import axios from 'axios';
import src from '../Images/doubts.png'
// import configure from '../Conf/configure';
function Doubts() {
  const [name,setName]= useState('');
  const [fromemail,setFromEmail]= useState('');
  const [toemail, setToEmail]= useState('');
  const [message,setMessage]= useState('');
  const [submit, setsubmit]= useState('Submit');
  const Name=(e)=>{
    setName(e.target.value);
  }
  const FromEmail=(e)=>{
    setFromEmail(e.target.value);
  }
  const ToEmail=(e)=>{
    setToEmail(e.target.value);
  }
  const Message=(e)=>{
    setMessage(e.target.value);
  }
  
  const submitted=(e)=>{
    setsubmit('Sending...');
    setTimeout(() => {
      setsubmit('Submit');
    }, 3000);
    e.preventDefault();
    const templateParams = {
      to: toemail,
      from: configure.Email,
      subject: "New Doubt Arrived",
      text: message,
    };
    axios.post(`${configure.Endpoint}/Doubts`, templateParams).then(()=>{alert("The mail data was sent successfully")
    }).then(()=>{setsubmit('Submit');}).catch(() => {
      setsubmit('Submit');
      alert('an error occurred')});
  };

  
  return (
    <div className='h-[90svh] w-full flex flex-col-reverse lg:flex-row-reverse'>
      <motion.div 
        className='w-full rounded-t-2xl rounded-b-2xl lg:w-[30%] h-fit mt-3 mx-auto lg:ml-20 p-2 bg-[#ffecca] text-black border-4 border-[#fdd9ad] shadow-lg shadow-[#00000064]'
        initial={{x: "100%", y: "-100%", opacity: 0}}
        animate={{x: 0, y: 0, opacity: 1}}
        transition={{delay: 0.7, duration: 1}}
      >
        <h1 className='font-semibold text-center text-[24px] lg:text-[32px] mb-4'>Ask Your Doubts</h1>
        <form className='flex flex-col p-4 font-semibold' method='POST'>
          <div className='mb-4'>
            <label>Enter your Rollnumber</label>
            <br/>
            <input 
              value={name} 
              onChange={Name} 
              className='h-fit w-[90%] p-2 text-black' 
              placeholder="Type here..." 
              type="text" 
              required 
            />
          </div>
          <div className='mb-4'>
            <label>Enter your Email</label>
            <br/>
            <input 
              value={fromemail} 
              onChange={FromEmail} 
              className='h-fit w-[90%] p-2 text-black' 
              placeholder="Type here..." 
              type="email" 
              required 
            />
          </div>
          <div className='flex flex-col my-8'>
            <label>
              <input 
                type="radio" 
                className='mb-4' 
                name="subject" 
                id="Maths" 
                value="angad0035.becse24@chitkara.edu.in" 
                onChange={ToEmail} 
              />
              Maths
            </label>
            <label>
              <input 
                type="radio" 
                className='mb-4' 
                name="subject" 
                id="Python" 
                value="angad0035.becse24@chitkara.edu.in" 
                onChange={ToEmail} 
              />
              Python
            </label>
            <label>
              <input 
                type="radio" 
                className='mb-4' 
                name="subject" 
                id="Front-end" 
                value="adityadgr29@gmail.com" 
                onChange={ToEmail} 
              />
              Front-end
            </label>
            <label>
              <input 
                type="radio" 
                className='mb-4' 
                name="subject" 
                id="Physics" 
                value="angad0035.becse24@chitkara.edu.in" 
                onChange={ToEmail} 
              />
              Physics
            </label>
          </div>
          <textarea 
            value={message} 
            onChange={Message} 
            className='p-2 w-full text-black' 
            placeholder="Your Doubt.."
          ></textarea>
          <button 
            onClick={submitted} 
            type="Submit" 
            className='bg-orange-500 text-2xl p-4 w-[60%] mx-auto rounded-lg mt-4 text-white'
          >
            {submit}
          </button>
        </form>
      </motion.div>

      <motion.div 
        className='w-full lg:w-[40%] pt-8 h-[100%]'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5, delay: 0.7}}
      >
        <img className='mx-auto hidden lg:block' src={src} />
      </motion.div>
    </div>
  )
}

export default Doubts