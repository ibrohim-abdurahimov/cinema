import React, { useEffect, useState } from 'react'
import { useGetMovieDiscoverQuery } from '../../redux/api/movie-api'
import { TiStarOutline } from 'react-icons/ti'
import { useGetGenreQuery } from '../../redux/api/genre-api'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';

const Discover = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedGenre, setSelectedGenre] = useState(searchParams.get('genre') && searchParams.get('genre')?.split('-').map(Number) || [])
    const [page, setPage] = useState(+searchParams.get('count') ||1)
    const { data: genres } = useGetGenreQuery()
    const { data, isLoading } = useGetMovieDiscoverQuery({ 
        with_genres: selectedGenre.join(','),
        page,
        without_genres: '10749,18'
    
    })
    // useEffect(() => {
    //     if(selectedGenre.length){
    //         setSearchParams({genre:selectedGenre.join('-')})
    //     }else{
    //         setSearchParams({})
    //     }
    // } , [selectedGenre])

    const handleChangeGenre = id => {
        const p = new URLSearchParams(searchParams)
        if (selectedGenre.includes(id)) {
            setSelectedGenre(p => p.filter(i => i !== id))
            p.set('genre', selectedGenre.filter(i=> i !== id).join('-'))
        } else {
            setSelectedGenre(p => [...p, id])
            p.set('genre', [...selectedGenre, id].join('-'))
        }
        p.set('count', 1)
        setSearchParams(p)
        setPage(1)
    }
    const handleChange = (event, value) => {
        setPage(value);
        const p = new URLSearchParams(searchParams)
        p.set('count' , value)
        setSearchParams(p)
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
                !data?.total_results && !isLoading && <div><h2 className='text-center'>Movie is not found</h2></div>
            }
            <div className='flex justify-center pt-6'>
                <Pagination variant="outlined" shape="rounded" className='bg-white'  color='primary'  count={data?.total_pages > 500 ? 500:data?.total_pages } page={page} onChange={handleChange}/>
            </div>
        </>
    )
}

export default Discover