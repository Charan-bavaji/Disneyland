import React from 'react'
import { disney, national, starwar, pixar, marvel } from '../assets/images';
import { disneyVid, marvelVid, nationalVid, pixerVid, starsVid } from '../assets/videos';
const Viewers = () => {
  return (
    <section className='w-full h-auto mt-2'>
      <article className=' grid justify-center items-center p-16 gap-6 grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <div className='group relative border-2 border-slate-500 rounded-xl shadow-2xl transition-all cursor-pointer hover:translate-y-[-1rem]'>
          <img src={disney} alt="img1" className='relative top-0 z-10' />
          <video autoPlay loop muted className='absolute top-0 w-full h-full rounded-xl z-0 ease-in hidden group-hover:block'>
            <source
              src={disneyVid}
              type="video/mp4"
            />
          </video>
        </div>
        <div className='group relative border-2 border-slate-500 rounded-xl shadow-2xl transition-all cursor-pointer hover:translate-y-[-1rem]'>
          <img src={marvel} alt="img1" className='relative top-0 z-10' />
          <video autoPlay loop muted className='absolute top-0 w-full h-full rounded-xl z-0 ease-in hidden group-hover:block'>
            <source
              src={marvelVid}
              type="video/mp4"
            />
          </video>
        </div>
        <div className='group relative border-2 border-slate-500 rounded-xl shadow-2xl transition-all cursor-pointer hover:translate-y-[-1rem]'>
          <img src={starwar} alt="img1" className='relative top-0 z-10' />
          <video autoPlay loop muted className='absolute top-0 w-full h-full rounded-xl z-0 ease-in hidden group-hover:block'>
            <source
              src={starsVid}
              type="video/mp4"
            />
          </video>
        </div>
        <div className='group relative border-2 border-slate-500 rounded-xl shadow-2xl transition-all cursor-pointer hover:translate-y-[-1rem]'>
          <img src={pixar} alt="img1" className='relative top-0 z-10' />
          <video autoPlay loop muted className='absolute top-0 w-full h-full rounded-xl z-0 ease-in hidden group-hover:block'>
            <source
              src={pixerVid}
              type="video/mp4"
            />
          </video>
        </div>
        <div className='group relative border-2 border-slate-500 rounded-xl shadow-2xl transition-all cursor-pointer hover:translate-y-[-1rem]'>
          <img src={national} alt="img1" className='relative top-0 z-10' />
          <video autoPlay loop muted className='absolute top-0 w-full h-full rounded-xl z-0 ease-in hidden group-hover:block'>
            <source
              src={nationalVid}
              type="video/mp4"
            />
          </video>
        </div>
      </article>
    </section>
  )
}

export default Viewers
