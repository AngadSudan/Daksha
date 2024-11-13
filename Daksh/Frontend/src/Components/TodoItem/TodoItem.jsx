import React,{useState} from 'react'
import {motion} from 'framer-motion'
function TodoItem({Index,Status, Todo}, visibility) {

    const [status,setStatus]= useState(!Status);
    const [edit, setEdit]= useState(false);
    const [todo, setTodo]= useState(Todo);
    const updateStatus=()=>{
        setStatus(!status);
    }
    const UpdateTodo=(e)=>{
        setTodo(e.target.value)
    }
    const update=()=>{
        setEdit(!edit);
    }
  return (
    <>
        <motion.div
        className={`${status? "bg-green-300 text-red-800 ":"bg-red-300"} border-black border-2 flex justify-evenly w-[60%] rounded-2xl h-[5rem] p-4 `}
        initial={{opacity:0, x:"-100%"}}
        animate={{opacity:1, x:0}}
        transition={{duration:2, delay:0.5, stiffness:160, type:"spring"}}
        >
            <input  type="checkbox" className='w-8 h-8 my-auto mr-8'  value={Status} onChange={updateStatus}  />
            <input type="text"  className={`w-[90%] bg-transparent text-[2vw] ${status? "line-through font-bold":""}`} value={todo} onChange={UpdateTodo} readOnly={!edit} />
            <button  onClick={update} className='ml-4 text-4xl'>{!edit? "🖊":"✔"}</button>
        </motion.div>

    </>
  )
}

export default TodoItem