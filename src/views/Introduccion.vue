<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5.py-4
        p.mb-4 En este componente formativo el aprendiz tendrá la oportunidad de abordar las generalidades acerca de los impuestos, su estructura, clasificación, tipos de contribuyentes e importancia que tiene para el sostenimiento del Estado.
        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/intro/1.svg", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Los impuestos se dividen de acuerdo con su estructura tributaria en nacionales, municipales y departamentales; y, según las necesidades del Estado, se clasifican en impuestos directos e indirectos. Para comprender su organización es fundamental analizar las normas establecidas en el Estatuto Tributario (ET) – (Decreto 0624 de 1989) y normas vigentes, que establecen las reglas para su aplicación.
            .cajon.color-secundario.bg-color-1.p-4.mb-4
              p.mb-0 De acuerdo con lo establecido en el Art. 363 de la Constitución Política de Colombia (CPC), el sistema tributario se fundamenta en principios de equidad, eficiencia y progresividad.
    
        

</template>

<script>
export default {
  name: 'Introduccion',
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
