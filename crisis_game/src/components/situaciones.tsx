import React from "react";

const situaciones = [
    {
      fecha: "6 de Julio",
      titulo: "Decision importantes para la temporada de Ski",
      pregunta: "Ante la decadencia económica del país, las ventas en 'Snow Adventure' han estado disminuyendo. ¿Qué estrategia implementarías para atraer a más visitantes y aumentar las ventas?",
      opcionA: "Reducir los precios y ofrecer descuentos significativos en los pases y servicios.",
      opcionB: "Mejorar la calidad y variedad de las actividades ofrecidas para atraer a un público más amplio.",
      opcionC: "Implementar una agresiva campaña de marketing para resaltar las ventajas únicas de 'Snow Adventure' en comparación con la competencia."
    },
    {
      fecha: "6 de Julio",
      titulo: "Decision importantes para la temporada de Ski",
      pregunta: "Una nueva competencia ha surgido en la región, atrayendo a los amantes de los deportes de invierno con ofertas atractivas y precios competitivos. Nuestros precios son más altos que los suyos. ¿Cómo responderías a esta situación?",
      opcionA: "Analizar y ajustar nuestros precios y ofertas para competir directamente con la nueva empresa.",
      opcionB: "Enfocarse en mejorar la calidad del servicio y la experiencia del cliente para diferenciarnos de la competencia.",
      opcionC: "Establecer alianzas estratégicas con la competencia para ofrecer paquetes combinados que beneficien a ambos centros."
    },
    {
      fecha: "6 de Julio",
      titulo: "Decision importantes para la temporada de Ski",
      pregunta: "Ante la disminución de las ventas, es necesario tomar medidas para reducir costos y mantener el negocio a flote. ¿Cuál sería tu enfoque principal?",
      opcionA: "Realizar recortes en el personal y ajustar los gastos operativos para lograr una reducción significativa de costos.",
      opcionB: "Buscar oportunidades de optimizar los procesos internos y mejorar la eficiencia operativa para reducir costos sin afectar la calidad del servicio.",
      opcionC: "Explorar nuevas fuentes de ingresos y diversificar las ofertas de 'Snow Adventure' para compensar la disminución en las ventas."
    },
    {
      fecha: "21 de Julio",
      titulo: "Apertura de temporada",
      pregunta: "¿Inviertes en una campaña publicitaria para atraer más visitantes?",
      opcionA: "Sí, invierto en una campaña publicitaria masiva.",
      opcionB: "No, mantengo el presupuesto publicitario actual.",
      opcionC: "Si, invierto en una campaña publicitaria, pero con un presupuesto reducido para ahorrar costos."
    },
    {
      fecha: "15 de Agosto",
      titulo: "Aumento en los precios de los servicios",
      pregunta: "¿Aumentas los precios para compensar la caída en los ingresos?",
      opcionA: "Sí, aumento los precios en un 10%.",
      opcionB: "Mantengo los precios actuales.",
      opcionC: "Realizo descuentos especiales para atraer más clientes."
    },
    {
      fecha: "10 de Septiembre",
      titulo: "Evaluación del impacto de la crisis financiera",
      pregunta: "¿Recortas personal para reducir costos?",
      opcionA: "Sí, reduzco el personal en un 20%.",
      opcionB: "No, mantengo el personal actual.",
      opcionC: "Contrato personal adicional para mejorar la experiencia del cliente."
    },
    {
      fecha: "20 de Octubre",
      titulo: "Promoción de actividades adicionales para atraer más visitantes",
      pregunta: "¿Inviertes en nuevas actividades para diversificar la oferta?",
      opcionA: "Sí, agrego nuevas actividades como patinaje sobre hielo y trineos tirados por perros.",
      opcionB: "No, mantengo las actividades actuales sin cambios.",
      opcionC: "Elimino algunas actividades para reducir costos."
    },
    {
      fecha: "1 de Noviembre",
      titulo: "Anuncio de mejoras en las instalaciones del centro de Ski",
      pregunta: "¿Inviertes en mejoras en las instalaciones para atraer a visitantes de lujo?",
      opcionA: "Sí, realizo mejoras significativas en las instalaciones y servicios.",
      opcionB: "No, mantengo las instalaciones actuales sin cambios.",
      opcionC: "Realizo mejoras mínimas para mantener los costos bajos."
    },
    {
      fecha: "1 de Diciembre",
      titulo: "Con el fin definitivo de la temporada de ski, es necesario tomar decisiones estratégicas para enfrentar esta situación.",
      pregunta: "¿Qué acción tomar frente a esta situación?",
      opcionA: "Cerrar el lugar por completo, no pagar a nuestros empleados y esperar a la próxima temporada de invierno.",
      opcionB: "Mantener el lugar abierto durante el verano, aunque con una reducción en el número de empleados.",
      opcionC: "Innovar e incluir teleféricos a pesar del riesgo económico, sabiendo que la temporada no es la más propicia."
    },
    {
      fecha: "15 de Enero",
      titulo: "Estrategias para enfrentar la crisis financiera",
      pregunta: "La empresa ha entrado en una crisis financiera y es necesario tomar medidas para superarla. ¿Qué estrategia consideras más efectiva?",
      opcionA: "Recortar gastos drásticamente, reduciendo la plantilla de empleados y eliminando servicios no esenciales.",
      opcionB: "Renegociar contratos con proveedores y buscar descuentos o términos de pago más favorables.",
      opcionC: "Renegociar montos y fechas de pago con los acreedores para aliviar la presión financiera a corto plazo."
    },
    {
      fecha: "20 de Febrero",
      titulo: "Alternativas para superar la crisis",
      pregunta: "La crisis financiera persiste y es necesario explorar alternativas para salir adelante. ¿Qué enfoque consideras más adecuado?",
      opcionA: "Buscar inversionistas o socios estratégicos que puedan aportar capital adicional a la empresa.",
      opcionB: "Implementar medidas de ahorro y eficiencia en todos los departamentos, incentivando la creatividad y la colaboración de los empleados.",
      opcionC: "Explorar opciones de financiamiento, como préstamos o líneas de crédito, para cubrir las necesidades financieras y mantener la operatividad del negocio."
    },
    {
      fecha: "7 de Marzo",
      titulo: "Solicitud de prórroga en los pagos",
      pregunta: "Nos encontramos en una situación financiera apremiante y necesitamos solicitar una prórroga en nuestros pagos. ¿Cómo abordarías esta situación?",
      opcionA: "Comunicarme con nuestros acreedores de manera proactiva y transparente, explicando la situación y solicitando una extensión de los plazos de pago.",
      opcionB: "Intentar renegociar los términos de los pagos, ofreciendo un plan de pagos modificado que se ajuste a nuestras posibilidades actuales.",
      opcionC: "Postergar la solicitud de prórroga y continuar con los pagos según lo acordado inicialmente, confiando en que la situación mejorará pronto."
    },
    {
      fecha: "2 de Abril",
      titulo: "Lanzamiento de una nueva atracción en un centro turístico cercano",
      pregunta: "¿Cómo destacar frente a la nueva atracción y mantener a nuestros visitantes?",
      opcionA: "Mejorar la calidad de nuestros servicios y ofrecer experiencias personalizadas a los visitantes.",
      opcionB: "Crear paquetes combinados que incluyan acceso a ambas atracciones, ofreciendo descuentos atractivos.",
      opcionC: "Diseñar promociones especiales que resalten las ventajas únicas de nuestro centro de ski."
    },
    {
      fecha: "7 de Mayo",
      titulo: "Evaluación de la eficiencia de los departamentos",
      pregunta: "Te enfrentas a una situación difícil en la que debes reducir la plantilla de empleados. Resulta que tu mejor amigo Marcelo Ranzoni trabaja en una sección ineficiente de la empresa y su desempeño afecta negativamente nuestra productividad y resultados. ¿Qué decisión tomas?",
      opcionA: "Priorizo la eficiencia y el bienestar de la empresa, y procedo con el despido de mi mejor amigo, aunque sea una decisión dolorosa.",
      opcionB: "Decido darle una oportunidad más a mi amigo y lo traslado a otro departamento en el que pueda mejorar su desempeño.",
      opcionC: "Me niego a despedir a mi amigo, por lo que decido bajarle el sueldo así sigue trabajando para la empresa."
    },
    {
      fecha: "12 de Junio",
      titulo: "Cambios en las preferencias de los turistas hacia actividades más sostenibles",
      pregunta: "¿Cómo adaptarnos a las nuevas demandas del mercado?",
      opcionA: "Implementar medidas ecológicas en nuestras operaciones, como paneles solares y programas de reciclaje.",
      opcionB: "Desarrollar programas de educación ambiental y promover el turismo responsable.",
      opcionC: "Ofrecer actividades de aventura con un enfoque en la conservación del medio ambiente, como excursiones guiadas de observación de aves."
    },
    {
      fecha: "5 de Julio",
      titulo: "Desarrollo de tecnología de realidad virtual en el sector turístico",
      pregunta: "¿Debemos incorporar experiencias de realidad virtual en nuestras actividades?",
      opcionA: "Invertir en tecnología de realidad virtual para ofrecer experiencias inmersivas en la nieve.",
      opcionB: "Mantener nuestras actividades enfocadas en laexperiencia real de la nieve y la naturaleza.",
      opcionC: "Colaborar con empresas de tecnología de realidad virtual para desarrollar una atracción conjunta."
    }
  ];

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
    A: [0,0,0],
    B: [0,0,0],
    C: [0,0,0]
},
{
    A: [0,0,0],
    B: [0,0,0],
    C: [0,0,0]
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
},
{
    A: [],
    B: [],
    C: []
}
]