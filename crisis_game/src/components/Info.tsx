import React, { useState } from 'react'

const Info = () => {
    const [dinero, setDinero] = useState(1000000)
  return (
    <div className='w-96 h-80 bg-white rounded-xl mt-5 ml-5'>
        <div>
            <h2 className='text-black font-bold text-2xl pl-10 pt-5'>
                Información:
            </h2>
        </div>
        <div className='pl-10 pt-10'>
                <h2 className="text-2xl text-black">
                    Contador: ${dinero}
                </h2>
        </div>
    </div>
  )
}

export default Info