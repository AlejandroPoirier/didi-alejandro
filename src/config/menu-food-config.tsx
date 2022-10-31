// @desc: utility library for food menu links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemFood {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemFood[];
}

const menuLinksFood: AllMenuInterface = {
  cl: [
    {
      text: "Tienda",
      url: "/cl/food/restaurantes/",
    },
    {
      text: "Socio repartidor",
      url: "/cl/food/repartidores/",
    },
    {
      text: "Acerca",
      url: "/cl/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/cl/food/contacto/",
    },
    {
      text: "Blog",
      url: "/cl/food/blog/",
    },
  ],
  mx: [
    {
      text: "Tienda",
      url: "/mx/food/store/",
      dropMenu: [
        {
          text: "Impuestos",
          url: "/mx/food/store/taxes/",
        },
        {
          text: "Guías",
          url: "/mx/food/store/guides/",
        },
        {
          text: "FAQs",
          url: "/mx/food/store/faqs/",
        },
        {
          text: "Kit Digital",
          url: "/mx/food/store/kit-digital/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/mx/food/delivery/",
    },
    {
      text: "Acerca",
      url: "/mx/food/about/",
      dropMenu: [
        {
          text: "Preguntas Frecuentes",
          url: "/mx/food/preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "Contacto",
      url: "/mx/food/contact/",
    },
    {
      text: "Blog",
      url: "/mx/food/blog/",
    },
  ],
  do: [
    {
      text: "Tienda",
      url: "/do/food/restaurantes/",
    },
    {
      text: "Socio repartidor",
      url: "/do/food/repartidores/",
    },
    {
      text: "Acerca",
      url: "/do/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/do/food/contacto/",
    },
    {
      text: "Blog",
      url: "/do/food/blog/",
    },
  ],
  cr: [
    {
      text: "Tienda",
      url: "/cr/food/restaurantes/",
    },
    {
      text: "Socio repartidor",
      url: "/cr/food/repartidores/",
    },
    {
      text: "Acerca",
      url: "/cr/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/cr/food/contacto/",
    },
    {
      text: "Blog",
      url: "/cr/food/blog/",
    },
  ],
  co: [
    {
      text: "Tienda",
      url: "/co/food/restaurantes/",
    },
    {
      text: "Socio repartidor",
      url: "/co/food/repartidores/",
    },
    {
      text: "Acerca",
      url: "/co/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/co/food/contacto/",
    },
    {
      text: "Blog",
      url: "/co/food/blog/",
    },
  ],
  pe: [
    {
      text: "Tienda",
      url: "/pe/food/restaurantes/",
    },
    {
      text: "Socio repartidor",
      url: "/pe/food/repartidores/",
    },
    {
      text: "Acerca",
      url: "/pe/food/acerca-didi-food/",
    },
    {
      text: "Contacto",
      url: "/pe/food/contacto/",
    },
  ]
};

const getMenuLinksFood = (countryCode: string) => {
  return menuLinksFood[countryCode] || [];
};

export { getMenuLinksFood };
