import React, { useContext, useState } from 'react'
import UserContext from '../Context/User.context'
import { NavLink,useParams } from 'react-router-dom';
function Subject() {
  const {Admin}=useContext(UserContext); //Add a delete option as well
  const {id}=useParams();
  const [links,setlinks]=useState([]);
  const SubjectData=()=>{
    //another api fetch to get chapter pdf links from clodinary
    setlinks([
      {title:'lecture1',link:`#`},
      {title:'lecture2',link:"https://res.cloudinary.com/djy3ewpb8/raw/upload/v1730446625/lcvv3qzoxoh54bwll9m7.html"}, 
      {title:'lecture3',link:`#`}
    ]);
  }

  links.map((data,index)=>{
    console.log(data.link,data.title);
    
  })
  //retrieve this data by an api call from backend lateron
  const chapters=['HTML','CSS','JS']
  return (
    <div className='flex gap-[3rem]'> 
    <div className='pt-[8rem] px-4 w-1/4 border-r-2 border-gray-300 h-[99svh] '>
      {
        chapters.map((chapter,index)=>{
          return(
            <button onClick={SubjectData} className='w-full border-2 border-gray-200 hover:bg-red-300 h-fit p-4 rounded-md bg-white text-black my-2 '>
              {chapter}
            </button>
          )
        })
      }
    </div>
    <div className='pt-[8rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[70%] h-[99svh]'>
      {
        links.map((data,index)=>{       
          return(
            <div className='h-[200px] w-[250px] rounded-xl flex flex-col-reverse border-gray-300 border-2 bg-white text-black text-center py-auto my-4 mx-auto'>
              <div className='h-[3rem] border-gray-300 border-2 w-[70%] mx-auto flex items-center hover:text-white hover:bg-red-400 mb-2'>
                <a key={index} href={data.link} className=' w-full h-fit p-4 rounded-md  my-2 '>
                  {data.title}
                </a>
              </div>
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