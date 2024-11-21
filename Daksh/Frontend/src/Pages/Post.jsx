import axios from 'axios'
import React,{useState} from 'react'
import { useParams } from 'react-router';
import configure from '../Conf/configure';

function Post() {
  const { id } = useParams();    
  const [notesFile, setNotesFile] = useState(null); 
  const [chapter, setChapter] = useState('');
  const [loading,setloading]=useState(false);
  const [title,setTitle]=useState('');
  const proceed = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Notes', notesFile); 
    formData.append('Chapter', chapter); 
    formData.append('title',title);
    try {
      setloading(true);
      const response = await axios.post(`${configure.Endpoint}/Notes/Subject/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });
      alert('done and dusted');
      setloading(false);
      console.log('Success:', response.data); // Handle success
    } catch (error) {
      setloading(false);
      alert('error was there');
      console.error('Error uploading file:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <div className='h-[100svh] pt-[7rem] '>
      <div className='mx-auto h-full w-[80%] grid place-items-center p-5'>
        <form onSubmit={proceed} className='flex w-full my-auto flex-col'>
          <input 
            className='h-[2rem] border-2 mx-auto border-gray-300 mt-8' 
            type="file" 
            name="Notes" 
            onChange={(e) => setNotesFile(e.target.files[0])}
            required 
          />
          <input 
            className='h-[2rem] w-[40%] p-4 border-2 mx-auto border-gray-300 mt-8' 
            type="text" 
            name="title"
            value={title}
            placeholder='Write Title' 
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
          <input 
            className='h-[2rem] w-[40%] p-4 border-2 mx-auto border-gray-300 mt-8' 
            type="text" 
            name='Chapter' 
            placeholder='Chapter Name'
            value={chapter} 
            onChange={(e) => setChapter(e.target.value)} 
            required 
            />
          <button 
            type="submit" 
            className='h-[3rem] w-[40%] border-2 mx-auto border-gray-300 mt-8 hover:bg-red-500'
          >Submit Here</button> 
        </form>
      </div>
      {loading && <div className='absolute top-[9rem] right-0 p-4 bg-white text-3xl text-bold border-2 border-gray-300'>
        Uploading...
      </div>}
    </div>
  );
}

export default Post;