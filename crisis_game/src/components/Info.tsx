import React, { useState } from 'react'

const Info = () => {
    const [dinero, setDinero] = useState(1000000)
    const [cantEmpleados, setCantEmpleados] = useState(10)
    const [cantInversores, setCantInversores] = useState(3)
    const [Ingresos, setIngresos] = useState(0)
  return (
    <div className='w-96 h-80 bg-white rounded-xl ml-10 hover:scale-105 col-span-2'>
        <div>
            <h2 className='text-black font-bold text-2xl pl-10 pt-5'>
                Información:
            </h2>
        </div>
        <div className='pl-5 pt-6'>
                <h2 className="text-2xl text-black pb-5">
                    Dinero: ${dinero}
                </h2>
                <h2 className='text-2xl text-black pb-5'>
                    Cant. Empleados: {cantEmpleados}
                </h2>
                <h2 className='text-2xl text-black'>
                    Cant. Inversores: {cantInversores}
                </h2>
        </div>
    </div>
  )
}

export default Info