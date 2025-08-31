import React from 'react'
import Detail from '@/components/pages/Detail'

const page = () => {
  return (
    <>
        <Detail/>
    </>
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
