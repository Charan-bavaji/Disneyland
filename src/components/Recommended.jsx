import React from 'react'
import { useSelector } from 'react-redux';
import { selectRecommend } from '../features/movies/movieSlice';
import { Link } from 'react-router-dom';

const Recommended = () => {
  const movies = useSelector(selectRecommend);
  return (
    <div className='flex flex-col justify-start items-start'>
      <h1 className='pl-8 text-lg'>Recommended for You</h1>
      <section className=' grid p-4 gap-6 grid-cols-1  xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          movies && movies.map((movie, key) => (
            <article key={key} className='group relative border-2 border-slate-500 rounded-xl shadow-2xl transition-all cursor-pointer hover:translate-y-[-0.5rem] overflow-hidden'>
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </article>
          ))
        }
      </section>
    </div>
  )
}
export default Recommended;