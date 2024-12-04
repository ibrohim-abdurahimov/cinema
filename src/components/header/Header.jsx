import React, { memo } from 'react'
import logo from '../../assets/mainlogo.svg'
import ruflag from '../../assets/flag rus.png'
import { RiTv2Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { IoSearch, IoTabletPortrait } from "react-icons/io5";
import { TbTicket } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";





const Header = () => {
    return (
        <header className='text-white mt-2 sticky top-0 left-0 z-50 bg-black'>
            <div className='container  px-2'>
                <nav className='flex justify-between items-center h-[80px]'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <ul className='flex items-center'>
                        <li className='px-7 py-1'>
                            <NavLink>
                                <RiTv2Fill className='m-auto' />
                                <span>Афиша</span>
                            </NavLink>
                        </li>
                        <li className='px-7 py-1'>
                            <NavLink>
                                <IoTabletPortrait className='m-auto' />
                                <span>Сеансы</span>
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
                            <img src={ruflag} alt="" width='20px'/>
                            <p>Ру</p>
                            <MdKeyboardArrowDown />
                        </div>
                        <button className='px-16 py-4 bg-primary text-white rounded-xl'>Войти</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default memo(Header) 