'use client'
import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [dinero, setDinero] = useState(1000000)
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  <Header />
    // </main>
    <>
      <Header />
      <div className='pl-10 pt-10'>
                    <h2 className="text-2xl font-semibold text-black">
                      Contador: ${dinero}
                    </h2>
      </div>
    </>
  )
}
