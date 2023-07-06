'use client'
import { info } from 'console';
import React, { useState, useEffect } from 'react';

// interface Props {
//     cantEmpleados: number;
//     setCantEmpleados: React.Dispatch<React.SetStateAction<number>>;
// }
/*var dinero = 200000;
var empleados = 80;
var inversores = 5;
var numSituacion = 0;
var pasarSituacion = false;*/



const Global = () => {

    const [dinero, setDinero] = useState(200000);
    const [empleados, setEmpleados] = useState(80);
    const [inversores, setInversores] = useState(5);
    const [numSituacion, setNumSituacion] = useState(0);
    const [fecha, setFecha] = useState("6 de Julio de 2023");
    const [pasarSituacion, setPasarSituacion] = useState(false);


   
    const movimientos = [
        {
            fecha: "6 de Julio de 2023",
            titulo: "Decision importantes para la temporada de Ski",
            pregunta: "Ante la decadencia económica del país, las ventas en 'Snow Adventure' han estado disminuyendo. ¿Qué estrategia implementarías para atraer a más visitantes y aumentar las ventas?",
            opcionA: "Reducir los precios y ofrecer descuentos significativos en los pases y servicios.",
            opcionB: "Mejorar la calidad y variedad de las actividades ofrecidas para atraer a un público más amplio.",
            opcionC: "Implementar una agresiva campaña de marketing para resaltar las ventajas únicas de 'Snow Adventure' en comparación con la competencia."
          },
          {
            fecha: "6 de Julio de 2023",
            titulo: "Decision importantes para la temporada de Ski",
            pregunta: "Una nueva competencia ha surgido en la región, atrayendo a los amantes de los deportes de invierno con ofertas atractivas y precios competitivos. Nuestros precios son más altos que los suyos. ¿Cómo responderías a esta situación?",
            opcionA: "Analizar y ajustar nuestros precios y ofertas para competir directamente con la nueva empresa.",
            opcionB: "Enfocarse en mejorar la calidad del servicio y la experiencia del cliente para diferenciarnos de la competencia.",
            opcionC: "Establecer alianzas estratégicas con la competencia para ofrecer paquetes combinados que beneficien a ambos centros."
          },
          {
            fecha: "6 de Julio de 2023",
            titulo: "Decision importantes para la temporada de Ski",
            pregunta: "Ante la disminución de las ventas, es necesario tomar medidas para reducir costos y mantener el negocio a flote. ¿Cuál sería tu enfoque principal?",
            opcionA: "Realizar recortes en el personal y ajustar los gastos operativos para lograr una reducción significativa de costos.",
            opcionB: "Buscar oportunidades de optimizar los procesos internos y mejorar la eficiencia operativa para reducir costos sin afectar la calidad del servicio.",
            opcionC: "Explorar nuevas fuentes de ingresos y diversificar las ofertas de 'Snow Adventure' para compensar la disminución en las ventas."
          },
          {
            fecha: "21 de Julio de 2023",
            titulo: "Apertura de temporada",
            pregunta: "¿Inviertes en una campaña publicitaria para atraer más visitantes?",
            opcionA: "Sí, invierto en una campaña publicitaria masiva.",
            opcionB: "No, mantengo el presupuesto publicitario actual.",
            opcionC: "Si, invierto en una campaña publicitaria, pero con un presupuesto reducido para ahorrar costos."
          },
          {
            fecha: "15 de Agosto de 2023",
            titulo: "Quejas de los clientes.",
            pregunta: "Los clientes comienzan a quejarse por el mal funcionamiento de los trineos y su gran antigüedad ¿Qué haces frente a esta situación?",
            opcionA: "Dejamos los trineos como están al no contar con el suficiente presupuesto.",
            opcionB: "Bajamos el precio de esa actividad",
            opcionC: "Reemplazo todos los trineos por unos de la mejor calidad posible."
          },
          {
            fecha: "10 de Septiembre de 2023",
            titulo: "Final de Temporada",
            pregunta: "Los clientes comienzan a quejarse por el mal funcionamiento de los trineos y su gran antigüedad ¿Qué haces frente a esta situación?",
            opcionA: "Sí, reduzco el personal significativamente.",
            opcionB: "No, mantengo el personal actual.",
            opcionC: "Contrato personal adicional para mejorar la experiencia del cliente."
          },
          {
            fecha: "20 de Octubre de 2023",
            titulo: "Promoción de actividades adicionales para atraer más visitantes",
            pregunta: "¿Inviertes en nuevas actividades para diversificar la oferta?",
            opcionA: "Sí, agrego nuevas actividades como patinaje sobre hielo y trineos tirados por perros.",
            opcionB: "No, mantengo las actividades actuales sin cambios.",
            opcionC: "Elimino algunas actividades para reducir costos."
          },
          {
            fecha: "1 de Noviembre de 2023",
            titulo: "Anuncio de mejoras en las instalaciones del centro de Ski",
            pregunta: "¿Inviertes en mejoras en las instalaciones para atraer a visitantes de lujo?",
            opcionA: "Sí, realizo mejoras significativas en las instalaciones y servicios.",
            opcionB: "No, mantengo las instalaciones actuales sin cambios.",
            opcionC: "Realizo mejoras mínimas para mantener los costos bajos."
          },
          {
            fecha: "1 de Diciembre de 2023",
            titulo: "Con el fin definitivo de la temporada de ski, es necesario tomar decisiones estratégicas para enfrentar esta situación.",
            pregunta: "¿Qué acción tomar?",
            opcionA: "Cerrar el lugar por completo, no pagar a nuestros empleados y esperar a la próxima temporada de invierno.",
            opcionB: "Mantener el lugar abierto durante el verano, aunque con una reducción en el número de empleados.",
            opcionC: "Innovar e incluir teleféricos a pesar del riesgo económico, sabiendo que la temporada no es la más propicia."
          },
          {
            fecha: "15 de Enero de 2024",
            titulo: "Estrategias para enfrentar la crisis financiera",
            pregunta: "La empresa ha entrado en una crisis financiera y es necesario tomar medidas para superarla. ¿Qué estrategia consideras más efectiva?",
            opcionA: "Recortar gastos drásticamente, reduciendo la plantilla de empleados y eliminando servicios no esenciales.",
            opcionB: "Renegociar contratos con proveedores y buscar descuentos o términos de pago más favorables.",
            opcionC: "Renegociar montos y fechas de pago con los acreedores para aliviar la presión financiera a corto plazo."
          },
          {
            fecha: "20 de Febrero de 2024",
            titulo: "Alternativas para superar la crisis",
            pregunta: "La crisis financiera persiste y es necesario explorar alternativas para salir adelante. ¿Qué enfoque consideras más adecuado?",
            opcionA: "Buscar inversores o socios estratégicos que puedan aportar capital adicional a la empresa.",
            opcionB: "Implementar medidas de ahorro y eficiencia en todos los departamentos, incentivando la creatividad y la colaboración de los empleados.",
            opcionC: "Explorar opciones de financiamiento, como préstamos o líneas de crédito, para cubrir las necesidades financieras y mantener la operatividad del negocio."
          },
          {
            fecha: "7 de Marzo de 2024",
            titulo: "Solicitud de prórroga en los pagos",
            pregunta: "Nos encontramos en una situación financiera apremiante y necesitamos solicitar una prórroga en nuestros pagos. ¿Cómo abordarías esta situación?",
            opcionA: "Comunicarme con nuestros acreedores de manera proactiva y transparente, explicando la situación y solicitando una extensión de los plazos de pago.",
            opcionB: "Intentar renegociar los términos de los pagos, ofreciendo un plan de pagos modificado que se ajuste a nuestras posibilidades actuales.",
            opcionC: "Postergar la solicitud de prórroga y continuar con los pagos según lo acordado inicialmente, confiando en que la situación mejorará pronto."
          },
          {
            fecha: "2 de Abril de 2024",
            titulo: "Lanzamiento de una nueva atracción en un centro turístico cercano",
            pregunta: "¿Cómo destacar frente a la nueva atracción y mantener a nuestros visitantes?",
            opcionA: "Mejorar la calidad de nuestros servicios y ofrecer experiencias personalizadas a los visitantes.",
            opcionB: "Crear paquetes combinados que incluyan acceso a ambas atracciones, ofreciendo descuentos atractivos.",
            opcionC: "Diseñar promociones especiales que resalten las ventajas únicas de nuestro centro de ski."
          },
          {
            fecha: "7 de Mayo de 2024",
            titulo: "Evaluación de la eficiencia de los departamentos",
            pregunta: "Te enfrentas a una situación difícil en la que debes reducir la plantilla de empleados. Resulta que tu mejor amigo Marcelo Ranzoni trabaja en una sección ineficiente de la empresa y su desempeño afecta negativamente nuestra productividad y resultados. ¿Qué decisión tomas?",
            opcionA: "Priorizo la eficiencia y el bienestar de la empresa, y procedo con el despido de mi mejor amigo, aunque sea una decisión dolorosa.",
            opcionB: "Decido darle una oportunidad más a mi amigo y lo traslado a otro departamento en el que pueda mejorar su desempeño.",
            opcionC: "Me niego a despedir a Ranzo, por lo que decido bajarle el sueldo así sigue trabajando para la empresa."
          },
          {
            fecha: "12 de Junio de 2024",
            titulo: "Cambios en las preferencias de los turistas hacia actividades más sostenibles",
            pregunta: "¿Cómo adaptarnos a las nuevas demandas del mercado?",
            opcionA: "Implementar medidas ecológicas en nuestras operaciones, como paneles solares y programas de reciclaje.",
            opcionB: "Desarrollar programas de educación ambiental y promover el turismo responsable.",
            opcionC: "Ofrecer actividades de aventura con un enfoque en la conservación del medio ambiente, como excursiones guiadas de observación de aves."
          },
          {
            fecha: "5 de Julio de 2024",
            titulo: "Desarrollo de tecnología de realidad virtual en el sector turístico",
            pregunta: "¿Debemos incorporar experiencias de realidad virtual en nuestras actividades?",
            opcionA: "Invertir en tecnología de realidad virtual para ofrecer experiencias inmersivas en la nieve.",
            opcionB: "Mantener nuestras actividades enfocadas en laexperiencia real de la nieve y la naturaleza.",
            opcionC: "Colaborar con empresas de tecnología de realidad virtual para desarrollar una atracción conjunta."
          }
]
const variaciones = [
    {
        A: [100000,0,0],
        B: [-50000,0,0],
        C: [50000,0,0]
    },
    {
        A: [0,0,0],
        B: [40000,0,1],
        C: [-80000,0,0]
    },
    {
        A: [0,-15,0],
        B: [0,0,0],
        C: [10000,10,2]
    },
    {
        A: [80000,5,2],
        B: [-70000,0,0],
        C: [20000,3,1]
    },
    {
        A: [-100000,-10,-2],
        B: [10000,0,-1],
        C: [-100000,-10,-2]
    },
    {
        A: [20000,-15,0],
        B: [-70000,0,0],
        C: [-150000,10,0]
    },
    {
        A: [-80000,5,-2],
        B: [5000,0,0],
        C: [20000,-5,0]
    },
    {
        A: [-120000,10,-2],
        B: [-80000,0,0],
        C: [-40000,0,0]
    },
    {
        A: [-200000,0,-10],
        B: [-150000,-20,-5],
        C: [-100000,5,3]
    },
    {
        A: [20000,-15,-1],
        B: [60000,0,0],
        C: [70000,0,0]
    },
    {
        A: [-70000,0,2],
        B: [40000,5,0],
        C: [-40000,0,-2]
    },
    {
        A: [20000,0,0],
        B: [50000,0,1],
        C: [-60000,-5,-3]
    },
    {
        A: [40000,0,1],
        B: [0,0,0],
        C: [40000,0,2]
    },
    {
        A: [50000,-10,2],
        B: [-20000,-10,0],
        C: [-250000,-15,-5]
    },
    {
        A: [-30000,5,2],
        B: [20000,5,3],
        C: [40000,5,4]
    },
    {
        A: [-100000,10,-5],
        B: [40000,0,0],
        C: [5000,5,2]
    }
    ]
const handleOpcionA = () => {
    setNumSituacion(numSituacion + 1);
    setFecha(movimientos[numSituacion]["fecha"])
    setDinero(dinero + variaciones[numSituacion]["A"][0]);
    setEmpleados(empleados + variaciones[numSituacion]["A"][1])
    if (empleados < 0) {
        setEmpleados(0)
    }
    setInversores(inversores + variaciones[numSituacion]["A"][2])
    if (inversores < 0) {
        setInversores(0)
    }
    setPasarSituacion(true)
}
const handleOpcionB = () => {
    setNumSituacion(numSituacion + 1);
    setFecha(movimientos[numSituacion]["fecha"])
    setDinero(dinero + variaciones[numSituacion]["B"][0]);
    setEmpleados(empleados + variaciones[numSituacion]["B"][1])
    if (empleados < 0) {
        setEmpleados(0)
    }
    setInversores(inversores + variaciones[numSituacion]["B"][2])
    if (inversores < 0) {
        setInversores(0)
    }
    setPasarSituacion(true)
}
const handleOpcionC = () => {
    setNumSituacion(numSituacion + 1);
    setFecha(movimientos[numSituacion]["fecha"])
    setDinero(dinero + variaciones[numSituacion]["C"][0]);
    setEmpleados(empleados + variaciones[numSituacion]["C"][1])
    if (empleados < 0) {
        setEmpleados(0)
    }
    setInversores(inversores + variaciones[numSituacion]["C"][2])
    if (inversores < 0) {
        setInversores(0)
    }
    setPasarSituacion(true)
}
    return (
        <main className=''>
        <div className="w-full h-24 bg-blue align-middle pt-4">
            <div className="container mx-auto flex justify-around items-center">
                <div className='border-solid border-2 rounded-lg align-middle hover:scale-110 cursor-pointer'>
                    <h2 className="text-2xl font-semibold text-black p-3">
                        {fecha}
                    </h2>
                </div>
            </div>
        </div>
        <div className='flex m-10'>
        <div className='w-96 h-80 bg-white rounded-xl hover:scale-105 col-span-2'>
          <div>
              <h2 className='text-black font-bold text-2xl pl-5 pt-5'>
                  Información:
              </h2>
          </div>
          <div className='pl-8 pt-5'>
                  <h2 className="text-2xl text-black pb-5">
                      Dinero: ${dinero}
                  </h2>
                  <h2 className='text-2xl text-black pb-5'>
                      Empleados: {empleados}
                  </h2>
                  <h2 className='text-2xl text-black pb-5'>
                      Inversores: {inversores}
                  </h2>
                  {/* <h2 className='text-2xl text-black pb-5'>
                      Ingresos: ${Ingresos}
                  </h2> */}
                  {/* <h2 className='text-2xl text-black pb-5'>
                      Sueldo Empleados: $1000
                  </h2> */}
          </div>
      </div>

        <div className="bg-white w-[54rem] h-[32rem] p-6 mt-0 ml-5 rounded-lg shadow-lg items-center hover:scale-105 row-span-3">
            <h1 className='text-3xl font-bold mb-4'>
                {movimientos[numSituacion]['titulo']}
            </h1>
            <h2 className='text-lg mb-6'>
                {movimientos[numSituacion]['pregunta']}
            </h2>
            <div className='justify-items-center w-full h-4/5'>
                <h3 className='ml-5 mt-5 mb-10 rounded-lg text-black text-2xl row-span-2 col-span-2'>
                    Opción A: {movimientos[numSituacion]['opcionA']}
                </h3>
                <h3 className='ml-5 mt-5 mb-10 rounded-lg text-black text-2xl row-span-2 col-span-2'>
                    Opción B: {movimientos[numSituacion]['opcionB']}
                </h3>
                <h3 className='ml-5 mt-5 mb-10 rounded-lg text-black text-2xl row-span-2 col-span-2'>
                    Opción C: {movimientos[numSituacion]['opcionC']}
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
        </div>
        </main>
    )

}


export default Global