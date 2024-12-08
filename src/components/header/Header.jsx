import React, { memo, useEffect, useState } from 'react'
import logo from '../../assets/mainlogo.svg'
import ruflag from '../../assets/flag rus.png'
import { RiTv2Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { IoSearch, IoTabletPortrait } from "react-icons/io5";
import { TbTicket } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";





const Header = () => {
    const [shadow, setShadow] = useState(false)
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
        <header className={` sticky top-0 left-0 z-50 bg-transparent ${shadow ? 'bg-zinc-950 shadow-lg text-white' : 'bg-[#0004] shadow-lg  text-black dark:text-white' }`}>
            <div className='container  px-2'>
                <nav className='flex justify-between items-center h-[80px]'>
                    <div>
                        <NavLink to={'/'}>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <ul className='flex items-center'>
                        <li className='px-7 py-1'>
                            <NavLink to={'/'}>
                                <RiTv2Fill className='m-auto' />
                                <span>Афиша</span>
                            </NavLink>
                        </li>
                        <li className='px-7 py-1'>
                            <NavLink to={'/discover'}>
                                <IoTabletPortrait className='m-auto' />
                                <span>Discover</span>
                            </NavLink>
                        </li>
                        <li className='px-7 py-1'>
                            <NavLink>
                                <TbTicket className='m-auto' />
                                <span>Билеты</span>
                            </NavLink>
                        </li>
                        <li className='px-7 py-1 '>
                            <NavLink className='flex flex-col items-center text-center'>
                                <IoSearch className='m-auto' />
                                <span>Поиск</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className='flex gap-5 items-center'>
                        <div className='flex items-center justify-center gap-1 rounded-xl bg-gray-900 px-3 py-2 text-white'>
                            <img src={ruflag} alt="" width='20px' />
                            <p>Ру</p>
                            <MdKeyboardArrowDown />
                        </div>
                        <button className='px-16 py-4 bg-primary text-white rounded-xl'>Войти</button>
                        <div>
                            <button onClick={dark}>dark</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default memo(Header) 