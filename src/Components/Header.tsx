import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between m-2 p-2'>
        <h1 className='font-bold text-xl'>Home</h1>
        <div className='flex gap-2'>
            <h1>Performance</h1>
            <h1>Relability</h1>
        </div>
      </nav>
    </div>
  )
}

export default Header
