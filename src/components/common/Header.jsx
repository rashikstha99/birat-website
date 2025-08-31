import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo.jpg'

export const Header = () => {
  return (
    <div className='bg-text-light shadow1'>
        <nav className="container py-2 flex justify-center items-center gap-50">
            <Image
                className='h-[75px] w-auto'
                src={Logo}
                height={200}
                width={200}
                alt='Logo'
                priority
            />
            <div className="hidden lg:flex justify-between w-full">
                <Link href={'#'}>
                    <p className='text-primary hover:text-secondary'>Home</p>
                </Link>
                <Link href={'#'}>
                    <p className='text-primary hover:text-secondary'>About Us</p>
                </Link>
                <Link href={'#'}>
                    <p className='text-primary hover:text-secondary'>Faculty</p>
                </Link>
                <Link href={'/news-notices'}>
                    <p className='text-primary hover:text-secondary'>News & Notices</p>
                </Link>
                <Link href={'#'}>
                    <p className='text-primary hover:text-secondary'>Contact Us</p>
                </Link>
            </div>
        </nav>
    </div>
  )
}
