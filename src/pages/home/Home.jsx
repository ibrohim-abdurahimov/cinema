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

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className=' container mt-4 '>
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
            <img src={panda} alt="" />
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
      </div>
      <section className='mt-12'>
        <div className='container'>
          <div className='flex justify-between text-xl'>
            <p className='text-white'>На неделе</p>
            <p className='text-primary'>Показать все</p>
          </div>
          <div className='container grid grid-cols-4  gap-5 mt-5'>
            <div>
              <div className='h-[400px]'>
                <img className='w-full h-full object-cover' src={panda} alt="" />
              </div>
              <div className='text-white mt-3'>
                <h2 className='text-2xl'>Kung Fu Panda 4</h2>
                <p className='text-sm text-[#4D4D4D]'>Комедия</p>
              </div>
            </div>
            <div>
              <div className='h-[400px]'>
                <img className='w-full h-full object-cover' src={avengars} alt="" />
              </div>
              <div className='text-white mt-3'>
                <h2 className='text-2xl'>Avengers: Infinity War</h2>
                <p className='text-sm text-[#4D4D4D]'>Комедия / Боевик / Фэнтези</p>
              </div>
            </div>
            <div>
              <div className='h-[400px]'>
                <img className='w-full h-full object-cover' src={john} alt="" />
              </div>
              <div className='text-white mt-3'>
                <h2 className='text-2xl'>Jhon Wick - 4</h2>
                <p className='text-sm text-[#4D4D4D]'>Боевик</p>
              </div>
            </div>
            <div>
              <div className='h-[400px]'>
                <img className='w-full h-full object-cover' src={venom} alt="" />
              </div>
              <div className='text-white mt-3'>
                <h2 className='text-2xl'>Venom: The Last Dance</h2>
                <p className='text-sm text-[#4D4D4D]'>Боевик / Фэнтези</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Home) 