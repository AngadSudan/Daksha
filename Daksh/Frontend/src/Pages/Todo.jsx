import React, { useEffect, useState, useRef } from 'react'
import TodoItem from '../Components/TodoItem/TodoItem';
import { motion } from 'framer-motion';
import axios from 'axios';
import configure from '../Conf/configure.js';
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
    axios.delete(`${configure.Endpoint}/Todo/${localStorage.getItem('user')}/${id}`);
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
    const response = await axios.get(`${configure.Endpoint}/Todo/${localStorage.getItem('user')}`)
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
    const B={Task,Status:false,userid:localStorage.getItem('user')};
    await axios.post(`${configure.Endpoint}/Todo`, B);
    setTask("");
    setCounter(counter+1);
  }
  useEffect(()=>{
    setTimeout(() => {
      if(localStorage.getItem('user')===null){
        alert('please login or signup first')
        window.location.href = "/";
      }else{
        dataQuery();
      }
    },100);
  },[counter]);


  return (
    <div className="overflow-x-hidden relative min-h-screen">
  {/* Header */}
  <h1 className="text-center text-3xl md:text-5xl font-semibold mt-8 text-gray-800">
    Here's The Task
  </h1>

  {/* Decorative Elements */}
  {/* <div className="h-[300px] w-[80px] -z-10 absolute top-0 left-[10px] rounded-b-full bg-red-600 md:h-[500px] md:w-[100px]" />
  <div className="h-[300px] w-[80px] -z-10 fixed bottom-0 right-[10px] rounded-t-full bg-orange-500 md:h-[500px] md:w-[100px]" /> */}

  {/* Task Input Form */}
  <motion.form
    onSubmit={submission}
    className="w-full p-4 flex justify-center mt-8"
    initial={{ opacity: 0, x: "-100%" }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2, delay: 0.5, stiffness: 160, type: "spring" }}
  >
    <div className="flex flex-wrap items-center justify-between w-full max-w-3xl gap-4">
      {/* Input Field */}
      <input
        type="text"
        value={Task}
        onChange={updateTask}
        className="flex-grow border border-gray-300 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-lg shadow-sm w-full md:w-auto"
        placeholder="Enter your task..."
      />
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-700 transition-all duration-200 text-white font-semibold rounded-full px-6 py-2 shadow-md text-sm md:text-base"
      >
        Add
      </button>
    </div>
  </motion.form>

  {/* Task List */}
  <div className="mt-8 px-4">
    {data && data.map((dataElement, index) => {
          return (
            <motion.div
  key={index}
  className="flex items-center gap-3 mx-auto w-fit max-w-3xl mb-4 p-4 bg-white shadow-md rounded-lg"
  initial={{ opacity: 0, x: "-100%" }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.5,
    delay: 0.5,
    stiffness: 80,
    mass: 1,
    type: "spring",
  }}
>
  {/* Todo Item - Visible on all screens */}
  <div className="flex gap-1">
    <TodoItem
      Index={index}
      Todo={dataElement.Task}
      Status={!dataElement.Status}
    />
  </div>

  {/* Subtodo button - only visible on laptop/desktop (min-width: 1024px) */}
  <button
    onClick={subtodo}
    className="hidden lg:block text-2xl md:text-4xl text-green-500 hover:scale-110 transition-transform"
    aria-label="Add subtask"
  >
    ➕
  </button>

  {/* Delete button - visible on all devices */}
  <button
    onClick={() => Delete(index)}
    className="text-xl md:text-3xl text-red-500 hover:scale-110 transition-transform"
    aria-label="Delete task"
  >
    🗑️
  </button>
</motion.div>
          );
      })}
  </div>

  <div
    className={`flex flex-col w-[60%] md:w-[30%] fixed top-[15rem] right-[.5rem] ${visibility} bg-white p-4 rounded-lg shadow-lg`}
  >
    <textarea
      onChange={(e) => setSubtodo(e.target.value)}
      className="w-full h-[40vh] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
      value={Subtodo}
      placeholder="Add details for the subtask..."
    />
    <button
      onClick={() => alert("Saved")}
      className="mt-4 bg-red-600 hover:bg-red-700 transition-all duration-200 text-white font-semibold rounded-full py-2 w-1/2 mx-auto"
    >
      Save
    </button>
  </div>
</div>

  )
}

export default Todo