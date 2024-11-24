import React, { useState, useContext } from 'react'
import src from '../Images/Login_Icon.png'
import axios from 'axios';
import configure from '../Conf/configure';
function Signup() {
    const [password, setPassword]= useState("");
    const [email,setEmail]=useState("");
    const [year,setYear]=useState("");
    const [admin,setAdmin]=useState(false);
    const [rollnumber,setrollnumber]=useState("");

    const updatepassword=(e)=>{
        setPassword(e.target.value);
    }
    const updateadmin=()=>{
        setAdmin(!admin);
    }
    
    const updateemail=(e)=>{
        setEmail(e.target.value);
    }
    const updateyear=(e)=>{
        setYear(e.target.value);
    }
    const submit=(e)=>{
        e.preventDefault(); 
        const value={
            email, 
            password:password,
            rollnumber,
            year:year,
            admin
        }        
        axios.post(`${configure.Endpoint}/Signup`, value,{
            withCredentials: true  
        })
        .then((response) => {  
            console.log(response.data); 
            localStorage.setItem('sessionId',true);
            window.location.href = "/";  
        })
        .catch((error) => {  
            console.error(error);   
            alert("Didn't SignUp");
        });
    }
  return (
  <div className="min-h-screen p-4 flex flex-col lg:flex-row justify-center items-center bg-login bg-cover overflow-hidden">
    <div className="w-full lg:w-[40%] max-w-lg p-8 bg-gray-100 shadow-2xl rounded-lg opacity-85">
      <h1 className="text-4xl font-bold mb-4">Hi There!</h1>
      <p className="text-lg mb-6">Join us and start learning!</p>
      <form className="flex flex-col gap-6" method="POST">

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Email:</span>
          <input
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            value={email}
            onChange={updateemail}
            type="text"
            placeholder="Enter your email"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Rollnumber :</span>
          <input
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="rollnumber"
            value={rollnumber}
            onChange={(e)=>{setrollnumber(e.target.value)}}
            type="text"
            placeholder="Enter your email"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Password:</span>
          <input
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            value={password}
            onChange={updatepassword}
            placeholder="Enter your password"
          />
        </label>

        <label className="flex items-center gap-3">
          <input
            className="border border-gray-300 focus:ring-blue-500"
            type="checkbox"
            name="admin"
            value={admin}
            onChange={updateadmin}
          />
          <span>Teacher</span>
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Year:</span>
          <input
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            name="year"
            value={year}
            onChange={updateyear}
          />
        </label>

        <button
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          type="submit"
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  </div>

  )
}

export default Signup