import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase';
import { groupBut, playButBlack, playButWhite, watchIcon } from '../assets/images';

const Details = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'movies', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setDetailData(docSnap.data());
                } else {
                    console.log('No such document in Firebase 🔥');
                }
            } catch (error) {
                console.error('Error getting document:', error);
            }
        };

        fetchData();
    }, [id])
    // sm	640px	
    // md	768px	
    // lg	1024px
    // xl	1280px
    // 2xl	1536px
    return (
        <div className=' w-full h-[100vh]'>
            <div className=' w-full h-full bg-cover bg-center bg-no-repeat ' style={{
                backgroundImage: `url(${detailData.backgroundImg})`, backgroundSize: 'cover',
            }}>
                <section className='w-full h-full flex flex-col justify-center items-start gap-6 pl-3 md:pl-10 md:gap-7 lg:pl-20 lg:gap-8'>
                    <img src={detailData.titleImg} alt={detailData.title} className='
                     w-52 md:w-72 lg:w-[30rem]
                    ' />
                    <div className='flex justify-center items-center gap-4'>
                        <button className='flex justify-center items-center px-3 py-1 border-2 border-slate-400 text-black rounded-lg bg-slate-100  transition-all cursor-pointer hover:translate-y-[-0.5rem]'><img src={playButBlack} alt='playB' />PLAY</button>
                        <button className='flex justify-center items-center px-2 py-1 border-2 border-slate-400 text-white  rounded-lg bg-slate-950  transition-all cursor-pointer hover:translate-y-[-0.5rem]'><img src={playButWhite} alt='playW' />TRAILER</button>
                        <div className=' bg-slate-950 border-2 border-slate-400 w-10 h-10 rounded-full flex justify-center items-center lg:w-12 lg:h-12  transition-all cursor-pointer hover:translate-y-[-0.5rem] '>
                            <img src={watchIcon} alt="+" className=' w-8' />
                        </div>
                        <div className=' bg-slate-950 border-2 border-slate-400 w-10 h-10 rounded-full flex justify-center items-center lg:w-12 lg:h-12  transition-all cursor-pointer hover:translate-y-[-0.5rem]'>
                            <img src={groupBut} alt="group" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 sm:w-[90%] md:w-[70%] '>
                        <span className='lg:text-xl'>{detailData.subTitle}</span>
                        <span className='lg:text-xl'>{detailData.description}</span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Details;