import React, { memo, useEffect, useState } from 'react'
import { useGetMovieQuery } from '../../redux/api/movie-api'
import { MOVIE_LIST } from '../../static'
import Pagination from '@mui/material/Pagination';
import { TiStarOutline } from "react-icons/ti";
import { colors } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Movie from '../../components/Movie/Movie';

const MovieList = () => {
    const [params, setParams] = useSearchParams()
    const [type, setType] = useState(params.get('path') || 'now_playing')
    const [page, setPage] = useState(+params.get('count') || 1)
    const { data } = useGetMovieQuery({ type, params: { page } })
    

    useEffect(() => {
        if (!params.get('path')) {
            setType('now_playing')
        }
    }, [params.get('path')])
    const handleChange = (event, value) => {
        setPage(value);
        const p = new URLSearchParams(params)
        p.set('count', value)
        setParams(p)
    }
    const handleChangeType = (path) => {
        setType(path)
        setPage(1)
        setParams({ path, count: 1 })
    }
  return (
    <>
            <div className='mt-10 flex gap-5 justify-center'>
                {
                    MOVIE_LIST?.map(item => (
                        <button className='shadow-lg ring ring-rose-800 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 py-1 px-7 rounded-md' onClick={() => handleChangeType(item.path)} key={item.id}>{item.title}</button>
                    ))
                }
            </div>
            <Movie data={data?.results}/>
            <div className='flex justify-center pt-6'>
                <Pagination variant="outlined" shape="rounded" className='bg-white' color='primary' count={data?.total_pages > 500 ? 500 : data?.total_pages} page={page} onChange={handleChange} />
            </div>

        </>
  )
}

export default memo(MovieList)