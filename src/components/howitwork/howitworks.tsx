import React from 'react'
import { BsFileZip } from "react-icons/bs";



export default function Howitworks() {
  return (
    <div className="howitworks p-8">
        <div className='flex flex-col  w-full items-center'>
            <h1 className='text-4xl font-medium'>How It Work</h1>
            <h4 className='text-2xl'>Drivers</h4>
        </div>
    <div className='text-black'>
        <h1>this is icon</h1>
        <BsFileZip className="iconHowitwork" />
        <p>lower text</p>
    </div>
    </div>
  )
}
