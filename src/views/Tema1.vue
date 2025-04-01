<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Impuestos
    
    p Los impuestos han sido una herramienta fundamental en la organización de las sociedades desde la antigüedad. Surgieron como un mecanismo para financiar el mantenimiento del poder, la infraestructura y las necesidades de los gobiernos

    .bg-full-width
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos y elementos de los Impuestos
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-4 Con el fin de generar un aprendizaje significativo y avanzar en tan importante tema, a continuación, se relacionan los conceptos de los tributos en Colombia, que constituyen los ingresos corrientes de la nación. Así mismo, se analizan los elementos de los impuestos:
        .row.mb-5
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/1.svg', alt='Texto que describa la imagen')

              h3.text-center Tasas
              p Contraprestación directa por un servicio prestado, por ejemplo: se pagan los servicios públicos y a cambio se goza del servicio de energía, acueducto, etc.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/2.svg', alt='Texto que describa la imagen')

              h3.text-center Contribuciones
              p Son tributos que paga el contribuyen al Estado por algún beneficio recibido. Por ejemplo, es el caso del impuesto de valorización cuando el Estado realiza inversiones en obras y la zona adquiere un mayor valor.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/3.svg', alt='Texto que describa la imagen')

              h3.text-center Impuestos
              p Son aquellos tributos que no generan contraprestación alguna. Entre ellos, encontramos: impuesto al valor agregado (IVA), impuesto de renta y complementarios. Es una obligación sustancial, que debe darse cumplimiento si contempla todos los requisitos para su liquidación.

        .row.justify-content-center
          .col-lg-10(data-aos="fade-right")
            div.bg-color-1.tarjeta.p-4
              h5 Concepto
              p.mb-0 Los impuestos tienen su origen en los fundamentos vistos en la Constitución Política de Colombia, según el cual todas las naciones están en el deber de contribuir al financiamiento de los gastos e inversiones del Estado dentro de los conceptos de justicia y equidad (artículo 95, numeral 9º de la Constitución Política de Colombia).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Elementos de los impuestos
    
    p.mb-4 Luego de estudiar las diferencias entre los tributos: tasas, contribuciones e impuestos; ahora se profundizará en las generalidades de los impuestos. Conforme a esto, se relacionan los siguientes elementos:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4 Sujeto activo
                p Es la entidad encargada de administrar los impuestos, quien está facultado para exigir el cumplimiento de la obligación. En Colombia los impuestos Nacionales son recaudados por la Dirección de Impuestos y Aduanas Nacionales (DIAN).
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4  Sujeto Pasivo
                p Es el deudor de la obligación tributaria, pueden ser personas naturales o jurídicas que cumplen con los requisitos exigidos por la norma para declarar determinado impuesto.
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4  Hecho generador del impuesto
                p Son los actos que originan la obligación tributaria. Por ejemplo, la compra o venta de un producto o servicio. 
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4  Base gravable
                p Es el valor total al cual se le aplica la tarifa del impuesto.
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4.bg-color-4.px-4 Tarifa
                p Es el porcentaje que se aplica a la base gravable para determinar el impuesto a cargo. Pinillos, J. (2014, 9-19.). 
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Estructura y clasificación de los impuestos
    
    p.mb-4 Continuamos con la clasificación y estructura de los impuestos, donde se analizará cada uno de estos, teniendo en cuenta sus características y requisitos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto  Directos e indirectos
    
    p.mb-4 Recordemos que existe la clasificación de impuesto directos e indirectos, que se encuentra relacionado con la capacidad de tributación y de progresividad en la tributación.

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-6.p-5 
        h4 Impuestos directos
        p Son pagados por la persona a quien se grava, cuya relación fiscal es directamente con el sujeto activo del impuesto, afectando principalmente los ingresos o pertenencias. 
        h5.mb-3 Algunos ejemplos son:
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto al patrimonio.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0Impuesto sobre la renta y complementarios
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto de industria y comercio (ICA).
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto predial.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-5
            p.mb-0 Impuesto vehículos.
      .col-md.tarjeta.bg-color-1.p-5 
        h4 Impuestos Indirectos
        p Recae sobre las operaciones gravadas a lo largo del ciclo económico, en forma no acumulada y con la metodología del valor agregado. Son aquellos, cuya responsabilidad jurídica es diferente a la persona que económicamente asume el impuesto. 
        h5.mb-3 Ejemplos de Martínez et al. (2016):
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-7
            p.mb-0 Impuesto a las ventas (IVA).
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-7
            p.mb-0Impuesto Gravamen a los movimientos financieros (GMF).
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-7
            p.mb-0 Impuesto de registro.
          

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto  Nacionales, departamentales y distritales
    
    p.mb-4 En el contexto tributario colombiano, los impuestos se encuentran clasificados en nacionales, departamental y municipal; por ende, es importante tener en cuenta el sujeto activo que se encuentra delegado para administrar, controlar y recaudar cada uno de los impuestos, además de analizar la normativa que aplica para cada uno de estos.

    .row.mb-5
      .col-lg-6.order-2
        figure
          img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")
      .col-lg-6.order-1.mb-3.mb-lg-0
        h3.bg-color-4.tarjeta.p-3 Impuestos nacionales
        p(data-aos="fade-left") Son impuestos administrados por la nación, siendo esta su ámbito de aplicación. Son emitidos por el poder ejecutivo y sancionados por el presidente de la república una vez hayan sido aprobados por el congreso.
        h5.mb-5 Entre los impuestos nacionales encontramos, principalmente:
        ol.lista-ol--cuadro.ms-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Impuesto sobre las ventas.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Impuesto de renta.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Gravamen a los movimientos financieros.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Impuesto al patrimonio.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Impuesto al consumo.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Impuesto unificado bajo el régimen simple de tributación.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        div.bg-color-8.tarjeta.p-5
          p.mb-0 A continuación, se realizará una breve descripción de cada uno de estos. Recuerde que para profundizar debe tener en cuenta el Estatuto Tributario (ET)- Decreto 0624 de 1989, así como, la normatividad legal vigente.

    h3.bg-color-4.tarjeta.p-3.mb-5 Impuesto sobre las ventas
    div.bg-color-9.tarjeta.p-5(data-aos="fade-right")
      p.mb-0 Es un impuesto nacional de naturaleza indirecta, aplicable a la venta de bienes y prestación de servicios que se encuentran expresamente gravados por las tarifas establecidas en la normatividad legal vigente. Para efectos de dar aplicabilidad a dicho impuesto, se tiene en cuenta la clasificación de operaciones:

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        h3.bg-color-4.tarjeta.p-3.mb-5 Clasificación de bienes y servicios
        .row.mb-5
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/11.svg', alt='Texto que describa la imagen')

              h3.text-center Gravados
              p Son aquellos que originan impuesto, teniendo en cuenta que se les asigna una tarifa establecida por disposición legal. Por lo anterior, es necesario verificar la tarifa general y las tarifas diferenciales para su correcta aplicación. Se localizan en el artículo 468 del Estatuto Tributario (ET).
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/12.svg', alt='Texto que describa la imagen')

              h3.text-center Exentos
              p Son bienes que por normativa se encuentran gravados a la tarifa del 0%. Quienes produzcan bienes exentos, son responsables del impuesto a las ventas, y por tanto deben declarar IVA, pero quienes comercialicen bienes exentos no son responsables del impuesto a las ventas. De este modo, sólo los productores de bienes exentos pueden solicitar como descuento el IVA pagado en sus compras. Se encuentran señalados en los artículos 477 a 481 del Estatuto Tributario (ET).
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/13.svg', alt='Texto que describa la imagen')

              h3.text-center Excluidos
              p Son aquellos bienes y servicios que por normatividad legal no se encuentran gravados a alguna tarifa, por ende, no se genera impuesto. Para conocer el listado es necesario remitirse al Estatuto tributario (ET) en los artículos 424-428 y 476 (ET), donde aparece un grupo de bienes identificados con la metodología del arancel de aduanas. El listado incluye la numeración o posición arancelaria (NANDINA) y la descripción de la mercancía, siguiendo los reinos de la naturaleza y sus fases de transformación. Colombia Compra Eficiente (2012).

    div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
      h5 Requisitos
      p.mb-0 <b>Según el artículo 437 del ET:</b> Deberán registrarse como responsables del IVA quienes realicen actividades gravadas con el impuesto, con excepción de las personas naturales comerciantes y los artesanos, que sean minoristas o detallistas, los pequeños agricultores y los ganaderos, así como quienes presten servicios, siempre y cuando cumplan la totalidad de las siguientes condiciones:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Que en el año anterior o en el año en curso hubieren obtenido ingresos brutos totales provenientes de la actividad, inferiores a 3.500 UVT.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Que no tengan más de un establecimiento de comercio, oficina, sede, local o negocio donde ejerzan su actividad.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Que, en el establecimiento de comercio, oficina, sede, local o negocio no se desarrollen actividades bajo franquicia, concesión, regalía, autorización o cualquier otro sistema que implique la explotación de intangibles.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Que no sean usuarios aduaneros.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Que no hayan celebrado en el año inmediatamente anterior ni en el año en curso contratos de venta de bienes y/o prestación de servicios gravados por valor individual, igual o superior a 3.500 UVT.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Que el monto de sus consignaciones bancarias, depósitos o inversiones financieras durante el año anterior o durante el respectivo año no supere la suma de 3.500 UVT.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 7
                  | Las entidades emisoras de tarjetas crédito y débito, los vendedores de tarjetas prepago, los recaudadores de efectivo a cargo de terceros, y los demás que designe la Dirección de Impuestos y Aduanas Nacionales (DIAN) en el momento del correspondiente pago o abono en cuenta a los prestadores desde el exterior, de los siguientes servicios electrónicos o digitales, cuando el proveedor del servicio se acoja voluntariamente a este sistema alternativo de pago del impuesto.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 8
                  | Los responsables del impuesto sobre las ventas (IVA) cuando adquieran bienes corporales muebles o servicios gravados, de personas que se encuentren registradas como contribuyentes del impuesto unificado bajo el Régimen Simple de Tributación -SIMPLE.

    p.mb-5 En el caso de pasar los límites establecidos en las condiciones registradas anteriormente, el contribuyente debe registrarse como responsable de IVA, de lo contrario será no responsable.

    div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
      h5 Periodos de presentación
      p.mb-0 De acuerdo con el Estatuto Tributario (ET) artículo 600, se establece el periodo gravable de forma bimestral y cuatrimestral teniendo en cuenta los siguientes requisitos:    
    

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.bg-color-3.p-5(data-aos="fade-down")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/18.svg', alt='Texto que describa la imagen')
              
            h2.text-center Bimestral
            p La declaración y pago bimestral para aquellos responsables de este impuesto, grandes contribuyentes y aquellas personas jurídicas y naturales cuyos ingresos brutos a 31 de diciembre del año gravable anterior sean iguales o superiores a noventa y dos mil (92.000) UVT y para los responsables de que tratan los artículos 477 y 481 de este Estatuto. Los períodos bimestrales son: enero-febrero; marzo-abril; mayo-junio; julio-agosto; septiembre-octubre; y noviembre-diciembre.

          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.bg-color-10.p-5(data-aos="fade-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/19.svg', alt='Texto que describa la imagen')
              
            h2.text-center Cuatrimestral
            p Declaración y pago cuatrimestral para aquellos responsables de este impuesto, personas jurídicas y naturales cuyos ingresos brutos a 31 de diciembre del año gravable anterior sean inferiores a noventa y dos mil (92.000) UVT. Los periodos cuatrimestrales serán enero-abril; mayo-agosto; y septiembre-diciembre.

    div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
      h5 Categoría del impuesto a las ventas
      ul.lista-ul--color
        li.mb-0.d-flex
          i.far.fa-folder-open.bg-color-7
          p.mb-0 <b>IVA Generado:</b> es el impuesto cobrado por el vendedor en el momento de realizar una venta de un bien o servicio gravado. 
        li.mb-0.d-flex
          i.far.fa-folder-open.bg-color-7
          p.mb-0Impuesto <b>IVA Descontable:</b> es el impuesto pagado o causado por el comprador en el momento de realizar una compra de un bien o servicio gravado.   
  
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        h3.bg-color-4.tarjeta.p-3.mb-5  Impuesto de renta
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/20.svg", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto.mb-2
                i.fas.fa-quote-left
                h4.text-regular El impuesto de renta es un impuesto directo, que recae sobre los contribuyentes individualmente considerados y grava a quienes en la ley están previstos como sujetos pasivos que hayan percibido ingresos, hecho generador de la obligación sustancial del impuesto, susceptible de producir un incremento neto en el patrimonio.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 - (Serrano, 2019)
        
        p.mb-5 Es de recordar que este impuesto, relaciona los elementos del impuesto y que es fundamental identificarlos:

        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/21.svg", data-aos="zoom-in")
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
              div(titulo="Sujeto activo")
                p.mb-0 Es el Estado y es administrado por la Dirección de impuestos y Aduanas Nacionales (DIAN).
              div(titulo="Sujeto pasivo")
                p.mb-0 Son los contribuyentes obligados a declarar de acuerdo con los requisitos establecidos en la norma.
              div(titulo="Hecho generador")
                p.mb-0 Es la obtención de ingresos que pueden generar incremento neto del patrimonio.
              div(titulo="Base gravable")
                p.mb-0 Renta líquida gravable.
              div(titulo="Tarifa")
                p.mb-0 Para aplicar la tarifa se tiene en cuenta si es una persona jurídica o personal natural; en este último se tiene en cuenta la normativa legal vigente teniendo en cuenta el sistema cedular.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        h3.bg-color-4.tarjeta.p-3.mb-5  Gravamen a los movimientos financieros
        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            p De acuerdo con el Art 871 Estatuto Tributario (ET), es un impuesto que recae sobre la realización de las transacciones financieras, mediante la cual se disponga recursos depositados en las cuentas corrientes o de ahorro, así como en cuentas de depósito en el Banco de la República, y los giros de cheques de gerencia.
            div.bg-color-12.p-4
              p.mb-0 Este impuesto presenta algunas exenciones, que es importante analizar con el fin de dar aplicabilidad correcta; por ende, se encuentran señaladas en al ART. 879 del Estatuto Tributario (ET).
        .row.mb-5
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema1/23.svg", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            div.bg-color-9.tarjeta.p-5.mb-5(data-aos="fade-right")
              ul.lista-ul--color
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0 <b>Sujeto activo:</b>  es un impuesto administrado por la Dirección de impuestos y Aduanas Nacionales (DIAN). 
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0Impuesto <b>Hecho generador</b> recae sobre la realización de las transacciones financieras, mediante la cual se disponga recursos depositados en las cuentas corrientes o de ahorro, así como en cuentas de depósito en el Banco de la República, y los giros de cheques de gerencia.  Art 871 Estatuto Tributario (ET).
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0Impuesto <b>Base gravable:</b>  valor total de la transacción financiera.
                li.mb-4.d-flex
                  i.far.fa-folder-open.bg-color-7
                  p.mb-0Impuesto <b>Tarifa:</b>  4*1000.

        h3.bg-color-4.tarjeta.p-3 Impuesto al patrimonio

    p.mb-4 <b>ARTÍCULO 292-2, Estatuto Tributario (ET). Impuesto al patrimonio - sujetos pasivos.</b> Por los años 2020 y 2021, créase un impuesto extraordinario denominado el impuesto al patrimonio a cargo de:     

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Las personas naturales, las sucesiones ilíquidas, contribuyentes del impuesto sobre la renta y complementarios.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Las personas naturales, nacionales o extranjeras, que no tengan residencia en el país, respecto de su patrimonio poseído directamente en el país, salvo las excepciones previstas en los tratados internacionales y en el derecho interno.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Las personas naturales, nacionales o extranjeras, que no tengan residencia en el país, respecto de su patrimonio poseído indirectamente a través de establecimientos permanentes, en el país, salvo las excepciones previstas en los tratados internacionales y en el derecho interno.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Requisitos
              ol.lista-ol--cuadro.ms-4
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Las sucesiones ilíquidas de causantes sin residencia en el país al momento de su muerte respecto de su patrimonio poseído en el país.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Las sociedades o entidades extranjeras que no sean declarantes del impuesto sobre la renta en el país, y que posean bienes ubicados en Colombia diferentes a acciones, cuentas por cobrar y/o inversiones de portafolio de conformidad con el artículo 2.17.2.2.1.2 del Decreto 1068 de 2015 y el 18-1 de este estatuto.
    
    h5.mb-5 ARTÍCULO 294-2, Estatuto Tributario (ET). Hecho generador.

    div.bg-color-8.tarjeta.p-5.mb-5
      p.mb-0 El impuesto al patrimonio se genera por la posesión del mismo, cuyo valor sea igual o superior a cinco mil ($5.000) millones de pesos. Para efectos de este gravamen, el concepto de patrimonio es equivalente al patrimonio líquido, calculado tomando el total del patrimonio bruto del contribuyente persona natural poseído en la misma fecha menos las deudas a cargo del contribuyente vigentes en esa fecha.

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuesto al consumo

    p.mb-5 El Artículo 512-1 del Estatuto Tributario (ET), señala que el impuesto nacional al consumo tiene como hecho generador la prestación o la venta al consumidor final o la importación por parte del consumidor final, de los siguientes servicios y bienes:

    .row.mb-5.justify-content-center
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .tarjeta-numerada__numero
            .h2 1
          .row.align-items-center.justify-content-end
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/26.svg")
            .col-lg-7
              p.mb-0 La prestación de los servicios de telefonía móvil, internet y navegación móvil, y servicio de datos según lo dispuesto en el artículo 512-2 de este Estatuto.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .tarjeta-numerada__numero
            .h2 2
          .row.align-items-center.justify-content-end
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/27.svg")
            .col-lg-7
              p.mb-0 Las ventas de algunos bienes corporales muebles, de producción doméstica o importados, según lo dispuesto en los artículos 512-3, 512-4 y 512-5 de este Estatuto. El impuesto al consumo no se aplicará a las ventas de los bienes mencionados en los artículos 512-3 y 512-4 si son activos fijos para el vendedor, salvo de que se trate de los automotores y demás activos fijos que se vendan a nombre y por cuenta de terceros y para los aerodinos.
      .col-lg-10.mb-4.mb-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-3
          .tarjeta-numerada__numero
            .h2 3
          .row.align-items-center.justify-content-end
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/28.svg")
            .col-lg-7
              p.mb-0 El servicio de expendio de comidas y bebidas preparadas en restaurantes, cafeterías, autoservicios, heladerías, fruterías, pastelerías y panaderías para consumo en el lugar, para ser llevadas por el comprador o entregadas a domicilio, los servicios de alimentación bajo contrato, incluyendo el servicio de catering, y el servicio de expendio de comidas y bebidas alcohólicas para consumo dentro de bares, tabernas y discotecas; (sic) según lo dispuesto en los artículos 426, 512-8, 512-9, 512-10, 512-11, 512- 12 y 512-13 de este estatuto. Este impuesto no es aplicable a las actividades de expendio de bebidas y comidas bajo franquicias.

    p.mb-4 Para profundizar en esta temática indague en el Estatuto Tributario (ET) artículos del 512-1 al 512-22.

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuesto unificado bajo el régimen simple de tributación

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-2.order-2
            figure
              img(src="@/assets/curso/tema1/29.svg", data-aos="zoom-in")
          .col-lg-10.order-1.mb-3.mb-lg-0
            p Este impuesto fue creado mediante la Ley 1943 de 2018 y ratificado en la Ley 2010 de 2019.
            p <b>El artículo 903 del Estatuto Tributario (ET) expresa</b> “es un modelo de tributación opcional de determinación integral, de declaración anual y anticipo bimestral, que integra el impuesto sobre la renta, el impuesto nacional al consumo y el impuesto de industria y comercio consolidado, a cargo de los contribuyentes que opten voluntariamente por acogerse al mismo”.
        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema1/30.svg", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            h5.mb-5 ARTÍCULO 904- Estatuto Tributario (ET). Hecho generador y base gravable del impuesto unificado bajo el régimen simple de tributación (simple). 
            p El hecho generador del impuesto unificado bajo el régimen simple de tributación (SIMPLE) es la obtención de ingresos susceptibles de producir un incremento en el patrimonio, y su base gravable está integrada por la totalidad de los ingresos brutos, ordinarios y extraordinarios, percibidos en el respectivo periodo gravable.
            p Para el caso del impuesto de industria y comercio consolidado, el cual se integra al impuesto unificado bajo el régimen simple de tributación (SIMPLE), se mantienen la autonomía de los entes territoriales para la definición de los elementos del hecho generador, base gravable, tarifa y sujetos pasivos, de conformidad con las leyes vigentes.
            div.bg-color-8.tarjeta.p-5.mb-5
              p.mb-0 <b>PARÁGRAFO.</b> Los ingresos constitutivos de ganancia ocasional no integran la base gravable del impuesto unificado bajo el régimen simple de tributación (SIMPLE). Tampoco integran la base gravable los ingresos no constitutivos de renta ni ganancia ocasional. Recuerde explorar el Estatuto Tributario (ET) en el Libro octavo, Art. 903 al 916, para ampliar sus conocimientos.

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuestos departamentales

    p.mb-4 Son impuestos creados en la jurisdicción departamental, mediante ordenanzas para financiar el presupuesto del departamento; por lo tanto, tiene su propia normativa. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/31.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 1. Impuesto a la venta y consumo de licores
              p Este impuesto lo constituye el consumo en el territorio nacional de cervezas, sifones, refajos y mezclas de bebidas fermentadas con bebidas no alcohólicas.
              p No generan este impuesto las exportaciones y el tránsito por el territorio del Distrito Capital, de cervezas, sifones, refajos, y mezclas de bebidas fermentadas con bebidas no alcohólicas.
              p Son responsables del impuesto los productores, los importadores, y solidariamente con ellos, los distribuidores. Además, son responsables directos del impuesto los transportadores y los expendedores al detal, cuando no puedan justificar debidamente la procedencia de los productos que transportan o expenden.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/32.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 2. Impuesto a las cervezas, cigarrillos y tabacos
              p El impuesto es aplicable al consumo de cigarrillos y tabaco elaborado, de procedencia extranjera, en la jurisdicción del Distrito Capital. Se encuentra excluido del impuesto al consumo de tabaco el chicote de tabaco de producción artesanal.
              p Son responsables del impuesto los importadores y, solidariamente con ellos, los distribuidores. Además, son responsables directos los transportadores y expendedores al detal, cuando no pueden justificar debidamente la procedencia de los productos que transportan o expenden.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/33.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 3. Loterías foráneas
              p Este impuesto se aplica a los premios de las loterías y se conoce como el impuesto a ganadores, aunado a ello, recae sobre las empresas de lotería y operadores autorizadas. 
              p La venta de lotería foráneas en jurisdicción del Distrito Capital genera a su favor y, a cargo de las empresas de lotería u operadores autorizados, un impuesto del diez por ciento (10%) sobre el valor nominal de cada billete o fracción. 
              p Los ganadores de premios de lotería pagarán al Distrito Capital, según el caso, un impuesto del diecisiete por ciento (17%) sobre el valor nominal del premio, valor que será retenido por la lotería responsable u operador autorizado al momento de pagar el premio (Secretaría Distrital de Hacienda, 2020, 28 de octubre).

    h3.bg-color-4.tarjeta.p-3.mb-4 Impuestos Municipales
    p.mb-4 Estos impuestos son recaudados por el municipio. Son instituidos por el concejo distrital o municipal, mediante acuerdos. 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
      div(titulo="Impuesto de Industria y Comercio")
        p El impuesto de Industria y Comercio se genera por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios en jurisdicción del Distrito Capital de Bogotá, ya sea que se cumplan de forma permanente u ocasional, en inmueble determinado, con establecimiento de comercio o sin ellos.
        p <b>Sujeto activo:</b>  es un impuesto administrado por el municipio o distrito.

        p <b>Sujeto pasivo:</b> personas naturales y jurídicas, que cumplan los requisitos establecidos para generar el impuesto.

        p <b>Hecho generador:</b> el hecho generador del impuesto de industria y comercio está constituido por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios en la jurisdicción del Distrito Capital de Bogotá, ya sea que se cumplan de forma permanente u ocasional, en inmueble determinado, con establecimientos de comercio o sin ellos.   Artículo 32 Decreto 352 de 2002.

        p <b>Base gravable:</b> ingresos netos del contribuyente.

        p <b>Tarifa:</b> depende de la actividad económica que ejerza la persona natural o jurídica.

      div(titulo="Impuesto predial unificado")
        p.mb-0 Es un impuesto de naturaleza directa que grava los bienes inmuebles y debe ser cancelado de forma anual teniendo en cuenta la actualización del avalúo catastral realizado por la Unidad Administrativa Especial de Catastro Distrital (UAECD), a dicho valor se aplica la tarifa vigente correspondiente al predio, estos pueden ser casas, lotes, apartamentos, etc.
      div(titulo="Impuesto de vehículos")
        p.mb-0 El impuesto de vehículos recae sobre la posesión de automotores, su naturaleza es directa, teniendo en cuenta que grava directamente al que tiene la propiedad. Se cancela de forma anual, teniendo en cuenta el avalúo que se establece de acuerdo con el modelo, capacidad, marca, línea por resolución del Ministerio de Transporte para cada año (Secretaría Distrital de Hacienda, 2020, 20 de octubre).
      div(titulo="Impuesto unificado de fondo de pobres, azar y espectáculos públicos")
        p Es un tributo de carácter distrital, mediante el cual se unificaron en un solo impuesto los tributos de azar y espectáculos y el de fondo de pobres.
        h5.mb-4 El hecho generador de este impuesto está constituido por la realización de uno de los siguientes eventos:
        h4 Espectáculos públicos
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 Apuestas sobre toda clase de juegos permitidos.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0Impuesto Rifas promocionales.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 Concursos y similares.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 Ventas por el sistema de clubes.
          li.mb-0.d-flex
            i.far.fa-folder-open.bg-color-13
            p.mb-0 La venta de entradas a: teatros, conciertos, cines, plaza de toros, hipódromos, circos y demás espectáculos públicos.
      div(titulo="Impuesto de delineación urbana")
        p.mb-0 Es un impuesto distrital que recae sobre la ejecución de obras o construcciones con licencia de construcción o reconocimiento. Es aplicable a construcciones nuevas y/o remodelaciones.
      div(titulo="Sobretasa a la gasolina motor y al ACPM ")
        p-3 Es un tributo que se declara y paga por el consumo de gasolina motor extra o corriente nacional o importada y/o ACPM nacional o importado, en el Distrito Capital de Bogotá. No genera sobretasa las exportaciones de gasolina motor extra y corriente o de ACPM.
        p.mb-0 La sobretasa se causa en el momento en que el distribuidor mayorista, productor o importador enajena la gasolina motor extra o corriente o ACPM, al distribuidor minorista o al consumidor final (Secretaría Distrital de Hacienda, 2020, 20 de octubre).
      



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
