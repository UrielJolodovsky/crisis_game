import { useRouter } from 'next/navigation';
import React from 'react';  


const EmpezarButton = () => {   
    const router = useRouter();
        return (     
        <button onClick={() => router.push('/dashboard')} className="bg-blue ml-10 mt-5 w-[20rem] h-[16rem] rounded-lg hover:bg-lightblue text-white text-2xl font-bold row-span-2 col-span-2">
                Empezar
        </button>   
    ); 
};  

export default EmpezarButton;