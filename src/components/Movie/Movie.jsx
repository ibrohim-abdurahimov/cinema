import React, { useState } from 'react'
import { useGetMovieQuery } from '../../redux/api/movie-api'
import { MOVIE_LIST } from '../../static'
import Pagination from '@mui/material/Pagination';
import { TiStarOutline } from "react-icons/ti";
import { colors } from '@mui/material';

const Movie = () => {
    const [type, setType] = useState('now_playing')
    const [page, setPage] = useState(1)
    const { data } = useGetMovieQuery({ type, params: { page} })
    const handleChange = (event, value) => {
        setPage(value);
      }
      const handleChangeType = (path)=>{
        setType(path)
        setPage(1)
      }
    return (
        <>
            <div className='mt-10 flex gap-5 justify-center'>
                {
                    MOVIE_LIST?.map(item => (
                        <button className='shadow-lg ring ring-rose-800 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 py-1 px-7 rounded-md' onClick={()=>handleChangeType(item.path)} key={item.id}>{item.title}</button>
                    ))
                }
            </div>
            <div className='container mt-10 grid grid-cols-4 gap-5'>
                {
                    data?.results?.map(movie => (
                        <div key={movie.id}>
                            <img src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt="" />
                            <h3 className='mt-2 text-2xl'>{movie.title}</h3>
                            <p className='flex items-center gap-1'><TiStarOutline className='text-orange-400 text-lg'/>
                            {movie.vote_average}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center pt-6'>
                <Pagination variant="outlined" shape="rounded" className='bg-white'  color='primary'  count={data?.total_pages > 500 ? 500:data?.total_pages } page={page} onChange={handleChange}/>
            </div>
            
        </>
    )
}

export default Movie