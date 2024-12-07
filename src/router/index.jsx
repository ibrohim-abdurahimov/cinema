import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Detail from '../pages/detail/Detail'
import Discover from '../pages/discover/Discover'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/discover' element={<Discover/>}/>
                    <Route path='/movie/:id' element={<Detail/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default memo(Router)