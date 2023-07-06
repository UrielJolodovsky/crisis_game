'use client'
import Header from "@/components/Header";
import {Info} from "@/components/Opciones";
import {Opciones} from "@/components/Opciones";


export default function Home() {
    return (
      <main className='bg-gray h-screen'>
        <Header />
        <div className='flex m-10'>
        <Info />
        <Opciones/>
        </div>
      </main>
    )
  }