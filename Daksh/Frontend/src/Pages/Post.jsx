import axios from 'axios'
import React,{useState} from 'react'
import { useParams } from 'react-router';

function Post() {
  const { id } = useParams();    
  const [notesFile, setNotesFile] = useState(null); 
  const [chapter, setChapter] = useState('');

  const proceed = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Notes', notesFile); 
    formData.append('Chapter', chapter); 
    try {
      const response = await axios.post(`http://localhost:8000/Notes/Subject/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });
      alert('done and dusted');
      console.log('Success:', response.data); // Handle success
    } catch (error) {
      alert('error was there');
      console.error('Error uploading file:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <div className='h-[100svh] pt-[7rem] '>
      <form onSubmit={proceed} className='flex flex-col'>
        <input 
          className='h-[2rem] w-[60%] border-2 border-black mt-8' 
          type="file" 
          name="Notes" 
          onChange={(e) => setNotesFile(e.target.files[0])}
          required 
        />
        <input 
          className='h-[2rem] w-[60%] border-2 border-black mt-8' 
          type="text" 
          name='Chapter' 
          value={chapter} 
          onChange={(e) => setChapter(e.target.value)} 
          required 
        />
        <button type="submit">Submit Here</button> 
      </form>
    </div>
  );
}

export default Post;