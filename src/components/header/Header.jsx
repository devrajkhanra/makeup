import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ toggleMenu, handleToggleMenu }) => {

    return (
        <nav className='bg-pink-300 border border-b-pink-400'>

            {/* desktop view */}
            <div className='max-w-5xl mx-auto'>
                <div className='flex justify-between h-16 max-h-16 items-center'>

                    {/* logo */}
                    <div className='pl-5 md:text-[200%] sm:txt-xl font-thin '>
                        <NavLink className={`flex items-center text-pink-700`} to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
                                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
                            </svg>
                            <span className='pl-2 font-bold'>Make up</span>
                        </NavLink>
                    </div>

                    {/* search */}
                    <div className='flex bg-white rounded-full px-2 items-center h-9 max-h-9'>
                        <input type='search' className=' pl-3 rounded-full outline-0' />
                        <span >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:cursor-pointer hover:text-slate-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>
                    </div>

                    {/* primary nav */}
                    <div className='bg-black hidden sm:grid grid-flow-col place-items-center justify-between h-16 max-h-16'>

                        {/* home */}
                        <NavLink
                            className={({ isActive }) => (isActive ?
                                'flex h-full px-3 bg-indigo-400 text-xl text-white font-normal hover:bg-white hover:text-yellow-700 transition duration-400 active:bg-yellow-900 active:text-yellow-100'
                                : 'flex h-full px-3 bg-pink-300 text-xl text-pink-50 font-semibold hover:bg-white hover:text-yellow-300 transition duration-400 active:bg-yellow-900 active:text-yellow-100')}
                            to='/'>
                            <div className='flex items-center place-content-center'>
                                <span>Home</span>
                                {/* <span className='hover:text-yellow-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </span> */}
                            </div>
                        </NavLink>

                        {/* brands */}
                        <NavLink
                            className={({ isActive }) => (isActive ?
                                'flex h-full px-3 bg-indigo-400 text-xl text-white font-normal hover:bg-white hover:text-yellow-700 transition duration-400 active:bg-yellow-900 active:text-yellow-100'
                                : 'flex h-full px-3 bg-pink-300 text-xl text-pink-50 font-semibold hover:bg-white hover:text-yellow-700 transition duration-400 active:bg-yellow-900 active:text-yellow-100')}
                            to='/brandPage'>
                            <div className='flex items-center'>
                                <span>Brands</span>
                            </div>
                        </NavLink>
                    </div>

                    {/* mobile view */}
                    <div className='sm:hidden flex items-center pr-5'>
                        <button onClick={handleToggleMenu} className='text-pink-700'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                                <path strokeLinecap="round" strokeLinejoin="round" d={`${toggleMenu ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'}`} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile view menu */}
            <div>
                {toggleMenu &&
                    <li className='list-none'>
                        <Link className=' block p-4 hover:bg-pink-800 hover:text-pink-100' to='/'>Home</Link>
                        <Link className='block p-4 hover:bg-pink-800 hover:text-pink-100' to='/brandPage'>Brands</Link>
                    </li>}
            </div>
        </nav >
    )
}

export default Header