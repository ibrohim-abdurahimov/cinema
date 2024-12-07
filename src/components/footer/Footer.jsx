import React, { memo } from 'react'
import logo from '../../assets/footerlogo.svg'
import appstore from '../../assets/appstore.svg'
import playmarket from '../../assets/playmarket.svg'
import { FaFileAlt, FaQuestionCircle } from "react-icons/fa";
import { LuSparkle } from "react-icons/lu";
import { FaPhone } from 'react-icons/fa6';
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdMovie } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { FaBasketball } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";



const Footer = () => {
  return (
    <>
      <footer className='mt-[120px]  bg-footer'>
        <div className='container grid grid-cols-4  px-8 py-8 rounded-xl'>
          <div className='flex flex-col justify-between'>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <img src={playmarket} alt="" />
              </div>
              <div>
                <img src={appstore} alt="" />
              </div>
            </div>
          </div>
          <div className='text-white flex flex-col gap-5'>
            <h2>О нас</h2>
            <div className='flex items-center gap-2'>
              <FaFileAlt className='text-primary' />
              <p>Публичная оферта</p>
            </div>
            <div className='flex items-center gap-2'>
              <LuSparkle className='text-primary' />
              <p>Реклама</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaQuestionCircle className='text-primary' />
              <p>F.A.Q</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaPhone className='text-primary' />
              <p>Контакты</p>
            </div>
          </div>
          <div className='text-white flex flex-col gap-5'>
            <h2>Категории</h2>
            <div className='flex items-center gap-2'>
              <BiSolidMoviePlay className='text-primary' />
              <p>Кино</p>
            </div>
            <div className='flex items-center gap-2'>
              <MdMovie className='text-primary' />
              <p>Театр</p>
            </div>
            <div className='flex items-center gap-2'>
              <RiMovie2Fill className='text-primary' />
              <p>Концерты</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaBasketball className='text-primary' />
              <p>Спорт</p>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-white'>Связаться с нами</h2>
              <p className='text-primary'>+998 (95) 897-33-38</p>
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-white'>Социальные сети</h2>
              <div className='flex gap-5'>
                <BiLogoInstagramAlt className='text-primary' />
                <FaFacebook className='text-primary' />
                <IoLogoYoutube className='text-primary' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default memo(Footer)