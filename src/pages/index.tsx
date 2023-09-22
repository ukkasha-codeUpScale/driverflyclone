import Image from 'next/image'
import { Inter } from 'next/font/google'
import Herosec from '@/components/herosec/herosec'
import Navbar from '@/components/navbar/navbar'
import Demosec from '@/components/demosec/demosec'
import Howitworks from '@/components/howitwork/howitworks'


export default function Home() {
  return (
    <>
   <Navbar />
    <Herosec />
    <Demosec />
    <Howitworks />

    </>
    )
}
