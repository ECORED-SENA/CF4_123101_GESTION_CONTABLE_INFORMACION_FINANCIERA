<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Regímenes

    .row.align-items-center
      .col-lg-2.order-2
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in", style="max-width: 350px").mx-auto
      .col-lg-10.order-1.mb-3.mb-lg-0
        p.mb-0 Los regímenes tributarios establecen las normas y clasificaciones que rigen la obligación de contribuir al sostenimiento del Estado. Su estructura permite diferenciar a los contribuyentes según su actividad económica, ingresos y responsabilidades fiscales. Comprender estos regímenes es esencial para el cumplimiento de la normativa y la correcta aplicación de los impuestos.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 De acuerdo con normativa

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in", style="max-width: 550px").mx-auto
          .col-lg-8.order-1.mb-3.mb-lg-0
            div.bg-color-9.tarjeta.p-4.mb-5(data-aos="fade-right")
              p <b>De acuerdo con el Estatuto Tributario-0624 de 1989</b>, es fundamental atender la clasificación de los contribuyentes y no contribuyentes; por ende, es importante identificar el tipo de impuesto y las responsabilidades que se tiene en cada uno de estos.

              p Para continuar con el componente formativo propuesto, es importante abordar los términos de persona natural y jurídica, teniendo en cuenta que se manejan en el desarrollo del proceso de formación; por lo tanto, los relacionamos a continuación:
        .row
          .col-lg-4.mb-3.mb-lg-0 
            div.bg-color-3.tarjeta.p-4.mb-5(data-aos="fade-right").h-100
              h5 Persona natural
              p.mb-0 Hace referencia a todos los individuos de la especie humana, cualquiera que sea su edad, sexo, estirpe o condición. Art. 74 Código Civil. Hace referencia a empresas de propietario único.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in", style="max-width: 450px").mx-auto
          .col-lg-4.mb-3.mb-lg-0
            div.bg-color-12.tarjeta.p-4.mb-5(data-aos="fade-right").h-100
              h5 Persona jurídica
              p.mb-0 Se llama persona jurídica a una persona ficticia, capaz de ejercer derechos y contraer obligaciones civiles, y de ser representada judicial y extrajudicialmente. Art. 633 Código Civil. En términos generales, hablamos de las sociedades que realizan un contrato de sociedad, donde realizan un aporte de dinero o trabajo con el fin de distribuirse las utilidades al final del periodo.
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Contribuyente y declarante
    
    p.mb-4 El concepto de contribuyente y declarante es clave en el sistema tributario, ya que define quiénes están obligados a pagar impuestos y presentar declaraciones.

    div.bg-color-8.tarjeta.p-4.mb-5(data-aos="fade-right")
      h5 Art. 2. Contribuyentes- Estatuto Tributario (ET)
      p.mb-0 Son contribuyentes o responsables directos del pago del tributo los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial.
      p.mb-0 En esta clasificación se encuentran tres regímenes:
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Régimen ordinario

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-4 A este régimen pertenecen las personas naturales y jurídicas, sucesiones ilíquidas que, al cumplir los requisitos establecidos en la norma legal vigente, deben ser declarantes del impuesto de renta y sus complementarios. En el caso de las personas naturales, que no cumplan con los requerimientos establecidos, se consideran no declarantes del impuesto de renta y sus complementarios.
        .row.mb-5.justify-content-center
          .col-lg-4.order-2.ps-lg-0
            figure
              img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in", style="max-width: 450px").mx-auto
          .col-lg-6.order-1.mb-3.mb-lg-0.pe-lg-0
            div.bg-color-9.p-5.mb-5(data-aos="fade-right")
              h5 Algunos de los contribuyentes de este régimen son: 
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Personas naturales residentes y no residentes y sucesiones ilíquidas.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Impuesto sociedades, entidades nacionales y otros contribuyentes.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Las sociedades anónimas y asimiladas.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Sociedades limitadas y asimiladas.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Cajas de compensación.
                li.mb-3.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Sociedades y entidades extranjeras.
                li.mb-0.d-flex
                  i.far.fa-folder-open.bg-color-14
                  p.mb-0 Fondos de inversión, etc.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Régimen especial

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-4 Este régimen considera como un contribuyente al impuesto de renta y sus complementarios; sin embargo, tiene un tratamiento especial referente al sistema ordinario.
        .row.mb-5.justify-content-center
          .col-lg-4.order-2.ps-lg-0
            figure
              img(src="@/assets/curso/tema2/5.svg", data-aos="zoom-in", style="max-width: 450px").mx-auto
          .col-lg-6.order-1.mb-3.mb-lg-0.pe-lg-0
            div.bg-color-9.p-5.mb-5(data-aos="fade-right")
              h5.mb-5.mt-3 Dentro de esta clasificación encontramos: 
              p Todas las asociaciones, fundaciones y corporaciones constituidas como entidades sin ánimo de lucro.
        p.mb-4 Excepcionalmente, podrán solicitar ante la administración tributaria, de acuerdo con el artículo 356-2, su calificación como contribuyentes del Régimen Tributario Especial, siempre y cuando cumplan con los requisitos que se enumeran a continuación:
    
    .row.mb-5.justify-content-center
      .col-lg-4.order-2.ps-lg-0
        figure
          img(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in", style="max-width: 450px").mx-auto
      .col-lg-6.order-1.mb-3.mb-lg-0.pe-lg-0
        div.bg-color-9.p-5.mb-5(data-aos="fade-right")
          h5.mb-3 Algunos de los contribuyentes de este régimen son: 
          ol.lista-ol--cuadro
            li.d-flex 
              .lista-ol--cuadro__vineta
                span 1
              | Que estén legalmente constituidas.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              | Que su objeto social sea de interés general en una o varias de las actividades meritorias establecidas en el artículo 359 del presente estatuto, a las cuales debe tener acceso la comunidad.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span 3
              | Que ni sus aportes sean reembolsados ni sus excedentes distribuidos, bajo ninguna modalidad, cualquiera que sea la denominación que se utilice, ni directa, ni indirectamente, ni durante su existencia, ni en el momento de su disolución y liquidación, de acuerdo con el artículo 356-1.(Estatuto Tributario, 2020, Art. 19)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Régimen de tributación simple
    
    h5.mb-3 Art. 905. Sujetos pasivos – Estatuto Tributario (ET).
    p.mb-4  <b>Nota 1.</b> Podrán ser sujetos pasivos del impuesto unificado bajo el régimen simple de tributación - SIMPLE las personas naturales o jurídicas que reúnan la totalidad de las siguientes condiciones:

    .row.mb-5.justify-content-center
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 300px").mx-auto
            .col-lg-9
              p.mb-0 1- Que se trate de una persona natural que desarrolle una empresa o de una persona jurídica en la que sus socios, partícipes o accionistas sean personas naturales, nacionales o extranjeras, residentes en Colombia.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 300px").mx-auto
            .col-lg-9
              p.mb-0 2- Que en el año gravable anterior hubieren obtenido ingresos brutos, ordinarios o extraordinarios, inferiores a 80.000 UVT. En el caso de las empresas o personas jurídicas nuevas, la inscripción en el impuesto unificado bajo el régimen simple de tributación – SIMPLE, estará́ condicionada a que los ingresos del año no superen estos límites.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 300px").mx-auto
            .col-lg-9
              p.mb-0 3- Si uno de los socios persona natural tiene una o varias empresas o participa en una o varias sociedades, inscritas en el impuesto unificado bajo el régimen simple de tributación - SIMPLE, los límites máximos de ingresos brutos se revisarán de forma consolidada y en la proporción a su participación en dichas empresas o sociedades.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 300px").mx-auto
            .col-lg-9
              p.mb-0 4- Si uno de los socios persona natural tiene una participación superior al 10 % en una o varias sociedades no inscritas en el impuesto unificado bajo el régimen simple de tributación - SIMPLE, los límites máximos de ingresos brutos se revisarán de forma consolidada y en la proporción a su participación en dichas sociedades.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 300px").mx-auto
            .col-lg-9
              p.mb-0 5- Si uno de los socios persona natural es gerente o administrador de otras empresas o sociedades, los límites máximos de ingresos brutos se revisarán de forma consolidada con los de las empresas o sociedades que administra.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .row.align-items-center.justify-content-end
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 300px").mx-auto
            .col-lg-9
              p.mb-0 6- La persona natural o jurídica debe estar al día con sus obligaciones tributarias de carácter nacional, departamental y municipal, y con sus obligaciones de pago de contribuciones al Sistema de Seguridad Social Integral. También debe contar con la inscripción respectiva en el Registro Único Tributario - RUT y con todos los mecanismos electrónicos de cumplimiento, firma y factura electrónica.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto No contribuyentes

        h5.mb-5 De acuerdo con el artículo 22 del Estatuto Tributario (ET) se encuentran:
        .row.mb-5.justify-content-center
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/11.svg", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-5.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 La Nación, las entidades territoriales, las Corporaciones Autónomas Regionales y de Desarrollo Sostenible, las áreas metropolitanas, la Sociedad Nacional de la Cruz Roja Colombiana y su sistema federado, las superintendencias y las unidades administrativas especiales, siempre y cuando no se señalen en la ley como contribuyentes.
              li.mb-3.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 Las sociedades de mejoras públicas, las asociaciones de padres de familia, los organismos de acción comunal, las juntas de defensa civil, las juntas de copropietarios administradoras de edificios organizados en propiedad horizontal o de copropietarios de conjuntos residenciales, las asociaciones de exalumnos, las asociaciones de hogares comunitarios y hogares infantiles del Instituto Colombiano de Bienestar Familiar o autorizados por este y las asociaciones de adultos mayores autorizados por el Instituto Colombiano de Bienestar Familiar.
        .row.justify-content-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in")
          .col-lg-7
            ul.lista-ul--color.mb-0
              li.mb-5.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 Los resguardos y cabildos indígenas, ni la propiedad colectiva de las comunidades negras conforme a la Ley 70 de 1993.
              li.mb-3.d-flex
                i.far.fa-folder-open.bg-color-14
                p.mb-0 Los sindicatos, las asociaciones gremiales, los fondos de empleados, los fondos mutuos de inversión, las iglesias y confesiones religiosas reconocidas por el Ministerio del Interior o por la ley, los partidos o movimientos políticos aprobados por el Consejo Nacional Electoral; las asociaciones y federaciones de departamentos y de municipios, las sociedades o entidades de alcohólicos anónimos, los establecimientos públicos y en general cualquier establecimiento oficial descentralizado, siempre y cuando no se señale en la ley de otra manera. Art. 23 Estatuto Tributario (ET).
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Responsabilidades

    p.mb-4 El Registro Único Tributario, RUT, administrado por la Dirección de Impuestos y Aduanas Nacionales –DIAN-, constituye el mecanismo único para identificar, ubicar y clasificar las personas y entidades sujetos de obligaciones administradas por la Dirección de Impuestos y Aduanas Nacionales, respecto de los cuales esta requiera su inscripción.
    h5.mb-5 Al contribuyente, sea persona natural o jurídica se le asigna las responsabilidades de acuerdo con su actividad, teniendo en cuenta la norma vigente.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Responsabilidades tributarias 

        .tabla-a.color-acento-botones
          table
            caption Tomado de: Legis (2019, 16 de abril).
            thead
              tr
                th.bg-color-12(width="15%").text-center Código
                th.bg-color-12 Nombre
            tbody
              tr
                td.text-center 1
                td Aporte especial para la administración de justicia.
              tr
                td.text-center 2
                td Gravamen a los movimientos financieros.
              tr
                td.text-center 3
                td Impuesto al patrimonio.
              tr
                td.text-center 4
                td Impuesto renta y complementario régimen especial.
              tr
                td.text-center 5
                td  Impuesto renta y complementario régimen ordinario.
              tr
                td.text-center 6
                td Ingresos y patrimonio.
              tr
                td.text-center 7
                td Retención en la fuente a título de renta.
              tr
                td.text-center 8
                td Retención timbre nacional.
              tr
                td.text-center 9
                td Retención en la fuente en el impuesto sobre las ventas.
              tr
                td.text-center 10
                td Obligado aduanero.
              tr
                td.text-center 13
                td Gran contribuyente.
              tr
                td.text-center 14
                td Informante de exógena.
              tr
                td.text-center 15
                td Autorretenedor.
              tr
                td.text-center 16
                td Obligación facturar por ingresos bienes y/o servicios excluidos.
              tr
                td.text-center 17
                td Profesionales de compra y venta de divisas.
              tr
                td.text-center 18
                td Precios de transferencia.
              tr
                td.text-center 19
                td Productor de bienes y/o servicios exentos.
              tr
                td.text-center 20
                td Obtención NIT.
              tr
                td.text-center 21
                td Declarar ingreso o salida del país de divisas o moneda. 
              tr
                td.text-center 22
                td Obligado a cumplir deberes formales a nombre de terceros.
              tr
                td.text-center 23
                td Agente de retención en ventas.
              tr
                td.text-center 24
                td Declaración consolidada precios de transferencia.
              tr
                td.text-center 26
                td Declaración individual precios de transferencia.
              tr
                td.text-center 32
                td  Impuesto nacional a la gasolina y al ACPM.
              tr
                td.text-center 33
                td Impuesto nacional al consumo.
              tr
                td.text-center 36
                td Establecimiento Permanente.
              tr
                td.text-center 37
                td Obligado a Facturar Electrónicamente.
              tr
                td.text-center 38
                td Facturación Electrónica Voluntaria.
              tr
                td.text-center 39
                td Proveedor de Servicios Tecnológicos PST.
              tr
                td.text-center 41
                td Declaración anual de activos en el exterior.
              tr
                td.text-center 45
                td Autorretenedor de rendimientos financieros.
              tr
                td.text-center 46
                td IVA Prestadores de Servicios desde el exterior.
              tr
                td.text-center 47
                td Régimen Simple de Tributación – SIMPLE.
              tr
                td.text-center 48
                td Impuesto sobre las ventas – IVA.
              tr
                td.text-center 49
                td No responsable de IVA.
              tr
                td.text-center 50
                td No responsable de consumo restaurantes y bares.
              tr
                td.text-center 51
                td Agente retención impoconsumo de bienes inmuebles.
              tr
                td.text-center 52
                td Facturador electrónico.
              tr
                td.text-center 53
                td Persona jurídica no responsable de IVA.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
