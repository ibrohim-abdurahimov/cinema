import React, { useState } from 'react'
import { useGetMovieDiscoverQuery } from '../../redux/api/movie-api'
import { TiStarOutline } from 'react-icons/ti'
import { useGetGenreQuery } from '../../redux/api/genre-api'
import { useNavigate } from 'react-router-dom'

const Discover = () => {
    const navigate = useNavigate()
    const [selectedGenre, setSelectedGenre] = useState([])
    const { data: genres } = useGetGenreQuery()
    const { data } = useGetMovieDiscoverQuery({ with_genres: selectedGenre.join(',') })
    const handleChangeGenre = id => {
        if (selectedGenre.includes(id)) {
            setSelectedGenre(p => p.filter(i => i !== id))
        } else {
            setSelectedGenre(p => [...p, id])
        }
    }
    return (
        <>
            <div className='container mt-10 flex gap-5 overflow-auto p-5 pt-4 '>
                {
                    genres?.genres?.map(genre => (
                        <button onClick={() => handleChangeGenre(genre.id)} className={`whitespace-nowrap shadow-lg ring ring-rose-800 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 py-1 px-7 rounded-md ${selectedGenre.includes(genre.id) ? 'text-white bg-rose-600 dark:text-rose-600 dark:bg-white' : ''}`}
                            key={genre.id}>{genre.name}</button>
                    ))
                }
            </div>
            <div className='container mt-10 grid grid-cols-4 gap-5'>
                {
                    data?.results?.map(movie => (
                        <div key={movie.id}>
                            <img onClick={()=> navigate(`/movie/${movie.id}`)} src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt="" />
                            <h3 className='mt-2 text-2xl'>{movie.title}</h3>
                            <p className='flex items-center gap-1'><TiStarOutline className='text-orange-400 text-lg' />
                                {movie.vote_average}
                            </p>
                        </div>
                    ))
                }
            </div>
            {
                !data?.total_results && <div><h2 className='text-center'>Movie not found</h2></div>
            }
        </>
    )
}

export default Discover