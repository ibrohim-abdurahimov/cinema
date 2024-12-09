import React, { useEffect, useRef, useState } from 'react'
import { useGetMovieBySearchQuery } from '../../redux/api/movie-api'
import Movie from '../../components/Movie/Movie'
import { useSearchParams } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState("")
    const [search, setSearch] = useState("")
    const { data, error, isLoading } = useGetMovieBySearchQuery({ query: search }, { skip: !search })

    useEffect(() => {
        let query = searchParams.get("q")
        if (query) {
            setSearchValue(query)
            setSearch(query)
        }
    }, [])
    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchValue)
    }
    const handleChange = e => {
        setSearchValue(e.target.value)
        setSearchParams({ q: e.target.value })
    }
    return (
        <>
            <div className='container mt-12 '>
                <form onSubmit={handleSearch} action="" className='flex justify-center items-center gap-1 '>
                    <div className='flex items-center gap-2 bg-[#111111] p-5 rounded-xl'>
                        <IoSearch className='text-red-700 text-2xl' />
                        <input className='bg-transparent text-white placeholder:text-white pl-2 outline-none w-[500px]' value={searchValue} onChange={handleChange} type="search" placeholder='Search...' />
                    </div>
                    {/* <button>Search</button> */}
                </form>
            {
                !data?.total_results && !isLoading && <div><h2 className='text-center mt-16'>Movie is not found</h2></div>
            }
            </div>
            <Movie data={data?.results} />
        </>
    )
}

export default Search