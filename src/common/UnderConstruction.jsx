import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.png'

const UnderConstruction = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-[100vh] overflow-hidden bg-white z-[9] flex flex-col justify-center items-center gap-8'>
        <Image
            src={Logo}
            width={300}
            height={300}
            alt='logo'
        />
        <h1 className='capitalize text-secondary'>Website is under construction.</h1>
        <h3 className='text-primary-light'>Coming Soon....</h3>
    </div>
  )
}

export default UnderConstruction