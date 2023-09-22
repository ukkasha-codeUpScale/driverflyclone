import React from 'react'
import Image from 'next/image'
import logoImg from '../../../public/driverfly-logo-square.png'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='bg-black text-white flex items-center justify-around p-1'>
        <div className='logo h-20 w-40 flex justify-center items-center'>
            <Link href={'/'}>
            <Image src={logoImg} className='logoIcon' alt='logoicon' />
            </Link>
        </div>
        <div className='text-lg font-medium flex justify-evenly w-2/4'>
            <Link className='hover:text-[#2ec8c4]' href={'/home'}>Home</Link>
            <Link className='hover:text-[#2ec8c4]' href={'/about'}>About Us</Link>
            <Link className='hover:text-[#2ec8c4]' href={'/findjob'}>Find a Job</Link>
            <Link className='hover:text-[#2ec8c4]' href={'/driverResource'}>Driver Resources</Link>
            <Link className='hover:text-[#2ec8c4]' href={'/mototrCarrier'}>Motor Carrier Solutions</Link>
            <Link className='hover:text-[#2ec8c4]' href={'/blogs'}>Blogs</Link>
        </div>
        <div className='space-x-2'> 
            <Link className='border-2 border-[#2ec8c4] rounded-md px-4 py-2 hover:bg-[#42b3afef] hover:border-2 hover:border-[#64d8c879]' href={'/signup'}>Sign Up</Link>
            <Link className='border-2 border-[#2ec8c4] rounded-md px-4 py-2 hover:bg-[#42b3afef] hover:border-2 hover:border-[#64d8c879]' href={'/login'}>Login</Link>
        </div>
    </div>
  )
}
