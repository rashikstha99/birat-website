import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logo.png'
import Wave from '../../public/wave.png'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-slate-50 to-zinc-300'>
        <div className="container py-2 flex gap-10">
            <Image
                className='absolute top-0 right-0 w-[600px] h-auto opacity-50 rotate-12'
                src={Wave}
                height={600}
                width={600}
                alt='Wave'
            />
            <div className="w-3/12 z-1">
                <Image
                    className='h-[75px] w-auto'
                    src={Logo}
                    height={200}
                    width={200}
                    alt='Logo'
                    loading='lazy'
                />
                <small className='text-secondary'>
                    In Province No. 1, a leading private sector college with complete physical infrastructure.
                </small>
            </div>
            <div className="w-9/12 flex flex-col gap-8 justify-center z-1">
                <div className="flex justify-between w-full">
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
                <div className="flex justify-end items-center gap-10">
                    <Facebook className='text-primary hover:text-secondary cursor-pointer' />
                    <Instagram className='text-primary hover:text-secondary cursor-pointer' />
                    <Linkedin className='text-primary hover:text-secondary cursor-pointer' />
                </div>
                <small className='text-secondary justify-end w-full flex'>
                    &copy; Birat Health College | All Rights Reserved.
                </small>
            </div>
        </div>
    </div>
  )
}

export default Footer