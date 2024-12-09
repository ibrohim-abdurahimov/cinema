import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Swipper.css'
import { useGetMovieDiscoverQuery, useGetMoviePopularQuery } from '../../redux/api/movie-api';
import { FaPlay } from 'react-icons/fa6';
import { TiStarOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const Swipper = () => {
    const { data, error } = useGetMoviePopularQuery()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigate = useNavigate()
    return (
        <>
            <div className='container mt-5'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {
                        data?.results?.slice(0, 4).map(i => (
                            <SwiperSlide className='dark:bg-black'>
                                <div key={i.id} className='h-[680px] rounded-xl w-full dark:bg-black'>
                                    <img className='w-full h-full rounded-xl dark:bg-black' src={import.meta.env.VITE_IMAGE_URL + i?.backdrop_path} alt="" />
                                    <div className='absolute bottom-0 left-0 text container flex flex-col gap-4 pb-8'>
                                        <h2 className='text-white text-3xl'>{i.title}</h2>
                                        <div className='text-white flex items-center justify-center text-sm gap-2'>
                                            <span>{i.release_date}</span>
                                            <span>/</span>
                                            <span>{i.original_language}</span>
                                            <span>/</span>
                                            <span className='flex items-center gap-1'><TiStarOutline className='text-orange-400 text-lg' /> {i.vote_average}</span>
                                        </div>
                                        <button onClick={() => navigate(`/movie/${i.id}`)} className='text-primary bg-white flex  items-center justify-center m-auto py-3 px-28 rounded-xl'>
                                            <FaPlay />
                                            Смотреть
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {
                        data?.results?.slice(0, 4).map(i => (
                            <SwiperSlide className='w-[400px]' key={i.id}>
                                <div key={i.id} className=' dark:bg-black'>
                                    <img className='w-full h-full rounded-xl dark:bg-black' src={import.meta.env.VITE_IMAGE_URL + i?.backdrop_path} alt="" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Swipper