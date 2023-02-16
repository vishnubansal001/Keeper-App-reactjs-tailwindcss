import React from 'react'

export default function Footer() {
    const year = new Date();
  return (
    <footer className='absolute text-center bottom-0 w-full h-[2.5rem]'>
        <p className='bg-[#ccc]'>Copyright ⓒ {year.getFullYear()}</p> 
    </footer>
  )
}
