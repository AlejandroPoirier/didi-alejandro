// @desc: utility library for menu Links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItem {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItem[];
}

const menuLinks: AllMenuInterface = {
  cl: [
    {
      text: "DiDi Pasajero",
      url: "/cl/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/cl/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/cl/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
        },
        {
          text: "Club DiDiMás+",
          url: "/cl/didimas/",
        },
        {
          text: "Ciudades Operativas",
          url: "/cl/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/cl/taxi/",
    },
    {
      text: "DiDi Food",
      url: "/cl/food/",
      dropMenu: [
        {
          text: "Tienda",
          url: "/cl/food/store/",
        },
        {
          text: "Socio Repartidor",
          url: "/cl/food/delivery/",
        },
        {
          text: "Acerca",
          url: "/cl/food/about/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/cl/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/cl/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/cl/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/cl/guias/",
        },
        {
          text: "Artículos",
          url: "/cl/articulos/",
        },
      ],
    },
  ],
  ar: [
    {
      text: "DiDi Pasajero",
      url: "/ar/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/ar/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/ar/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/ar/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/ar/taxi/",
    },
    {
      text: "Sobre DiDi",
      url: "/ar/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/ar/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/ar/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Artículos",
          url: "/ar/articulos/",
        },
      ],
    },
  ],
  pe: [
    {
      text: "DiDi Pasajero",
      url: "/pe/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/pe/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/pe/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/pe/ciudades/",
        },
      ],
    },

    {
      text: "Sobre DiDi",
      url: "/pe/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/pe/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/pe/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Artículos",
          url: "/pe/articulos/",
        },
      ],
    },
  ],
  co: [
    {
      text: "DiDi Pasajero",
      url: "/co/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/co/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/co/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
  ],
  rd: [
    {
      text: "DiDi Pasajero",
      url: "/rd/pasajero/",
    },
    {
      text: "DiDi Conductor",
      url: "/rd/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/rd/driver/",
        },
        {
          text: "Socio Conductor Moto",
          url: "/rd/driver/moto/",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
    {
      text: "DiDi Moto",
      url: "/rd/driver/moto/",
    },
    {
      text: "Acerda de DiDi",
      url: "/rd/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/rd/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/rd/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/rd/guias/",
        },
        {
          text: "Artículos",
          url: "/rd/articulos/",
        },
      ],
    },
  ],
  au: [
    {
      text: "DiDi Rider",
      url: "/au/rider/",
      dropMenu: [
        {
          text: "Rider Help",
          url: "/au/rider/help/",
        },
      ],
    },
    {
      text: "DiDi Driver",
      url: "/au/driver/",
      dropMenu: [
        {
          text: "Driver",
          url: "/au/driver/",
        },
        {
          text: "Sign Up",
          url: "https://anz-rides-driver.onelink.me/ixFb/ukdriverhero",
        },
        {
          text: "DiDi Advance",
          url: "/au/didi-advance/",
        },
        {
          text: "Driver Help",
          url: "/au/driver/help/",
        },
        {
          text: "Cities",
          url: "/au/cities/",
        },
      ],
    },
    {
      text: "DiDi Delivery",
      url: "/au/delivery/",
      dropMenu: [
        {
          text: "Personal",
          url: "/au/delivery/personal/",
        },
        {
          text: "Business",
          url: "/au/delivery/business/",
        },
      ],
    },
    {
      text: "About DiDi",
      url: "/au/about-us/",
      dropMenu: [
        {
          text: "Safety",
          url: "/au/safety/",
        },
        {
          text: "Help Center",
          url: "/au/help-center/",
        },
      ],
    },
  ],
  pa: [
    {
      text: "DiDi Pasajero",
      url: "http://chile.didiglobal.com/pasajero",
    },
    {
      text: "DiDi Conductor",
      url: "http://chile.didiglobal.com/driver",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "https://chile.didiglobal.com/driver/",
        },
        {
          text: "Santiago",
          url: "https://chile.didiglobal.com/driver/santiago",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
  ],
  cr: [
    {
      text: "DiDi Pasajero",
      url: "http://chile.didiglobal.com/pasajero",
    },
    {
      text: "DiDi Conductor",
      url: "http://chile.didiglobal.com/driver",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "https://chile.didiglobal.com/driver/",
        },
        {
          text: "Santiago",
          url: "https://chile.didiglobal.com/driver/santiago",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
  ],

  mx: [
    {
      text: "Home",
      url: "http://mexico.didiglobal.com/",
    },
    {
      text: "DiDi Conductor",
      url: "https://mexico.didiglobal.com/conductor/",
      dropMenu: [
        {
          text: "Requisitos para conducir o convertirse en socio",
          url: "https://mexico.didiglobal.com/requisitos-para-conducir-o-convertirse-en-socio/",
        },
        {
          text: "Ganancias DiDi",
          url: "https://mexico.didiglobal.com/conductor/calcula-tus-ganancias",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
    {
      text: "Pasajeros",
      url: "https://mexico.didiglobal.com/pasajeros/",
    },
    {
      text: "DiDi Fleet",
      url: "https://mexico.didiglobal.com/didi-fleet/",
    },
    {
      text: "Seguridad",
      url: "https://mexico.didiglobal.com/seguridad-didi/",
    },
    {
      text: "Centro de Ayuda",
      url: "https://mexico.didiglobal.com/centro-de-ayuda/",
    },
    {
      text: "Nosotros",
      url: "https://mexico.didiglobal.com/about-us/",
    },
  ],
};

const getMenuLinks = (countryCode: string) => {
  return menuLinks[countryCode] || [];
};

export { getMenuLinks };