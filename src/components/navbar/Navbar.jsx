import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-[50px] w-full absolute top-0  px-[40px]'>
      <div className=''><p className='text-[30px] font-[700]'>Port<span className='text-blue-500'>folio</span></p></div>
      <div className='flex justify-center items-center gap-[40px]'>
        <p className='text-[13px]'>Home</p>
        <p className='text-[13px]'>About</p>
        <p className='text-[13px]'>Service</p>
        <p className='text-[13px]'>Projects</p>
        <p className='text-[13px]'>Experience</p>
        <p className='text-[13px]'>Contact</p>
      </div>
      <div className='z-10'>gouthamkrishnaps02@gmail.com</div>
    </div>
  )
}

export default Navbar
