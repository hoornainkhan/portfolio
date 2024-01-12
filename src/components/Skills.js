import React from 'react';
import Html from '../assets/HTML 1.png';
import css from '../assets/CSS 1.png';
import js from '../assets/JS 1.png';
import react from '../assets/REACT 1.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';

const Skills = () => {
  return (
    <div id='skills' className='h-screen bg-[#F9E5DA] text-text-brown'>
      <h5 className='text text-pinky text-base text-center pt-12'>SKILLS</h5>
      <h1 className='pt-7 text-center text-6xl font-bold'>What Do I Know?</h1>
      <div className='flex flex-wrap justify-around w-4/5 m-auto mt-36'>
        {/* HTML */}
        <div>
          <img className='w-32  rounded  hover:scale-110 shadow-custom' src={Html} alt="" />
          <h2 className='text-center mt-2 font-bold text-base hover:text-baigan'>HTML</h2>
        </div>
        {/* CSS */}
        <div>
          <img className='w-32  rounded  hover:scale-110 shadow-custom' src={css} alt="" />
          <h2 className='text-center mt-2 font-bold text-base hover:text-baigan'>CSS</h2>
        </div>
        {/* JS */}
        <div>
          <img className='w-32  rounded  hover:scale-110 shadow-custom' src={js} alt="" />
          <h2 className='text-center mt-2 font-bold text-base hover:text-baigan'>JS</h2>
        </div>
        {/* React */}
        <div>
          <img className='w-32  rounded  hover:scale-110 shadow-custom' src={react} alt="" />
          <h2 className='text-center mt-2 font-bold text-base hover:text-baigan'>React</h2>
        </div>
        {/* GitHub */}
        <div>
          <img className='w-32  rounded  hover:scale-110 shadow-custom' src={github} alt="" />
          <h2 className='text-center mt-2 font-bold text-base hover:text-baigan'>GitHub</h2>
        </div>
        {/* Tailwind */}
        <div>
          <img className='w-32  rounded  hover:scale-110 shadow-custom' src={tailwind} alt="" />
          <h2 className='text-center mt-2 font-bold text-base hover:text-baigan'>Tailwind</h2>
        </div>
        {/* Bootstrap */}
        <div>
          <img className='w-32  rounded  hover:scale-110 shadow-custom' src={bootstrap} alt="" />
          <h2 className='text-center mt-2 font-bold text-base hover:text-baigan'>Bootstrap</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
