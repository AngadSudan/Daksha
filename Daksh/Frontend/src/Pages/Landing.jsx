import React, { useEffect, useState } from 'react'
import {Header} from '../Components/index'
import Spline from '@splinetool/react-spline';
import about from '../Images/homepage.png'
import { motion } from 'framer-motion';
import IITD from '../Images/IITD.png'
import BITSPILANI from '../Images/BITSPILANI.png'
import uov from '../Images/uov.png'
import VIT from '../Images/VIT.png'
import frms from '../Images/frms.png'
import { AnimatedTooltip } from '../Components/ui/animated-tooltip';

function wordWriter(word,speed=40){
  const initial=[]
  const target = []; 
  const flag= false;
  for(let i=0;i<word.length;i++){
    target.push(word[i]);
    initial.push('A');
  }
  const [displayedLetters, setDisplayedLetters] = useState(initial); 
  const [index, setIndex] = useState(0); 
  useEffect(() => {

    if (index <= target.length) {
      if(target[index]===' '){
        setIndex(index+1);
        return ' ';
      }
      const interval = setInterval(() => {
        setDisplayedLetters((prevLetters) => {
          const currentLetter = prevLetters[index];
          const targetLetter = target[index];
          if (currentLetter === ' ') {
            clearInterval(interval);
            setIndex(index + 1);
            return ' ';
        }else{
          if (currentLetter === targetLetter) {
            clearInterval(interval);
            setIndex(index + 1);
            return prevLetters;
          }
          const nextLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
          const updatedLetters = [...prevLetters];
          updatedLetters[index] = nextLetter; 
          return updatedLetters;
        }
        });
      }, speed); 
      return () => clearInterval(interval);
    }
  }, [index, target]);
  return displayedLetters;
}
function Landing() {
  const items= [{id:1,name:'IIT DELHI',image:IITD},{id:2,name:'BITS PILANI',image:BITSPILANI},{id:3,name:'University of Virginia',image:uov},{id:4,name:'VIT',image:VIT},{id:5,name:'FRMS',image:frms}]
  
  return (
    <div className='h-[100svh]'>
      {/* hero section  */}
      <div className='h-[90svh] w-full bg-[#ffe8c1] flex flex-col justify-center'  >
        <h1 className='text-center mx-auto text-6xl text-wrap md:text-7xl font-bold'>{wordWriter('DAKSH')}</h1>
        <motion.p
        initial={{x:"-100%", opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{delay:2.25, duration:1}}
        className='text-center mx-auto text-xl text-wrap font-bold'
        >A OneStop Solution For Notes Management</motion.p>
      </div>
      {/* our partners  */}
      <div className='w-fullh-fit bg-[#d7b579] p-8 '>
        <h1 className='text-center text-4xl font-bold '>Our Partners</h1>
        <div className='md:w-[70%] w-[90%] -z-10 h-fit p-8 mx-auto md:flex '>
          <AnimatedTooltip  items={items} />
        </div>
      </div>
      <div className='h-[100svh] w-screen grid place-items-center bg-[#ffe8c1]' >
        <h1 className='text-center text-4xl font-bold '>Our Reviews</h1>
      </div>
      <div className='h-[100svh] w-screen grid place-items-center bg-[#d7b579]'>
        Contact Us
      </div>
    </div>
  )
}

export default Landing;