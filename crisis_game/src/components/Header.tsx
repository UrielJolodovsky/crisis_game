'use client'
import React, { useState } from 'react'

const Header = () => {
    const [fecha, setFecha] = useState('1 de Enero de 2023')
  return (
        <div className="w-full h-24 bg-blue align-middle pt-4">
            <div className="container mx-auto flex justify-around items-center">
                <div className='border-solid border-2 rounded-lg align-middle hover:scale-110 cursor-pointer'>
                    <h2 className="text-2xl font-semibold text-black p-3">
                        {fecha}
                    </h2>
                </div>
            </div>
        </div>
  )
}

export default Header