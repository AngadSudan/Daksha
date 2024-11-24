import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import configure from '../Conf/configure';

function Subject() {
  const Admin= localStorage.getItem('adminID');
  const { id } = useParams();
  const [links, setLinks] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [activeChapter, setActiveChapter] = useState(null);
  const [loading, setLoading] = useState(false);

  const SubjectData = async (chapter) => {
    console.log(Admin);
    
    try {
      setLoading(true);
      setActiveChapter(chapter);
      const link = (await axios.get(`${configure.Endpoint}/notes/subject/${id}/${chapter}`)).data;
      setLinks(link);
    } catch (error) {
      console.error('Error fetching subject data:', error);
    } finally {
      setLoading(false);
    }
  };

  const retrieveData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`${configure.Endpoint}/notes/subject/${id}`);
      setChapters(data.data);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    retrieveData();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#ffe8c1]">
      <div className="max-w-[1440px] mx-auto px-4 pt-20 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Chapters
              </h2>
              <div className="space-y-2">
                {chapters.map((chapter, index) => (
                  <button
                    onClick={() => SubjectData(chapter)}
                    key={index}
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-200 text-left font-medium
                      ${activeChapter === chapter
                        ? 'bg-orange-100 text-orange-700 border-l-4 border-orange-500'
                        : 'hover:bg-orange-50 text-gray-700 hover:text-orange-600'
                      }`}
                  >
                    {chapter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeChapter && (
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Notes for {activeChapter}
              </h1>
            )}
            
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {links.map((data, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                  >
                    {/* Preview Area */}
                    <div className="h-40 bg-orange-50 flex items-center justify-center border-b border-gray-100">
                      <svg
                        className="w-16 h-16 text-orange-300 group-hover:text-orange-400 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-800 mb-2 truncate">
                        {data.title}
                      </h3>
                      <a
                        href={data.Url}
                        download
                        className="inline-block w-full py-2 px-4 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors duration-200 text-center font-medium"
                      >
                        Download Notes
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {links.length === 0 && !loading && activeChapter && (
              <div className="text-center py-12">
                <p className="text-gray-600">No notes available for this chapter yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Add Button */}
        {Admin==='true' && (
          <NavLink to="upload">
            <button className="fixed bottom-40 right-12 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-2xl">
              <span className="transform transition-transform hover:scale-110">+</span>
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Subject;