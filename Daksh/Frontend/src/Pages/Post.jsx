import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import configure from '../Conf/configure';

function Post() {
  const { id } = useParams();    
  const [notesFile, setNotesFile] = useState(null); 
  const [chapter, setChapter] = useState('');
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const proceed = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Notes', notesFile); 
    formData.append('Chapter', chapter); 
    formData.append('title', title);
    
    try {
      setLoading(true);
      setMessage({ text: '', type: '' });
      
      const response = await axios.post(
        `${configure.Endpoint}/Notes/Subject/${id}`, 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      setMessage({ text: 'Notes uploaded successfully!', type: 'success' });
      setTitle('');
      setChapter('');
      setNotesFile(null);
      
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || 'Error uploading notes', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="px-6 py-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Upload Notes
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Share your knowledge with other students
            </p>
          </div>

          {/* Form Content */}
          <div className="px-6 py-6">
            <form onSubmit={proceed} className="space-y-6">
              {/* File Upload */}
              <div className="space-y-2 ">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Notes
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2  border-dashed rounded-lg transition-colors">
                  <div className="space-y-1 text-center">
                    <div className="flex flex-col items-center">
                      <svg 
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm">
                        <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload a file</span>
                          <input 
                            type="file"
                            className="sr-only"
                            onChange={(e) => setNotesFile(e.target.files[0])}
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF up to 10MB</p>
                      {notesFile && (
                        <p className="text-sm text-green-600 mt-2">
                          Selected: {notesFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Title Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input 
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter notes title"
                  required
                />
              </div>

              {/* Chapter Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Chapter Name
                </label>
                <input 
                  type="text"
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter chapter name"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium 
                  ${loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  } transition-colors`}
              >
                {loading ? 'Uploading...' : 'Upload Notes'}
              </button>
            </form>

            {/* Feedback Message */}
            {message.text && (
              <div className={`mt-4 p-4 rounded-md ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                <p>{message.text}</p>
              </div>
            )}
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
            <span className="text-gray-700">Uploading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;