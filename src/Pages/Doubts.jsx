import React, { useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com';
import configure from '../Conf/configure';
function Doubts() {
  const [name,setName]= useState('');
  const [fromemail,setFromEmail]= useState('');
  const [toemail, setToEmail]= useState('');
  const [message,setMessage]= useState('');


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
    e.preventDefault();
    console.log(name,fromemail,toemail,message);
    const templateParams={
      from_name:name,
      to_email:toemail,
      to_from:fromemail,
      message:message
    }
    console.log(templateParams);
    
    emailjs.send(configure.Service_ID,configure.Template_ID,templateParams,configure.Public_ID)
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      alert('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    });;

  };
  return (
    <div className='[mt-8rem] h-[95svh] w-full flex flex-col-reverse lg:flex-row-reverse'>
  <motion.div 
    className='w-full lg:w-[30%] h-[80%] mt-8 lg:mt-32 mx-auto lg:ml-20 p-4 bg-zinc-50 shadow-sm'
    initial={{x: "100%", y: "-100%", opacity: 0}}
    animate={{x: 0, y: 0, opacity: 1}}
    transition={{delay: 0.7, duration: 1}}
  >
    <h1 className='font-semibold text-center text-[24px] lg:text-[32px] mb-4'>Ask Your Doubts</h1>
    <form className='flex flex-col p-4'>
      <div className='mb-4'>
        <label>Enter your Rollnumber</label>
        <br/>
        <input value={name} onChange={Name} className='h-fit w-[90%] border-2 border-zinc-800' placeholder="Type here..." type="text" required />
      </div>
      <div className='mb-4'>
        <label>Enter your Email</label>
        <br/>
        <input value={fromemail} onChange={FromEmail} className='h-fit w-[90%] border-2 border-zinc-800' placeholder="Type here..." type="email" required />
      </div>
      <div className='flex flex-col my-8'>
        <label>
          <input type="radio" className='mb-4' name="subject" id="Maths" value="angadsudan453@gmail.com" onChange={ToEmail} />
          Maths
        </label>
        <label>
          <input type="radio" className='mb-4' name="subject" id="Python" value="angadsudan453@gmail.com" onChange={ToEmail} />
          Python
        </label>
        <label>
          <input type="radio" className='mb-4' name="subject" id="Front-end" value="phandomboss453@gmail.com" onChange={ToEmail} />
          Front-end
        </label>
        <label>
          <input type="radio" className='mb-4' name="subject" id="Physics" value="angadsudan453@gmail.com" onChange={ToEmail} />
          Physics
        </label>
      </div>
      <textarea value={message} onChange={Message} className='border-2 border-zinc-800 w-full' placeholder="Your Doubt.."></textarea>
      <button onClick={submitted} type="Submit" className='bg-red-600 text-white p-4 w-[60%] mx-auto rounded-lg mt-4'>Submit</button>
    </form>
  </motion.div>

  <motion.div 
    className='w-full lg:w-[40%] pt-8 lg:pt-[10rem] h-[100%]'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1.5, delay: 0.7}}
  >
    <img className='mx-auto' src="https://media.istockphoto.com/id/1596438370/vector/man-with-question-mark.jpg?s=612x612&w=0&k=20&c=5DKnRkyVsqE2E_QA_6nB2X4GZgXkBM6vOFsJL_g6Lhk=" alt="Question Image" />
  </motion.div>
</div>

  )
}

export default Doubts