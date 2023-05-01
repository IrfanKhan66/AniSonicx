import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.svg'
import { RiMovie2Line, RiShuffleFill, RiTv2Line } from 'react-icons/ri'
import { RxArrowLeft, RxHamburgerMenu, RxMagnifyingGlass, RxPerson } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate();
    const navRef = useRef(null);
    const headRef = useRef(null);
    const searchRef = useRef(null);
    window.onscroll = () => {
        const top = window.scrollY;
        if (top >= 100) {
            headRef.current.classList.add('bg-zinc-800')
        } else
            headRef.current.classList.remove('bg-zinc-800')
    }

    const closeNav = () => {
        navRef.current.classList.add('-left-full')
        navRef.current.classList.remove('left-0')
        // headRef.current.style.display = ""
    }
    const openNav = () => {
        navRef.current.classList.add('left-0')
        navRef.current.classList.remove('-left-full')
    }
    const openSearch = () => {
        if (searchRef.current.classList.contains('-transform-y-10')) {
            searchRef.current.classList.add('translate-y-20')
            searchRef.current.classList.add('opacity-100')
            searchRef.current.classList.remove('opacity-0')
            searchRef.current.classList.remove('-transform-y-10')
            // headRef.current.classList.remove('h-16')
            // headRef.current.classList.add('h-32')
        } else {
            searchRef.current.classList.add('-transform-y-10')
            searchRef.current.classList.add('opacity-0')
            searchRef.current.classList.remove('opacity-100')
            searchRef.current.classList.remove('translate-y-20')
            // headRef.current.classList.remove('h-32')
            // headRef.current.classList.add('h-16')
        }
    }

    const goToRandom = () => {

    }

    return (
        <>
            <header ref={headRef} className='fixed top-0 left-0 select-none z-40 w-full h-12 laptop:h-16 flex justify-start space-x-3 transition-colors'>
                <ul ref={navRef} className='inline-flex w-56 transition-all select-none fixed flex-col z-50 overflow-hidden text-white -left-full space-y-8 px-6 bg-slate-900 h-full items-center laptop:left-0 laptop:bg-transparent laptop:flex-row laptop:space-y-0 laptop:items-center laptop:px-0 laptop:whitespace-nowrap laptop:space-x-4 laptop:w-auto laptop:h-auto laptop:min-w-fit laptop:order-1 laptop:ml-auto laptop:relative laptop:self-center laptop:overflow-visible'>
                    <button onClick={closeNav} className='text-slate-100 bg-gradient-to-b laptop:hidden rounded-full text-lg p-2 from-slate-500 to-slate-400 inline-flex items-center mr-auto mt-4'><RxArrowLeft /></button>
                    <button onClick={goToRandom} className='inline-flex items-center w-full text-left font-medium space-x-3 transition-colors laptop:hover:text-red-400' ><RiShuffleFill className='laptop:hidden' /><p>Random</p></button>
                    <Link className='inline-flex items-center w-full text-left font-medium space-x-3 transition-colors laptop:hover:text-red-400' to={'/movies'}><RiMovie2Line className='laptop:hidden' /><p>Movies</p></Link>
                    <Link className='inline-flex items-center w-full text-left font-medium space-x-3 transition-colors laptop:hover:text-red-400' to={'/tv'}><RiTv2Line className='laptop:hidden' /><p>TV Shows</p></Link>
                    <Link className='inline-flex items-center w-full text-left font-medium space-x-3 transition-colors laptop:hover:text-red-400' to={'/top-rated'}><RiTv2Line className='laptop:hidden' /><p>Top rated</p></Link>
                    <Link className='inline-flex items-center w-full text-left font-medium space-x-3 transition-colors laptop:hover:text-red-400' to={'/popular'}><RiTv2Line className='laptop:hidden' /><p>Popular</p></Link>
                </ul>
                <button onClick={openNav} className='text-slate-100 pl-2 text-xl lo-res-tablet:pl-8 tablet:pl-12 laptop:hidden'><RxHamburgerMenu /></button>
                <Link to={'/'} className='items-center relative inline-flex w-8 ml-2 mr-28 tablet:w-10'>
                    <img className='rounded-full object-cover h-5/6 mr-2 laptop:ml-12' src={logo} alt="" />
                    <h1 className='text-slate-300 text-sm font-semibold z-10 lo-res-tablet:text-lg tablet:text-xl laptop:2xl hi-res-laptop:3xl'>
                        AniSonicx
                    </h1>
                </Link>
                <div className='flex justify-end w-full space-x-3 pr-4 items-center lo-res-tablet:pr-8 tablet:pr-12 laptop:pr-16 tablet:order-1 tablet:justify-self-start tablet:w-auto'>
                    <button onClick={openSearch} className='text-slate-200 text-2xl tablet:hidden '><RxMagnifyingGlass /></button>
                    <button className='text-slate-200 hover:text-teal-400 transition-colors text-2xl'><RxPerson /></button>
                </div>
                <form action="/search" method="get" ref={searchRef} className='absolute inline-flex transition-transform opacity-0 justify-end w-full -translate-x-10 -translate-y-10 tablet:opacity-100 tablet:relative tablet:translate-y-0 tablet:self-center tablet:pl-5 tablet:translate-x-28 tablet:justify-start laptop:translate-x-44'>
                    <input type="text" className='appearance-none rounded-lg focus-within:outline-2 focus-within:outline-white h-9 pl-4 w-[80%] tablet:w-[65%] laptop:w-[60%] outline-none text-slate-200 bg-zinc-800' autoCorrect='off' spellCheck={false} autoCapitalize='false' autoComplete='off' placeholder='Search anime..' name="keyword" />
                </form>
            </header>
        </>
    )
}
