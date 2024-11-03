import React, { useContext, useState } from 'react'
import UserContext from '../Context/User.context'
import { NavLink,useParams } from 'react-router-dom';
function Subject() {
  const {Admin}=useContext(UserContext); //Add a delete option as well
  const {id}=useParams();
  const [links,setlinks]=useState([]);
  const SubjectData=()=>{
    //another api fetch to get chapter pdf links from clodinary
    setlinks(['lecture1', "https://res.cloudinary.com/djy3ewpb8/raw/upload/v1730446625/lcvv3qzoxoh54bwll9m7.html", "lecture3"]);

  }


  //retrieve this data by an api call from backend lateron
  const chapters=['electrodynamics','fiber optics','semiconductor','lasers']
  return (
    <div className='flex gap-[3rem]'> 
    <div className='pt-[8rem] bg-black text-white w-1/4 h-[99svh] '>
      {
        chapters.map((chapter,index)=>{
          return(
            <button onClick={SubjectData} className='w-full h-fit p-4 rounded-md bg-white text-black my-2 '>
              {chapter}
            </button>
          )
        })
      }
    </div>
    <div className='pt-[8rem] bg-red-900 p-4 text-white w-[70%] h-[99svh] '>
      {
        links.map((link,index)=>{          
          return(
            <div className='h-[5rem] w-3/4 bg-white text-black text-center py-auto my-4 mx-auto'>
              <a href={link} className='w-full h-fit p-4 rounded-md  my-2 '>
                {index}
              </a>
            </div>
          )
        })
      }
    </div>
    {Admin && 
      <NavLink to='upload'>
        <button className='h-[4rem] w-[4rem] grid place-items-center rounded-full border-2 border-gray-500 fixed bottom-[10rem] right-[3.5rem]'>
          ➕
        </button>
      </NavLink>
    }
    </div>
  )
}

export default Subject