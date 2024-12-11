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
import { useTranslation } from 'react-i18next';



const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <footer className='mt-[120px]  bg-footer'>
        <div className='container grid grid-cols-4  px-8 py-8 rounded-xl max-lg:grid-cols-2 max-lg:gap-10 max-lg:text-center max-sm:grid-cols-1'>
          <div className='flex flex-col justify-between max-lg:items-center max-sm:gap-10'>
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
            <h2>{t("footer.about")}</h2>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <FaFileAlt className='text-primary' />
              <p>{t("footer.offer")}</p>
            </div>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <LuSparkle className='text-primary' />
              <p>{t("footer.adver")}</p>
            </div>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <FaQuestionCircle className='text-primary' />
              <p>{t("footer.f.a.q")}</p>
            </div>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <FaPhone className='text-primary' />
              <p>{t("footer.contact")}</p>
            </div>
          </div>
          <div className='text-white flex flex-col gap-5'>
            <h2>{t("footer.category")}</h2>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <BiSolidMoviePlay className='text-primary' />
              <p>{t("footer.film")}</p>
            </div>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <MdMovie className='text-primary' />
              <p>{t("footer.theater")}</p>
            </div>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <RiMovie2Fill className='text-primary' />
              <p>{t("footer.concert")}</p>
            </div>
            <div className='flex items-center gap-2 max-lg:m-auto'>
              <FaBasketball className='text-primary' />
              <p>{t("footer.sport")}</p>
            </div>
          </div>
          <div className='flex flex-col justify-between max-sm:gap-10'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-white'>{t("footer.contact us")}</h2>
              <p className='text-primary'>+998 (95) 897-33-38</p>
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-white'>{t("footer.social")}</h2>
              <div className='flex gap-5 max-lg:m-auto'>
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