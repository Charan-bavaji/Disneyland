import React from 'react'
import { useState } from 'react';
// import { hamburger, close } from '../assets/images';
import { homeIcon, movieIcon, searchIcon, watchIcon, originals, series, hamburger, close } from '../assets/images';

const FloatHam = () => {
    const [change, setChange] = useState(true);
    const [view, setView] = useState(true);

    const changes = () => {
        setChange(!change);
    }
    const preview = () => {
        setView((view) => !view);
    }
    return (
        <div className='fixed z-50 top-[50%] right-2'>
            <div className='hidden md:hidden max-lg:block w-auto rounded-full bg-slate-200 p-2 '>
                <img src={change ? hamburger : close}
                    alt='Hamburger'
                    width={20}
                    height={20}
                    onClick={() => {
                        changes();
                        preview();
                    }}
                />
                <div className=' right-1 py-1  fixed pt-4'>
                    {!view && <ul className='flex '>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                home
                            </p>
                            <img src={homeIcon} className='border-2 border-slate-300 rounded-full hover:bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                movies
                            </p>
                            <img src={movieIcon} className='border-2 border-slate-300 rounded-full hover:bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                search
                            </p>
                            <img src={searchIcon} className='border-2 border-slate-300 rounded-full hover:bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                watch
                            </p>
                            <img src={watchIcon} className='border-2 border-slate-300 rounded-full hover:bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                orignials
                            </p>
                            <img src={originals} className='border-2 border-slate-300 rounded-full hover:bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                series
                            </p>
                            <img src={series} className='border-2 border-slate-300 rounded-full hover:bg-slate-700 p-1' width={40} height={40} />
                        </li>
                    </ul>}
                </div>
            </div>
            {/* <div className=" p-3 m-1 md:hidden flex justify-center items-center">
                <span className="material-symbols-outlined hover:rounded-full p-1.5 hover:bg-red-400"
                    onClick={displayList}
                >
                    menu_open
                </span>
            </div>
            {lists && <div className=" relative w-full h-auto flex flex-col justify-center items-center backdrop-blur-sm bg-black/20 md:hidden z-50">
                <a href='#' className=' bg-red-400 py-2 m-1 px-3 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce'>
                    <span>Home</span>
                </a>
                <a href='#Skills' className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span >Skills</span>
                </a>
                <a href="#Projects" className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span>Project</span>
                </a>
                <a href="#Contact" className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span>Contact</span>
                </a>
                <a href='#About' className="py-3 m-1 px-20 text-md tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce">
                    <span>About</span>
                </a>
            </div>} */}


        </div>
    )
}

export default FloatHam