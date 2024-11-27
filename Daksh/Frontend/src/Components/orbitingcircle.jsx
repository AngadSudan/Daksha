import React from 'react';
import { Github, Notebook, MessageCircle } from 'lucide-react';

const Orbitingcircle = () => {
  // Calculate positions for items on orbit
  const getOrbitPositions = (numItems, radius) => {
    return Array.from({ length: numItems }, (_, i) => {
      const angle = (i * 2 * Math.PI) / numItems;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      };
    });
  };

  return (
    <div className="w-[40%] hidden lg:flex mx-auto ml-48 min-h-full  items-center justify-center p-4">
      <div className="relative w-[min(100%,600px)] aspect-square">
        {/* Orbit tracks */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="w-[90%] h-[90%] border border-gray-100 rounded-full" />
          <div className="w-[70%] h-[70%] border border-gray-100 rounded-full absolute" /> */}
        </div>

        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-1">
            {/* Google Drive icon */}
            <h1 className="text-4xl md:text-9xl font-bold text-gray-800 tracking-tight">
              Daksh
            </h1>
          </div>
        </div>

        {/* Orbiting elements */}
        <div className="absolute inset-0">
          {/* Inner orbit */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="w-8 h-8 absolute bg-gradient-to-br from-blue-400 to-green-400 rounded" 
                 style={{ left: '50%', top: '15%', transform: 'translate(-50%, -50%)' }} />
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className="w-8 h-8 text-gray-600 absolute"
                     style={{ left: '10%', top: '50%', transform: 'translate(-50%, -50%)' }} />

          </div>

          {/* Outer orbit */}
          <div className="absolute inset-0 animate-spin-slower">
            <img src='data:image/png;base64,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' className="w-8 h-8 text-gray-600 absolute"
                     style={{ left: '10%', top: '50%', transform: 'translate(-50%, -50%)' }} />
            <img src='https://img.icons8.com/ios-filled/50/000000/instagram-new.png' className="w-8 h-8 text-gray-800 absolute"
                   style={{ left: '90%', top: '50%', transform: 'translate(-50%, -50%)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};


export { Orbitingcircle };
