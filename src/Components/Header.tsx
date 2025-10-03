import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='absolute z-10 w-full'>
      <nav className='flex justify-between m-2 p-2'>
        <h1 className='font-bold text-xl'>Home</h1>
        <div className='flex gap-2'>
            <Link href="/performance">Performance</Link>
            <Link href='/relability'>Relability</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
