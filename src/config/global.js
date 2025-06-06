export default {
  global: {
    Name: 'Obligaciones tributarias, territoriales y nacionales',
    Description:
      'En este componente formativo, tendrá la oportunidad de abordar las generalidades acerca de los impuestos, su estructura, clasificación, tipos de contribuyentes e importancia que tiene para el sostenimiento del Estado. Los impuestos se dividen de acuerdo con su estructura tributaria en nacionales, municipales y departamentales y según las necesidades del Estado, para ello tendrá la oportunidad de comprender su organización, clasificación y las normas establecidas y vigentes, como un ejercicio fundamental para el proceso de formación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Impuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos y elementos de los Impuestos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructura y clasificación de los impuestos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Regímenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'De acuerdo con normativa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Contribuyente y declarante',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Responsabilidades',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123101_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptos y elementos de los impuestos',
      referencia:
        'Presidencia de la República. (1989). Decreto 624 de 1989: Por el cual se expide el Estatuto Tributario. Diario Oficial No. 38.697.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6533',
    },
    {
      tema: 'Estructura y clasificación de los impuestos',
      referencia:
        'Congreso de Colombia. (2018). Ley 1943 de 2018: Por la cual se expiden normas para el restablecimiento del equilibrio del presupuesto general y se dictan otras disposiciones. Diario Oficial No. 50.782.',
      tipo: 'Página web',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30036049',
    },
    {
      tema: 'De acuerdo con normativa',
      referencia:
        'Congreso de Colombia. (2019). Ley 2010 de 2019: Por medio de la cual se adoptan normas para promover el crecimiento económico. Diario Oficial No. 51.101.',
      tipo: 'Página web',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=89995',
    },
    {
      tema: 'Responsabilidades',
      referencia:
        'Congreso de Colombia. (2022). Ley 2277 de 2022: Por medio de la cual se adopta una reforma tributaria para la igualdad y la justicia social. Diario Oficial No. 52.230.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=199883',
    },
  ],
  glosario: [
    {
      termino: 'Base gravable',
      significado:
        'Es el valor o unidad de medida sobre el cual se aplica la tarifa, con el fin de establecer la cuantía del tributo.',
    },
    {
      termino: 'Calendario tributario',
      significado:
        'Cronograma o listado de fechas establecidas por la autoridad tributaria para el cumplimiento de ciertas obligaciones a cargo de los administrados, así como la presentación de declaraciones, el pago oportuno de los impuestos o el suministro de información solicitada por vía general y que es publicado para conocimiento general de los ciudadanos y para facilitar el cumplimiento voluntario de sus obligaciones tributarias.',
    },
    {
      termino: 'Contribuyente',
      significado:
        'Es toda persona natural o jurídica llamada para cumplir ciertas obligaciones tributarias por la realización del hecho generador establecido en la ley para el nacimiento del tributo.',
    },
    {
      termino: 'Declarante',
      significado:
        'Persona natural o jurídica que presenta una declaración tributaria.',
    },
    {
      termino: 'Hecho generador',
      significado:
        'Es el evento o suceso, expresamente definido en la ley, por el cual se origina la obligación tributaria.',
    },
    {
      termino: 'Impuesto',
      significado:
        'Es el tributo que establece la ley a favor del Sujeto Activo, y a cargo de los sujetos a quienes se les atribuya la realización del hecho imponible de la obligación tributaria.',
    },
    {
      termino: 'Impuesto de industria, comercio, avisos y tableros',
      significado:
        'El impuesto de Industria y Comercio se genera por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios.',
    },
    {
      termino: 'Impuesto sobre las ventas',
      significado:
        'Es un impuesto sobre el gasto o consumo generalmente de tipo masivo del orden nacional, de naturaleza indirecta, real, de causación instantánea, y de régimen general, que recae bajo la modalidad de valor agregado, es decir se aplica en las diferentes etapas del ciclo económico de producción, comercialización importación.  ',
    },
    {
      termino: 'Impuesto de renta y complementarios',
      significado:
        'El impuesto de renta es un impuesto directo, que recae sobre los contribuyentes individualmente considerados y grava a quienes en la ley están previstos como sujetos pasivos que hayan percibido ingresos, hecho generador de la obligación sustancial del impuesto, susceptible de producir un incremento neto en el patrimonio. ',
    },
    {
      termino: 'Persona natural',
      significado: 'Es un individuo que actúa en nombre propio.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Es una sociedad, organismo o entidad conformada por uno o varios individuos para cumplir un objetivo social con o sin fines de lucro.',
    },
    {
      termino: 'Retención en la fuente',
      significado:
        'Es el simple cobro anticipado de un determinado impuesto que bien puede ser el impuesto de renta, a las ventas o de industria y comercio.',
    },
    {
      termino: 'Sujeto activo',
      significado:
        'Es el Estado como acreedor de la prestación pecuniaria que se deriva de la realización del hecho generador del tributo.',
    },
    {
      termino: 'Sujeto pasivo',
      significado:
        'Es aquél a quien se le atribuye la realización del hecho impositivo de la obligación tributaria.',
    },
    {
      termino: 'Tarifa',
      significado:
        'Es la unidad de medida o porcentaje que se aplica a la base gravable para determinar la cuantía del tributo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2025). Cámara de Comercio de Bogotá.',
      link: 'https://www.ccb.org.co/',
    },
    {
      referencia:
        'Cano Morales, Abel María, Restrepo Pineda, Carlos Mario, & Villa Monsalve, Omar Osvaldo. (2019). La primera reforma tributaria en la historia de la humanidad. Entramado, 15(1), 152-163.',
      link: 'https://doi.org/10.18041/1900-3803/entramado.1.5419',
    },
    {
      referencia:
        'Colombia Compra Eficiente. (2017). Guía para la codificación de bienes y servicios de acuerdo con el código estándar de productos y servicios de Naciones Unidas, V.14.080.',
      link:
        'https://www.colombiacompra.gov.co/wp-content/uploads/2024/08/cce_guia_codificacion_bienes.pdf',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública. (s.f.). Consejo Técnico de la Contaduría Pública.',
      link: 'https://www.ctcp.gov.co/',
    },
    {
      referencia: 'DIAN. (2025). Estatuto tributario.',
      link:
        'https://www.dian.gov.co/impuestos/factura-electronica/documentacion/Paginas/estatuto-tributario.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2019). Dirección de Impuestos y Aduanas Nacionales.',
      link: 'https://www.dian.gov.co/',
    },
    {
      referencia:
        'Gonzalez, F., y Calderón, V. (2002). Las reformas tributarias en Colombia durante el siglo XX (II). Boletines de divulgación económica, 9.',
      link: '',
    },
    {
      referencia: 'IFRS Foundation´s. (2018). IFRS Foundation´s.',
      link: 'https://www.ifrs.org/',
    },
    {
      referencia:
        'Instituto Nacional de Contadores Públicos Colombia. (2018). Instituto Nacional de Contadores Públicos Colombia.',
      link: 'https://www.incp.org.co/',
    },
    {
      referencia:
        'Junta Central de Contadores. (s.f.). Junta Central de Contadores.',
      link: 'https://www.jcc.gov.co/',
    },
    {
      referencia: 'Legis. (2019). Nuevas responsabilidades en el RUT.',
      link:
        'http://www.comunidadcontable.com/BancoConocimiento/Otros/nuevas-responsabilidades-en-el-rut.asp?Miga=&CodSeccion=',
    },
    {
      referencia:
        'Ministerio de Comercio Industria y Turismo. (s.f.). Ministerio de Comercio Industria y Turismo.',
      link: 'https://www.mincit.gov.co/',
    },
    {
      referencia: 'Murcia, D. (2011). Impuestos en Colombia.',
      link:
        'http://inpuestos-geografia.blogspot.com/2011/11/impuesto-el-impuesto-es-una-clase-de.html',
    },
    {
      referencia:
        'Secretaria Distrital de Hacienda. (s.f.). Secretaria Distrital de Hacienda.',
      link: 'https://www.haciendabogota.gov.co/',
    },
    {
      referencia:
        'Serrano Valenzuela, J. (2019). Guía legis para la declaración de renta. Legis.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Sociedades. (s.f.). Superintendencia de Sociedades.',
      link: 'https://www.supersociedades.gov.co/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Patricia Mantilla Galvis',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios Financieros - Regional Distrito Capital.',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cielo Damaris Angúlo Rodriguez',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
