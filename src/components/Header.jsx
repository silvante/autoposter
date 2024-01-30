import React from 'react'
import HeaderLogo from '../assets/images/header-logo.png'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='w-full flex justify-center bg-white'>
            <nav className='w-[96%] flex items-center justify-between my-2 xl:w-[1300px]'>
                <div className="flex space-x-10 items-center">
                    <Link to={'/'}>
                        <img src={HeaderLogo} alt="Logo autoPoster" className='w-[140px] sm:w-[160px]' />
                    </Link>
                    <div className="space-x-10 hidden lg:flex">
                        <NavLink className={'fontStyle font-bold'}><i className='bx bx-location-plus text-[#E70A32]'></i>Andijon</NavLink>
                        <NavLink className={'fontStyle font-bold'}>Katalog</NavLink>
                        <NavLink to={'/aksiyalar'} className={'fontStyle font-bold'}>Aksiyalar</NavLink>
                        <NavLink to={'/kredit'} className={'fontStyle font-bold'}>Kredit</NavLink>
                        <NavLink to={'/kontactlar'} className={'fontStyle font-bold'}>Kantaktlar</NavLink>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-5'>     
                    <div className='text-end hidden lg:block'>
                        <p className='font-bold text-[20px]'><i className='bx bx-phone'></i>  8 33 303 82 82</p>
                        <p className='text-[14px]'>eleckton gmail PF tekin</p>
                    </div>
                    <button className='text-[26px] lg:hidden'><i className='bx bx-menu'></i></button>
                </div>
            </nav>
        </header>
    )
}

export default Header