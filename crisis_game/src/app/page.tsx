'use client'
import Header from '@/components/Header'
import Info from '@/components/Info'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  <Header />
    // </main>
    <main className='bg-gray'>
      <Header />
      <Info />
    </main>
  )
}
