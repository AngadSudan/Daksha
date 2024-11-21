import React, { useContext, useState } from 'react'
import UserContext from '../Context/User.context'
import { NavLink,useParams } from 'react-router-dom';
import axios from 'axios';
import configure from '../Conf/configure';
function Subject() {

  const {Admin}=useContext(UserContext); //Add a delete option as well
  const {id}=useParams();
  console.log('The id is', id);
  
  const [links,setlinks]=useState([]);
  const [chapters,setChapters]=useState([]);
  const SubjectData=async (chapter)=>{
    const link=(await axios.get(`${configure.Endpoint}/notes/subject/${id}/${chapter}`)).data;
    console.log(link);
    setlinks(link);
    links.map((data,index)=>{
      console.log(data.Url,data.Chapter);
    })
  }

  const retrievedata= async()=>{      
      // console.log('data before');
      const data= await axios.get(`${configure.Endpoint}/notes/subject/${id}`);
      setChapters(data.data);
      console.log('data after ',data.data);
  }

  useState(()=>{
      console.log('data retrieval was called');
      retrievedata();     
  },[window.location.href])
    return (
    <div className='flex gap-[3rem]'> 
      <div className='pt-[8rem] px-4 w-1/4 border-r-2 border-gray-300 h-[99svh]'>
        {chapters.map((chapter,index)=>{
            return(
              <button 
              onClick={()=>{SubjectData(chapter)}} 
              key={index} 
              className='w-full border-2 border-gray-200 hover:bg-red-300 h-fit p-4 rounded-md bg-white text-black my-2'
              >
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
                  <a key={index} href={data.Url} download className=' w-full h-fit p-4 rounded-md  my-2 '>
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