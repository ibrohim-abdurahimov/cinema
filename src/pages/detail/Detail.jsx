import React, { useEffect } from 'react'
import { useGetDetailImagesQuery, useGetDetailQuery, useGetDetailSimilarQuery } from '../../redux/api/movie-api'
import { useNavigate, useParams } from 'react-router-dom'
import { TiStarOutline } from 'react-icons/ti'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import './Detail.css'
import { colors } from '@mui/material';

const Detail = () => {
  const { id } = useParams()
  const { data } = useGetDetailQuery(id)
  const { data: images } = useGetDetailImagesQuery(id)
  const { data: similar } = useGetDetailSimilarQuery(id)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <div className='mb-[400px]'>
        <div className={`w-full min-h-[630px]`}>
          <img src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path} className='w-full h-[700px] absolute top-0 left-0 object-cover' alt="" />
          <div className='w-full h-[90px] absolute top-[610px] left-0 bg-[#0003]'></div>
          <div className='absolute top-[670px] left-0 w-full '>
            <div className='absolute top-[-30px] left-11 z-10 '>
              <div className='flex gap-7'>
                <img className='w-[250px] h-[325px] object-contain ' src={import.meta.env.VITE_IMAGE_URL + data?.poster_path} alt="" />
                <div className='mt-[70px]'>
                  <h2 className=' text-4xl'>{data?.title}</h2>
                  <p className='mt-8'>{data?.release_date}</p>
                  <div className='flex gap-1 mt-5 font-semibold text-lg'>
                    <p>{data?.genres[0]?.name}/</p>
                    <p>{data?.genres[1]?.name}/</p>
                    <p>{data?.genres[2]?.name}</p>
                  </div>
                  <p className='flex items-center gap-1 mt-5'><TiStarOutline className='text-orange-400 text-lg' />
                    {data?.vote_average}
                  </p>
                </div>
              </div>
              <p className='mt-7 pl-4 text-lg'>{data?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-16 w-full z-50'>
        <h2 className='text-3xl mb-5'>Images</h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            images?.backdrops?.map(img => (
              <SwiperSlide>
                <img src={import.meta.env.VITE_IMAGE_URL + img?.file_path} key={img.file_path} alt="" />
              </SwiperSlide>

            ))
          }
        </Swiper>
      </div>
      <div className='container mt-16 w-full '>
        <h2 className='text-3xl mb-5'>Similar</h2>
        <div className='flex gap-5 overflow-x-auto w-full h-auto p-5 mt-3'>
          {
            similar?.results?.map(img => (
                <div className='min-w-[400px]'>
                  <img onClick={()=> navigate(`/movie/${img.id}`)} className='w-full h-[450px]' src={import.meta.env.VITE_IMAGE_URL + img?.poster_path} key={img.file_path} alt="" />
                  <h2 className='mt-4 text-2xl text-center'>{img.title}</h2>
                </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default Detail