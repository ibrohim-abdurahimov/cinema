import React, { memo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Home.css'
import { FreeMode, Thumbs } from 'swiper/modules';
import panda from '../../assets/panda.png'
import avengars from '../../assets/avengarss.webp'
import john from '../../assets/john-wick.jpg'
import venom from '../../assets/venom.jpg'
import { FaPlay } from "react-icons/fa6";
import { useGetMovieQuery } from '../../redux/api/movie-api';
import Movie from '../../components/Movie/Movie';
import Swip from '../../components/swipper/Swipper';
//  release_date
const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data } = useGetMovieQuery()
  return (
    <>
      {/* <div className=' container mt-4 '>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className=' w-full h-[700px] bg-panda bg-no-repeat bg-center bg-black flex items-end'>
            <div className='text container flex flex-col gap-4 pb-8'>
                <h2 className='text-white text-3xl'>Kung Fu Panda 4</h2>
                <div className='text-white flex items-center justify-center text-sm gap-2'>
                  <span>2024</span>
                  <span>.</span>
                  <span>Комедия</span>
                  <span>.</span>
                  <span>1ч 34м</span>
                  <span>.</span>
                  <span>EN</span>
                  <span>.</span>
                  <span>6+</span>
                </div>
                <button className='text-primary bg-white flex  items-center justify-center m-auto py-3 px-28 rounded-xl'>
                  <FaPlay />
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' w-full h-[700px] bg-avengars bg-no-repeat bg-center bg-black flex items-end '>
            <div className='text container flex flex-col gap-4 pb-8'>
                <h2 className='text-white text-3xl'>Avengers: Infinity War</h2>
                <div className='text-white flex items-center justify-center text-sm gap-2'>
                  <span>2018</span>
                  <span>.</span>
                  <span>Комедия / Боевик / Фэнтези</span>
                  <span>.</span>
                  <span>2ч 19м</span>
                  <span>.</span>
                  <span>EN</span>
                  <span>.</span>
                  <span>16+</span>
                </div>
                <button className='text-primary bg-white flex  items-center justify-center m-auto py-3 px-28 rounded-xl'>
                  <FaPlay />
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' w-full h-[700px] bg-jon bg-no-repeat bg-center bg-black flex items-end '>
              <div className='text container flex flex-col gap-4 pb-8'>
                <h2 className='text-white text-3xl'>Jhon Wick - 4</h2>
                <div className='text-white flex items-center justify-center text-sm gap-2'>
                  <span>2023</span>
                  <span>.</span>
                  <span>Боевик</span>
                  <span>.</span>
                  <span>2ч 47м</span>
                  <span>.</span>
                  <span>EN</span>
                  <span>.</span>
                  <span>16+</span>
                </div>
                <button className='text-primary bg-white flex  items-center justify-center m-auto py-3 px-28 rounded-xl'>
                  <FaPlay />
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' w-full h-[700px] bg-venom bg-no-repeat bg-center bg-black flex items-end'>
            <div className='text container flex flex-col gap-4 pb-8'>
                <h2 className='text-white text-3xl'>Venom: The Last Dance</h2>
                <div className='text-white flex items-center justify-center text-sm gap-2'>
                  <span>2023</span>
                  <span>.</span>
                  <span>Боевик / Фэнтези</span>
                  <span>.</span>
                  <span>1ч 49м</span>
                  <span>.</span>
                  <span>EN</span>
                  <span>.</span>
                  <span>16+</span>
                </div>
                <button className='text-primary bg-white flex  items-center justify-center m-auto py-3 px-28 rounded-xl'>
                  <FaPlay />
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='w-full h-full' src={panda} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={avengars} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={john} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={venom} alt="" />
          </SwiperSlide>
        </Swiper>
      </div> */}
      <Swip />
    </>
  )
}

export default memo(Home) 