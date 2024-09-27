import React,{useState} from 'react'
function TodoItem({Index,Status, Todo}) {

    const [status,setStatus]= useState(!Status);
    const [edit, setEdit]= useState(false);
    const [todo, setTodo]= useState(Todo);
    const updateStatus=()=>{
        setStatus(!status);
    }
    const UpdateTodo=(e)=>{
        setTodo(e.target.value)
    }
    const Delete=()=>{
        localStorage.removeItem(Index+1);
        alert(`element with index ${Index} deleted`);
    }
    const update=()=>{
        setEdit(!edit);
    }
  return (
    <div className={`${status? "bg-green-300 text-red-800 ":"bg-pink-300"} flex justify-evenly w-[70%] rounded-full h-fit p-4 mx-32 mb-4`}>
        <input  type="checkbox" value={Status} onChange={updateStatus}  />
        <input type="text"  className={`w-[90%] bg-transparent text-[1.6vw] ${status? "line-through font-bold":""}`} value={todo} onChange={UpdateTodo} readOnly={!edit} />
        <div>
            <button  onClick={update} className='mr-8'>{!edit? "🖊":"✔"}</button>
            <button  onClick={Delete}>❌ </button>
        </div>
    </div>
  )
}

export default TodoItem