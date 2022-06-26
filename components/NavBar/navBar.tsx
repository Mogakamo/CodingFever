import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='h-16 shadow-md flex items-center px-28 justify-between'>
        {/* Logo */}
        <div>
            <h1 className='text-6xl font-bold text-purple-900'>cF</h1>
        </div>
        {/* Quick links */}
        <div>
            <ul className='flex space-x-10 text-lg font-semibold opacity-80'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Contact Us</Link></li>
            </ul>
        </div>
        <div>
            <button className='rounded-full bg-purple-800 text-white px-6 py-2'>Get Started</button>
        </div>
    </div>
  )
}

export default NavBar