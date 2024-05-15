import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu"
export default function Header() {
    const location = useLocation();
    const style = `text-lg font-bold mx-4 hover:text-[#97932D] text-[#423838]`
    const activeStyle = `text-lg font-bold mx-4  text-[#97932D] `
    const [isOpen, setIsOpen] = useState(false);
 
    return (
        <div className=' top-0 bg-[#EFF0EA] w-screen h-16 flex justify-between items-center px-4  '>
            <div className='inline-flex items-center justify-center '>
                <img src={Logo} alt='logo' className='w-16 h-16'/>
                <div className='text-xl font-bold'>P.S.姿態整復分析</div>
            </div>
            <DropdownMenu className='invisible md:visible' >
                <DropdownMenuTrigger>
                    <button className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={5} alignOffset={5}>
                    <DropdownMenuItem>
                        <Link to='/' className='text-lg font-bold mx-4 hover:text-[#97932D] text-[#423838]'>首頁</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link to='/video' className='text-lg font-bold mx-4 hover:text-[#97932D] text-[#423838]'>教案影片</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link to='/page1' className='text-lg font-bold mx-4 hover:text-[#97932D] text-[#423838]'>前測問卷</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link to='/page2' className='text-lg font-bold mx-4 hover:text-[#97932D] text-[#423838]'>後測問卷</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link to='/teach' className='text-lg font-bold mx-4 hover:text-[#97932D] text-[#423838]'>APP操作教學</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            
            <div className='hidden md:block '>
                <Link to='/' className={location.pathname === '/' ? activeStyle : style}>首頁</Link>
                <Link to='/video' className={location.pathname === '/video' ? activeStyle : style}>
                    教案影片</Link>
                <Link to='/page1' className={location.pathname === '/page1' ? activeStyle : style}>
                    前測問卷</Link>
                <Link to='/page2' className={location.pathname === '/page2' ? activeStyle : style}>
                    後測問卷</Link>
                <Link to='/teach' className={location.pathname === '/teach' ? activeStyle : style}>
                    APP操作教學</Link>
            </div>          
        </div>
    )
}