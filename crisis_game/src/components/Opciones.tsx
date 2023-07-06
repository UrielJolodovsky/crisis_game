import React, { useState } from 'react';
import datos  from '../../global.d.ts'
// interface Props {
//     cantEmpleados: number;
//     setCantEmpleados: React.Dispatch<React.SetStateAction<number>>;
// }

export const Opciones = () => {
    const [numSituacion, setNumSituacion] = useState(0);
    const movimientos = [
        {
        titulo: 'Invertir en publicidad',
        pregunta: '¿Cuánto dinero desea invertir en publicidad?',
        opcion1: 'Hola',
        opcion2: 'Como',
        opcion3: 'Estas',
        },
]
const handleOpcionA = () => {
    setNumSituacion(numSituacion + 1)
}
const handleOpcionB = () => {
    setNumSituacion(numSituacion + 1)
}
const handleOpcionC = () => {
    setNumSituacion(numSituacion + 1)
    console.log(numSituacion)
    console.log(datos[0])
    datos[0] = datos[0] - 5
    console.log(datos[0])

}
    return (
        <main className='flex'>
        <div className="bg-white w-[54rem] h-96 p-6 mt-0 ml-5 rounded-lg shadow-lg items-center hover:scale-105 row-span-3">
            <h1 className='text-3xl font-bold mb-4'>
                {movimientos[0]['titulo']}
            </h1>
            <h2 className='text-lg mb-6'>
                {movimientos[0]['pregunta']}
            </h2>
            <div className='justify-items-center w-full h-4/5'>
                <h3 className='ml-5 mt-5 mb-10 rounded-lg text-black text-2xl row-span-2 col-span-2'>
                    Opción A: {movimientos[0]['opcion1']}
                </h3>
                <h3 className='ml-5 mt-5 mb-10 rounded-lg text-black text-2xl row-span-2 col-span-2'>
                    Opción B: {movimientos[0]['opcion2']}
                </h3>
                <h3 className='ml-5 mt-5 mb-10 rounded-lg text-black text-2xl row-span-2 col-span-2'>
                    Opción C: {movimientos[0]['opcion3']}
                </h3>
            </div>
        </div>
        <div className='grid grid-rows-3'>
                <button onClick={handleOpcionA} className='bg-white h-20 ml-5 mt-5 mb-5 rounded-lg hover:bg-lightblue text-black text-2xl '>
                Opción A
                </button>
                <button onClick={handleOpcionB} className='bg-white h-20 ml-5 mt-5 mb-5 rounded-lg hover:bg-lightblue text-black text-2xl'>
                Opción B
                </button>
                <button onClick={handleOpcionC} className='bg-white h-20 ml-5 mt-5 mb-5 rounded-lg hover:bg-lightblue text-black text-2xl'>
                Opción C
                </button>
        </div>
        </main>
    )

}


export const Info = () => {

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
