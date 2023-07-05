'use client'
import EmpezarButton from '@/components/Empezar'
import GameDescription from '@/components/GameDescription'
import Header from '@/components/Header'
import Info from '@/components/Info'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  <Header />
    // </main>
    <main className='bg-gray h-screen'>
      <Header />
      <div className='m-5 grid grid-rows-3 grid-flow-col'>
      <GameDescription />
      <Info />
      <EmpezarButton />
      </div>
    </main>
  )
}
