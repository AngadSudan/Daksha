import React, { useEffect, useState, useRef } from 'react'
import TodoItem from '../Components/TodoItem/TodoItem';
import { motion } from 'framer-motion';
import axios from 'axios';
function Todo() {
  const [Task,setTask]= useState("");
  const [data,setData]=useState([]);
  const [Subtodo,setSubtodo]=useState("");
  const [visibility,setVisibility]=useState("hidden");
  
  const updateTask=(e)=>{
    setTask(e.target.value)
  }
  const Delete=(index)=>{
    const id= data[index]._id
    axios.delete(`http://localhost:8000/Todo/${id}`);
    alert('deleted')
    setCounter(counter-1);
}
  const subtodo=()=>{
    //when i click on button it does a fetch from the api and displays the content of the todowhich was clicked
    if(visibility==="hidden"){
      setVisibility("block");
    }else{
      setVisibility("hidden");
    }
  }

  const dataQuery=async()=>{
    const response = await axios.get('http://localhost:8000/Todo')
      .then((res) => res.data)
      .catch((err) => {
        alert('error occured');
        console.error(err);
      });
    setData(response);
  }
  const [counter, setCounter]= useState(0);
  const submission=async(e)=>{
    e.preventDefault();
    const B={Task,Status:false};
    await axios.post('http://localhost:8000/Todo', B);
    setTask("");
    setCounter(counter+1);
  }
  useEffect(()=>{
    dataQuery();
  },[counter]);


  return (
    <div className='overflow-x-hidden'>
      <h1 className='text-center text-5xl font-semibold mt-8 '>Here's The Task</h1>
      <div className='h-[500px] w-[100px] -z-40 absolute top-0 left-[10px] rounded-b-full  bg-red-600' />
      <div className='h-[500px] w-[100px] -z-40 fixed bottom-0 right-[30px] rounded-t-full  bg-orange-500' />

      <motion.form
      onSubmit={submission} 
      className='h-[6rem] mt-8 w-full p-4'
      initial={{opacity:0, x:"-100%"}}
      animate={{opacity:1, x:0}}
      transition={{duration:2, delay:0.5, stiffness:160, type:"spring"}}
      >
        <div className='h-full ml-52  w-full rounded-full  flex gap-[30px]'>
          <input  type='text'
          value={Task} 
          onChange={updateTask} 
          className=' border-2 border-gray-800 bg-red-200 w-[60%] h-[70%] my-auto' />
          <button 
          type='submit' 
          className='bg-red-600 font-semibold rounded-full my-2 w-[10%] text-white text-[2.4vw]'>
            Add
          </button>
        </div>
      </motion.form>
    
      {
        data.map((dataelement,index) => {
          if(dataelement[1]!==''){
            return(
              <motion.div 
        className='flex gap-[35px] ml-80 mb-4'
        initial={{opacity:0, x:"-100%"}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, delay:0.5, stiffness:80, mass:1, type:"spring"}}
        > 
          <TodoItem 
          Index={index} 
          Todo={dataelement.Task} 
          // Subtodo={Subtodo}  
          Status={!dataelement.Status} /> 
          <button onClick={subtodo} className='text-5xl my-auto' >➕</button>
          <div></div>
          <button className='text-5xl ml-4 my-auto' onClick={()=>{Delete(index)}}>🗑️</button> 
          </motion.div>)
          } 
          })
      }
      <div className={`flex flex-col w-[20%] fixed top-[4rem] right-[1rem] ${visibility}`}>
              <textarea 
              onChange={(e)=>{setSubtodo(e.target.value)}} 
              className='w-[100%] h-[50svh] border-2 border-gray-800 ' 
              value={Subtodo} />
              <button 
              onClick={()=>{alert('saved')}}
              className='bg-red-600 font-semibold rounded-full mx-auto w-[40%] h-8 text-white'>Save</button>
            </div>
    </div>
  )
}

export default Todo