import React, { useState } from 'react'
import datos  from '../../global.d.ts'


const Info = () => {

  return (
    <div className='w-96 h-80 bg-white rounded-xl hover:scale-105 col-span-2'>
        <div>
            <h2 className='text-black font-bold text-2xl pl-5 pt-5'>
                Información:
            </h2>
        </div>
        <div className='pl-8 pt-5'>
                <h2 className="text-2xl text-black pb-5">
                    Dinero: ${datos[0]}
                </h2>
                <h2 className='text-2xl text-black pb-5'>
                    Empleados: {datos[1]}
                </h2>
                <h2 className='text-2xl text-black pb-5'>
                    Inversores: {datos[2]}
                </h2>
                {/* <h2 className='text-2xl text-black pb-5'>
                    Ingresos: ${Ingresos}
                </h2> */}
                {/* <h2 className='text-2xl text-black pb-5'>
                    Sueldo Empleados: $1000
                </h2> */}
        </div>
    </div>
  )
}
export default Info