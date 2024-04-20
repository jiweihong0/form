import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation();
    const style = `text-lg font-bold mx-4 hover:text-[#97932D] text-[#423838]`
    const activeStyle = `text-lg font-bold mx-4  text-[#97932D] `
    return (
        <div className=' top-0 bg-[#EFF0EA] w-screen h-16 flex justify-between items-center px-4  '>
            <div className='  inline-flex justify-center items-center '>
                <img src={Logo} alt='logo' className='w-16 h-16'/>
                <div className='text-xl font-bold'>P.S.姿態整復分析</div>
            </div>
            <div className='hidden md:block   '>
                <Link to='/' className={location.pathname === '/' ? activeStyle : style}>首頁</Link>
                <Link to='/video' className={location.pathname === '/video' ? activeStyle : style}>
                    教案影片</Link>
                <Link to='/page1' className={location.pathname === '/page1' ? activeStyle : style}>
                    前側問卷</Link>
                <Link to='/page2' className={location.pathname === '/page2' ? activeStyle : style}>
                    後側問卷</Link>
                <Link to='/teach' className={location.pathname === '/teach' ? activeStyle : style}>
                    APP操作教學</Link>
           
            </div>           
        </div>
    )
}