import React, { useEffect, useState } from 'react'
import { useGetMovieQuery } from '../../redux/api/movie-api'
import { MOVIE_LIST } from '../../static'
import Pagination from '@mui/material/Pagination';
import { TiStarOutline } from "react-icons/ti";
import { colors } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Movie = ({data}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='container px-4 mt-10 grid grid-cols-4 gap-5 max-md:grid-cols-3 max-sm:grid-cols-2'>
                {
                    data?.map(movie => (
                        <div key={movie.id} className='flex flex-col justify-between'>
                            <img className='w-full h-full' onClick={() => navigate(`/movie/${movie.id}`)} src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt="" />
                            <div>
                                <h3 className='mt-2 text-2xl line-clamp-1 max-lg:text-xl' title={movie.title}>{movie.title}</h3>
                                <p className='flex items-center gap-1'><TiStarOutline className='text-orange-400 text-lg' />
                                    {movie.vote_average}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Movie