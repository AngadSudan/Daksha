import React, { useEffect, useState } from 'react'
import TodoItem from '../Components/TodoItem/TodoItem';
import { motion } from 'framer-motion';
function Todo() {
  const [Task,setTask]= useState("");
  const [data,setData]=useState([]);
  const [Subtodo,setSubtodo]=useState([]);

  const updateTask=(e)=>{
    setTask(e.target.value)
  }

  const Delete=(index)=>{
    localStorage.removeItem(index+1);
    setCounter(counter-1);
}

  const subtodo=()=>{
    const value=prompt("Enter the nested todo");
    const data=[value]
    setSubtodo(data);
  }
  const [counter, setCounter]= useState(0);
  const submission=(e)=>{
    e.preventDefault();
    setCounter(counter+1);
    const B=[localStorage.length,Task,false,Subtodo];
    localStorage.setItem(localStorage.length +1,B);
    setTask("");
  }
  useEffect(()=>{
    const dat=[]
    for(let i=1;i<=localStorage.length;i++){
      dat.push(localStorage.getItem(i).split(","))
    }
    setData(dat);
    
  },[counter])
  return (
    <div className='overflow-x-hidden'>
      <h1 className='text-center text-5xl font-semibold mt-8 '>Here's The Task</h1>
      <div className='h-[500px] w-[100px] -z-40 absolute top-0 left-[10px] rounded-b-full  bg-orange-500'></div>
      <div className='h-[500px] w-[100px] -z-40 fixed bottom-0 right-[30px] rounded-t-full  bg-red-600'></div>
      <motion.form
      onSubmit={submission} 
      className='h-[6rem] mt-8 w-full p-4'
      initial={{opacity:0, x:"-100%"}}
      animate={{opacity:1, x:0}}
      transition={{duration:2, delay:0.5, stiffness:160, type:"spring"}}
      >
        <div className='h-full ml-52  w-full rounded-full  flex gap-[30px]'>
          <input  type='text' value={Task} onChange={updateTask} className=' border-2 border-gray-800 bg-red-200 w-[60%] h-[70%] my-auto' />
          <button type='submit' className='bg-red-600 font-semibold rounded-full my-2 w-[10%] text-white text-[2.4vw]'>Add</button>
        </div>
      </motion.form>
    
      {
        data.map((dataelement,index) => 
        (  <motion.div 
        className='flex gap-[35px] ml-80 mb-4'
        initial={{opacity:0, x:"-100%"}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, delay:0.5, stiffness:80, mass:1, type:"spring"}}
        > 
          <TodoItem Index={index} Todo={dataelement[1]} Subtodo={Subtodo}  Status={dataelement[2]} /> 
          <button onClick={subtodo} className='text-5xl my-auto' >➕</button>
          <button className='text-5xl ml-4 my-auto' onClick={()=>{Delete(index)}}>🗑️</button> 
          </motion.div>))
      }
    </div>
  )
}

export default Todo