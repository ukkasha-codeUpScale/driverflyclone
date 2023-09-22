import React from 'react';
import Link from 'next/link';


export default function Demosec() {
  return (<>
    <div className='demosec'>
        <div className='flex flex-col justify-center items-center text-white h-full'>
            <h1 className='text-5xl font-semibold  '>Are you a motor Carrier ?</h1>
            <Link href={''} className='bg-[#235555]  px-5 py-3 rounded-lg mt-5 font-medium hover:bg-[#2c6969] '>Request Demo</Link>
        </div>

    </div>
    <div className='bg-gray-300 py-14 px-48 text-white '>
    `<div className='flex  '>
        <div className='demoChild1 w-2/4  px-8 py-10 flex flex-col justify-around'>
          <h1 className='text-5xl font-light'>Find Jobs</h1>
          <p className='text-lg font-light'>It could not be a better time than now to be a CDL driver. With over 650 trucking companies in our system, we help drivers get the best job possible for their specific needs. Through our driverhiringusa.com portal, drivers can achieve:</p>
          <ul className='mt-5 text-lg font-light'>
           <li>Top paying Jobs</li> 
           <li>Best Home Time</li> 
           <li>Faster & Easier Hiring</li> 
          </ul>        
          <div className='flex mt-8 items-start gap-4'>
            <Link className='bg-[#207575] px-4 py-2 rounded-md  border-[#228d8d] hover:bg-[#2e9e9e]' href={'/signup'}>SignUp</Link>
            <Link className='bg-[#207575] px-4 py-2 rounded-md  border-[#228d8d] hover:bg-[#2e9e9e]' href={''}>Browse Jobs</Link>
          </div>
        </div>

        <div className='demoChild2  w-2/4  px-8 py-10 flex flex-col justify-evenly'>
        <h1 className='text-5xl font-light'>Hire Drivers</h1>
          <p className='text-lg font-light'>We work with small to mid size carriers throughout North America to provide affordable services that allow you to compete and attract drivers digitally as well as increase your retention rates. Our automated solutions and robust network with access to 170,000 registered CDL drivers enables:</p>
          <ul className='mt-5 text-lg font-light'>
           <li>Greater Reach</li> 
           <li>Faster Hiring</li> 
           <li>Higher Retention</li> 
          </ul>    
          <Link className='bg-[#207575] px-4 py-2 mt-4 w-1/5 flex-shrink rounded-md border-1 border-[#228d8d] hover:bg-[#318585]' href={'/signup'}>Learn More</Link>

        </div>
      </div>

    </div>
    
    </>
  )
}
