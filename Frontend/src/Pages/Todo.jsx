import React, { useEffect, useState } from 'react'
import TodoItem from '../Components/TodoItem/TodoItem';

function Todo() {

  const [Status, setStatus ]= useState(false);
  const [Task,setTask]= useState("");
  const [data,setData]=useState([]);
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
  const [counter, setCounter]= useState(0);

  //Form submission function
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
    <form onSubmit={submission} className='h-[6rem] mt-8 w-full p-4'>
      <div className='h-full w-full rounded-full border-2 border-gray-200  flex justify-evenly'>
        <input  type="checkbox" value={Status} onChange={updateStatus}  />
        <input  type='text' value={Task} onChange={updateTask} className=' border-2 border-gray-200 w-[60%] h-[70%] my-auto' />
        <button type='submit' className='bg-red-600 my-2 w-[15%] text-white text-xl'>Add Task</button>
      </div>
    </form>
    
    {data.map((dataelement,index) => (<TodoItem Index={index} Todo={dataelement[1]} Status={dataelement[2]} />))}
    </>
  )
}

export default Todo