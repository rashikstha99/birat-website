import React from 'react'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const page = () => {
  return (
    <div className='container py-12 flex flex-col items-start gap-2'>
        <div className="w-full lg:w-2/12 flex items-center gap-2 text-text-dark pt-0 lg:pt-4">
            <Calendar className="size-6 text-secondary" />
            <p>Aug 13, 2025</p>
        </div>
        <div className="w-full lg:w-10/12">
            <h1 className='mb-4 text-primary capitalize'>
                PCL Nursing Final Practical Exam Schedule 2082
            </h1>
            
            <Tabs defaultValue="1" className={'flex flex-col md:flex-row gap-4'}>
                <TabsList className={'w-full md:w-1/3 flex flex-col h-fit'}>
                    <TabsTrigger className={'w-full text-primary'} value="1"><h4>First Year</h4></TabsTrigger>
                    <TabsTrigger className={'w-full text-primary'} value="2"><h4>Second Year</h4></TabsTrigger>
                    <TabsTrigger className={'w-full text-primary'} value="3"><h4>Third Year</h4></TabsTrigger>
                </TabsList>
                <TabsContent className={'w-full md:w-2/3'} value="1">
                    <Image
                        className='h-[550px] w-auto object-contain m-auto pb-4'
                        src={'/first.jpeg'}
                        height={800}
                        width={800}
                        alt='Dummy Image'
                    />
                </TabsContent>
                <TabsContent className={'w-full md:w-2/3'} value="2">
                    <Image
                        className='h-[550px] w-auto object-contain m-auto pb-4'
                        src={'/second.jpeg'}
                        height={800}
                        width={800}
                        alt='Dummy Image'
                    />
                </TabsContent>
                <TabsContent className={'w-full md:w-2/3'} value="3">
                    <Image
                        className='h-[550px] w-auto object-contain m-auto pb-4'
                        src={'/third.jpeg'}
                        height={800}
                        width={800}
                        alt='Dummy Image'
                    />
                </TabsContent>
            </Tabs>
        </div>
    </div>
  )
}

export default page

export function generateMetadata({ params }) {

  // Capitalize the first letter of the slug and remove hyphen
  const title = "Birat Health College";

  return {
    title,
    description:
      "Welcome to Birat Health College official website, a trusted educational institution dedicated to empowering individuals and communities through education.",
  };
}
