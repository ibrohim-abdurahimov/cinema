import React, { memo, useEffect, useState } from 'react'
import logo from '../../assets/mainlogo.svg'
import ruflag from '../../assets/flag rus.png'
import uzlag from '../../assets/flagUz.png'
import enlag from '../../assets/flagUSA.png'
import { RiTv2Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { IoSearch, IoTabletPortrait } from "react-icons/io5";
import { TbTicket } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { BsTv } from "react-icons/bs";
import { GiFilmStrip } from "react-icons/gi";
import { LuSunMoon } from "react-icons/lu";


const FLAGS = {
    uz: uzlag,
    en: enlag,
    ru: ruflag
}


const Header = () => {
    const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en")
    const { t, i18n } = useTranslation()
    const [shadow, setShadow] = useState(false)
    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 10) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    })
    useEffect(() => {
        const value = localStorage.getItem('theme')
        if (value) {
            document.body.classList.add(value)
        }
    })
    const dark = () => {
        document.body.classList.toggle('dark')
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark')

        } else {
            localStorage.setItem('theme', 'light')
        }
    }
    return (
        <header className={` sticky top-0 left-0 z-50 bg-transparent ${shadow ? 'bg-zinc-950 shadow-lg text-white' : 'bg-zinc-950 text-white shadow-lg shadow-[#0002] dark:text-white dark:shadow-white dark:shadow-md dark:bg-[#0004]'}`}>
            <div className='container  px-2'>
                <nav className='flex justify-between items-center h-[80px]'>
                    <div>
                        <NavLink to={'/'}>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <ul className='flex items-center '>
                        <li className='px-7 py-1'>
                            <NavLink to={'/movie-list'} className={({ isActive }) => (isActive ? "text-red-700" : ' ')}>
                                <BsTv className='m-auto text-lg' />
                                <span>{t("header.poster")}</span>
                            </NavLink>
                        </li>
                        <li className='px-7 py-1'>
                            <NavLink to={'/discover'} className={({ isActive }) => (isActive ? "text-red-700" : ' ')}>
                                <GiFilmStrip className='m-auto text-lg' />
                                <span>{t("header.genre")}</span>
                            </NavLink>
                        </li>
                        {/* <li className='px-7 py-1'>
                            <NavLink>
                                <TbTicket className='m-auto' />
                                <span>Билеты</span>
                            </NavLink>
                        </li> */}
                        <li className='px-7 py-1 '>
                            <NavLink to={'/search'} className={({ isActive }) => (isActive ? "text-red-700" : ' ')}>
                                <IoSearch className='m-auto text-lg' />
                                <span>{t("header.search")}</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className='flex gap-5 items-center'>
                        <div className='flex items-center justify-center gap-1 rounded-xl bg-gray-900 px-3 py-2 text-white'>
                            <img src={FLAGS[t("l")]} alt="" width='20px' />
                            <select value={lang} onChange={e => setLang(e.target.value)} className='bg-transparent border-none outline-none' name="" id="">
                                <option className='text-black' value="en">English</option>
                                <option className='text-black' value="uz">Uzbek</option>
                                <option className='text-black' value="ru">Russian</option>
                            </select>
                        </div>
                        <button className='px-16 py-4 bg-primary text-white rounded-xl'>{t("header.login")}</button>
                        <div>
                            <button onClick={dark}>
                                <LuSunMoon className='text-3xl text-orange-600 dark:text-blue-800 '/>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default memo(Header) 