import React, { useEffect, useState } from 'react'
import TodoItem from '../Components/TodoItem/TodoItem';
import { motion } from 'framer-motion';
function Todo() {

  const [Status, setStatus ]= useState(false);
  const [Task,setTask]= useState("");
  const [data,setData]=useState([]);
  const [visibility, setVisibility]= useState(100);
  // Created onchange function which changes values as per need.

  const updateTask=(e)=>{
    setTask(e.target.value)
  }
  const updateStatus=()=>{
    if(Status==true){
      setStatus(false);
    }else{
      setStatus(true);
    }
  }
  const Delete=(index)=>{
    localStorage.removeItem(index+1);
    setCounter(counter-1);
}
  const [counter, setCounter]= useState(0);

  //Form submission function
  const Change=(e)=>{
    console.log("button was clicked");
    
    if(visibility===0){
      setVisibility(100);
    }else{
      setVisibility(0);
    }
  }
  const submission=(e)=>{
    e.preventDefault();
    setCounter(counter+1);
    const B=[localStorage.length,Task,Status];
    localStorage.setItem(localStorage.length +1,B);
    setTask("");
  }
  useEffect(()=>{
    const dat=[]
    for(let i=1;i<=localStorage.length;i++){
      dat.push(localStorage.getItem(i).split(","))
    }
    console.log(dat);
    setData(dat);
    
  },[counter])
  return (
    <>
    <motion.form
     onSubmit={submission} 
     className='h-[6rem] mt-8 w-full p-4'
     initial={{opacity:0, x:"-100%"}}
     animate={{opacity:1, x:0}}
     transition={{duration:2, delay:0.5, stiffness:160, type:"spring"}}
     >
      <div className='h-full w-full rounded-full border-2 border-gray-200  flex justify-evenly'>
        <input  type="checkbox" value={Status} onChange={updateStatus}  />
        <input  type='text' value={Task} onChange={updateTask} className=' border-2 border-gray-200 w-[60%] h-[70%] my-auto' />
        <button type='submit' className='bg-red-600 font-semibold my-2 w-[15%] text-white text-[2.4vw]'>Add Task</button>
      </div>
    </motion.form>
    
    {
    data.map((dataelement,index) => 
    (  <motion.div 
    className='flex justify-around'
    initial={{opacity:0, x:"-100%"}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5, delay:0.5, stiffness:80, mass:1, type:"spring"}}
    > 
      <TodoItem onClick={()=>{alert("done"); Change()}} Index={index} Todo={dataelement[1]}  Status={dataelement[2]} /> 
      <button className='text-5xl ml-4' onClick={()=>{Delete(index)}}>🚮</button> 
      </motion.div>))
    }
      {/* <div className={`w-[30%] h-[90svh] mt-32 translate-x-[${visibility}%] absolute top-0 right-0 bg-green-400`}>
        This is an indeph To-do
      </div> */}
    </>
  )
}

export default Todo