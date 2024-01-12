import React from 'react';
import proj1 from '../assets/movie.png';
import proj2 from '../assets/ecommerce.png';
import proj3 from '../assets/glittle.png';
import oval from '../assets/Oval.svg';

const Projects = () => {
  return (
    <div id='projects' className='bg-baigan h-screen text-white'>
      <div className='mt-15'>
        <h5 className='text-pinky text-xs text-left pl-16 pt-16'>PORTFOLIO</h5>
        <div className='flex justify-between'>
          <div>
            <h1 className='pt-7 pl-16 text-left text-5xl font-bold'>Latest Work</h1>
          </div>

          <div>
            <a href="https://github.com/hoornainkhan?tab=repositories" target="_blank" rel="noopener noreferrer">
              <button className="bg-baigan border border-white border-2px hover:bg-white hover:text-baigan text-white font-bold mr-14 py-2 px-4 rounded">
                Explore more
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='container flex justify-around mt-40'>
        <div className="card w-1/4">
          <a href="https://github.com/hoornainkhan/moviepedia" target="_blank" rel="noopener noreferrer">
            <img className='rounded shadow-2xl border border-purple-400 hover:bg-purple-400 p-2 relative z-10' src={proj1} alt="movie" />
            <h3 className='text-center pt-5 text-xl text-white hover:text-banana'>Movie generator</h3>
          </a>
        </div>
        <div className="card w-1/4">
          <a href="https://github.com/hoornainkhan/eCommerce" target="_blank" rel="noopener noreferrer">
            <img className='rounded shadow-2xl border border-purple-400 hover:bg-purple-400  p-2' src={proj2} alt="movie" />
            <h3 className='text-center pt-5 text-xl text-white hover:text-banana'>Ecommerce</h3>
          </a>
        </div>
        <div className="card w-1/4">
          <a href="https://github.com/hoornainkhan/glittle" target="_blank" rel="noopener noreferrer">
            <img className='rounded shadow-2xl border border-purple-400 hover:bg-purple-400 p-2' src={proj3} alt="movie" />
            <h3 className='text-center pt-5 text-xl text-white hover:text-banana'>Glittle</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
