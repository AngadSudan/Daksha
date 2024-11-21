import React,{useState} from 'react'
import TestCard from '../Components/TestCard/TestCard'
import src from "../Images/Chitkara.svg"
import {motion} from "framer-motion"
import axios from 'axios';
import { div } from 'framer-motion/client';
import configure from '../Conf/configure';
function Test() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [improvement,setImprovement]=useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }
    setLoading(true);
    const formData = {
      'resume': file
    }
    try {
      const response = await axios.post(`${configure.Endpoint}/Tracker`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
      },
      });    
      setResult(response.data.score);
      setImprovement(response.data.improvements);
    } catch (err) {
      setError('Error scanning resume. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-[100svh] w-full grid place-items-center'>
      <div className="max-w-2xl pt-[7rem] mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Resume ATS Scanner</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Upload Resume (PDF)</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Scanning...' : 'Scan Resume'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-4 p-4 bg-green-50 rounded">
            <h2 className="text-xl font-semibold mb-2">Analysis Result</h2>
            <div className="whitespace-pre-wrap">{result}</div>
          </div>
        )}
        { improvement && (
          <div className="mt-4 p-4 bg-yellow-50 rounded">
            <h2 className="text-xl font-semibold mb-2">Improvement Suggestions</h2>
            <ul className="list-disc pl-5">
              {improvement.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )
          
        }
      </div>
    </div>
  );
}

export default Test;