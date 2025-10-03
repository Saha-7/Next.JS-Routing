import Image from 'next/image'
import React from 'react'
import car from 'public/car.jpg'

const Hero = () => {
  return (
    <div className='relative h-screen'>
        <div className='absolute inset-0 -z-10'>
      <Image
      src={car}
      alt="Picture of the author"
      fill
      style={{objectFit: 'cover'}}
    />
    </div>
    <div className='flex justify-center items-center pt-20'>
        <h1 className='font-bold text-4xl text-white'>Dodge Demon</h1>
    </div>
    </div>
  )
}

export default Hero
