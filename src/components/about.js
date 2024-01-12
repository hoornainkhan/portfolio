import React from 'react'
import { MdDraw } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

const about = () => {
  return (
    <div id='about' className='bg-light-pinky h-screen text-text-brown '>
      <h5 className='text-pinky text-base text-center pt-12'>SERVICE</h5>
      <h1 className='pt-7 text-center text-6xl font-bold'>What Can I <br /> Help You With?</h1>
      <div className="content mt-20 flex justify-center">
        <div className="card w-1/3 p-4 pl-6 border border-[#F3D1BF] flex flex-col justify-center">
          <div className='flex items-center mb-4'>
          <div className="img bg-pinky w-11 h-11 rounded-full"><MdDraw className="pl-2 pr-1" size={42} color="white"/></div>
          <div className='ml-5 font-bold text-xl'>Design</div>
          </div>
          <div>
            <div className='text-sm font-light mb-7 mt-3'>A UI/UX designer improves digital product usability and appeal, crafting intuitive interfaces that prioritize user satisfaction.</div>
            <div className='flex items-center'>
              <div className='rounded-full'><CiCirclePlus className="text-pinky rounded-full hover:bg-pinky hover:text-white" size={37} /></div>
              <div>learn more</div>
            </div>
          </div>
        </div>
        <div className="card w-1/3 p-4 pl-6 border border-[#F3D1BF] flex flex-col justify-center">
          <div className='flex items-center mb-4'>
          <div className="img bg-pinky w-11 h-11 rounded-full"><MdDeveloperMode className="pl-2 pr-2" size={42} color="white"/></div>
          <div className='ml-5 font-bold text-xl'>Development</div>
          </div>
          <div>
            <div className='text-sm font-light mb-7 mt-3'>A developer creates and implements software solutions, translating design concepts into functional and efficient code.</div>
            <div className='flex items-center'>
              <div className='rounded-full'><CiCirclePlus className="text-pinky rounded-full hover:bg-pinky hover:text-white" size={37} /></div>
              <div>learn more</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-xs text-center mt-32'>Need service? <span className='font-bold hover:text-pinky'>Get in contact</span></div>
    </div>
  )
}

export default about