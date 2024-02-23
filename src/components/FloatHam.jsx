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
        <div className='fixed z-50 top-[80%] right-2'>
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
                            <img src={homeIcon} className='border-2 border-slate-300 rounded-full bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                movies
                            </p>
                            <img src={movieIcon} className='border-2 border-slate-300 rounded-full bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                search
                            </p>
                            <img src={searchIcon} className='border-2 border-slate-300 rounded-full bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                watch
                            </p>
                            <img src={watchIcon} className='border-2 border-slate-300 rounded-full bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                orignials
                            </p>
                            <img src={originals} className='border-2 border-slate-300 rounded-full bg-slate-700 p-1' width={40} height={40} />
                        </li>
                        <li className=' group flex flex-col-reverse p-1 gap-2 justify-end items-center w-auto'>
                            <p className=' hidden group-hover:block'>
                                series
                            </p>
                            <img src={series} className='border-2 border-slate-300 rounded-full bg-slate-700 p-1' width={40} height={40} />
                        </li>
                    </ul>}
                </div>
            </div>
        </div>
    )
}

export default FloatHam