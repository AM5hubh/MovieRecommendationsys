import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='shadow-2xl bg-zinc-900 shadow-zinc-900 p-4 w-full text-white flex justify-center items-center rounded-b-3xl '>
            <div className='w-full max-w-[1700px] flex items-center justify-between'>
                <p className="text-2xl font-bold flex items-center"><span className='font-black text-3xl text-red-600'>Movie</span>R<img src="https://the3dmarket.com/cdn/shop/products/new_red_cyan_blue_1024x1024.png?v=1571438517" className='w-[100px] ' /></p>
                <div className='relative items-center hidden sm:block'>
                    <input type="text" className="bg-black p-2 h-10 rounded-2xl text-gray-400 text-sm placeholder:text-sm py-3 pl-4 pr-10" placeholder='Enter Movie Name'/>
                    <button className="p-3 hover:text-red-500 absolute rounded-full top-50% -right-0"><IoIosSearch /></button> 
                </div>
                <div className='p-1 rounded-3xl'>
                    <Link to="/Genre">
                        <button className="p-2 font-medium hover:text-red-500 text-white text-2xl">Genre</button>
                    </Link>
                    <button className="hidden p-2 font-medium hover:text-red-500 text-white text-2xl">Login</button>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar