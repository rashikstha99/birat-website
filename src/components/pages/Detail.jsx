import React from 'react'
import Image from 'next/image'
import NoticeImg from '../../public/scan.jpeg'
// import NoticePdf from '../../public/2082-Bhadra-Yearly-Exam Schedule.pdf'
import { Calendar } from 'lucide-react'


const Detail = () => {
  return (
    <div className='container py-12 flex flex-col lg:flex-row items-start gap-2 md:gap-0'>
        <div className="w-full lg:w-2/12 flex items-center gap-2 text-text-dark pt-0 lg:pt-4">
            <Calendar className="size-6 text-secondary" />
            <p>Aug 13, 2025</p>
        </div>
        <div className="w-full lg:w-10/12">
            <h1 className='mb-4 text-primary text-center capitalize'>Yearly Exam Schedule for Bhadra 2082</h1>
            {/* <Image
                className='h-[550px] w-auto object-contain m-auto pb-4'
                src={NoticeImg}
                height={800}
                width={800}
                alt='Dummy Image'
            /> */}
            <iframe
                src="/2082-Bhadra-Yearly-Exam Schedule.pdf"
                className="h-[550px] w-full m-auto"
                frameBorder="0"
            ></iframe>
        </div>
    </div>
  )
}

export default Detail