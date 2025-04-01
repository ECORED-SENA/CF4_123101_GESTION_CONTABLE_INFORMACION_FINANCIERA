<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar los conceptos fundamentales relacionados con las obligaciones tributarias territoriales y nacionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál entidad administra los impuestos nacionales en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Secretaría Distrital de Hacienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dirección de Impuestos y Aduanas Nacionales (DIAN).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ministerio de Hacienda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cámara de Comercio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento define la acción que causa la obligación tributaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Base gravable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tarifa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hecho generador.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sujeto activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es un ejemplo de impuesto departamental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impuesto sobre la renta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'IVA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impuesto predial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impuesto a licores y cervezas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cómo se clasifica el impuesto al valor agregado (IVA)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impuesto directo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impuesto indirecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Impuesto departamental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impuesto municipal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué entidad es responsable de recaudar impuestos municipales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '¿Qué entidad es responsable de recaudar impuestos municipales?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'DIAN.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ministerio de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Secretaría de Hacienda Municipal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál impuesto grava directamente los ingresos o propiedades del contribuyente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IVA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impuesto sobre la renta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gravamen a movimientos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impuesto al consumo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué régimen tributario se aplica especialmente a entidades sin ánimo de lucro?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Régimen ordinario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Régimen simple.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Régimen especial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Régimen unificado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la base gravable de un impuesto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El porcentaje que se paga al Estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La acción que origina el impuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor sobre el cual se aplica la tarifa del impuesto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La entidad que recauda el impuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué impuesto municipal grava la propiedad de vehículos automotores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impuesto de delineación urbana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impuesto de industria y comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sobretasa a la gasolina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impuesto de vehículos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál régimen tributario integra múltiples impuestos en una sola declaración para contribuyentes pequeños?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Régimen ordinario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Régimen especial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impuesto sobre las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Régimen simple de tributación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El Registro Único Tributario (RUT) identifica obligaciones tributarias específicas según la actividad económica.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'El impuesto predial es un impuesto nacional.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las personas jurídicas son aquellas formadas por individuos para cumplir objetivos sociales específicos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'El impuesto al consumo es clasificado como impuesto directo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las secretarías de hacienda administran impuestos departamentales y municipales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
