'use client'
import React, { useState } from 'react'

const Header = () => {
    const [dinero, setDinero] = useState(1000000)
    const [fecha, setFecha] = useState()
  return (
        <div className="w-full h-24 bg-blue-500 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Contador: ${dinero}
                    </h2>
                </div>
                <div className='ml-3'>
                    <h2 className="text-2xl font-semibold text-black">
                        Fecha: {fecha}
                    </h2>
                </div>
            </div>
        </div>
  )
}

export default Header