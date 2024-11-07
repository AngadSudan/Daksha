import React,{useState, useEffect} from 'react'
import {motion} from "framer-motion";

function AddToDo() {
    const [Task,setTask]= useState("");
    const [data,setData]=useState([]);
    const updateTask=(e)=>{
      setTask(e.target.value)
    }
    const Delete=(index)=>{
      localStorage.removeItem(index+1);
      setCounter(counter-1);
    }
    const subtodo=()=>{
      alert('This is a subtodo');
    }
    const [counter, setCounter]= useState(0);
    const submission=(e)=>{
      e.preventDefault();
      setCounter(counter+1);
      console.log('Task is '+Task);
      if(Task===""){
        alert("can't enter an empty task");
        return ;
      }else{
        const B=[localStorage.length,Task,false];
        localStorage.setItem(localStorage.length +1,B);
        setTask("");
      }
    }
    useEffect(()=>{
      //get data from database
      const dat=[]
      for(let i=1;i<=localStorage.length;i++){
        dat.push(localStorage.getItem(i).split(","))
      }
      console.log(dat);
      setData(dat);
      
    },[counter])
  return (
    <motion.form
     onSubmit={submission} 
     className='h-[6rem] mt-8 w-full p-4'
     initial={{opacity:0, x:"-100%"}}
     animate={{opacity:1, x:0}}
     transition={{duration:2, delay:0.5, stiffness:160, type:"spring"}}
     >
      <div className='h-full ml-32  w-full rounded-full  flex gap-[30px]'>
        <input  type='text' value={Task} onChange={updateTask} className=' border-2 border-gray-800 bg-red-200 w-[60%] h-[70%] my-auto' />
        <button type='submit' className='bg-red-600 font-semibold rounded-full my-2 w-[10%] text-white text-[2.4vw]'>Add</button>
      </div>
    </motion.form>
  )
}

export default AddToDo;