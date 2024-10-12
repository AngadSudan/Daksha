import React, { useState } from 'react'
import axios from 'axios';
function Login() {
    const [name, setname]= useState("");
    const [password, setPassword]= useState("");
    const [roll,setRoll]=useState("");
    const [email,setEmail]=useState("");
    const [year,setYear]=useState("");
    const [admin,setAdmin]=useState(false);
    const [data,setData]= useState("");

    const updateName=(e)=>{
        setname(e.target.value);
    }
    const updatepassword=(e)=>{
        setPassword(e.target.value);
    }
    const updateadmin=(e)=>{
        setAdmin(e.target.value);
    }
    const updateroll=(e)=>{
        setRoll(e.target.value);
    }
    const updateemail=(e)=>{
        setEmail(e.target.value);
    }
    const updateyear=(e)=>{
        setYear(e.target.value);
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(name, password);
        
        const value={name:name, password:password}
        setData(value);
        console.log(data);
        
        axios.post('/Login',value)
        .then(()=>{alert("Logged In")
           res.status(200).send("Redirection successful")
        })
        .catch(()=>{
            alert("Didn't Log In")
        })
    }

    //username,rollnumber,email,year,password,admin
  return (

    <div className=' h-[100svh] pt-[9rem] flex justify-around'>
        <div className='h-[90%] gridw-[50%]' >
            <form className='flex mt-[4vh] w-[80%] mx-auto flex-col' method="POST">
                <label >
                    Rollnumber: 
                    <input className='mb-8 border-2 border-gray-200' name='username' value={name} onChange={updateName} type='text' placeholder='RollNumber' />
                </label>
                <label >
                    Email:
                    <input className='mb-8 border-2 border-gray-200' name="email" value={roll} onChange={updateroll} type='text' placeholder='email' />
                </label>
                <label >
                    Password
                    <input  className='mb-8 border-2 border-gray-200' type="password" name="password" value={password} onChange={updatepassword} placeholder='password' />
                </label>
                <label >
                    Teacher:
                    <input className='mb-8 border-2 border-gray-200'  type="checkbox" name="admin" value={admin} onChange={updateadmin}  />
                </label>
                <label >
                    year:
                    <input className='mb-8 border-2 border-gray-200'  type="number" name="year" value={year} onChange={updateyear} />
                </label>
                
                <button className='mb-4' type='Submit' onClick={submit} ></button>
            </form>

        </div>
            <div>Hello Sir</div>
    </div>
  )
}

export default Login