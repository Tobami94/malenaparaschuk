import { SiRedux, SiHtml5, SiCss3, SiPhp, SiPostgresql, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiNpm, SiMysql, SiBootstrap, SiJest, SiPostman, SiWordpress, SiDocker      } from 'react-icons/si';

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#d53369, #cbad6d, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Malena",
  middleName: "",
  lastName: "Paraschuk",
  message: " Apasionada por crear experiencias digitales profesionales. ¡Bienvenido/a a mi portafolio! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Tobami94",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/malena-paraschuk/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/malenaparaschuk/",
    },
  ],
};


const about = {
  show: true,
  heading: "¿Quién soy?",
  imageLink: require("../editable-stuff/profile_maleP.png"),
  imageSize: 375,
  message:
    "Soy una apasionada desarrolladora full stack web con un enfoque especializado en el front end.  Me encanta traducir ideas creativas en código, creando interfaces hermosas y funcionales que cautivan a los usuarios y los mantienen comprometidos.  Me considero una persona alegre y comunicativa por naturaleza. Disfruto colaborar en equipos, compartir ideas y encontrar soluciones creativas a los desafíos que enfrentamos. En mi tiempo libre me dedico a cuidar plantas y animales, amo la naturaleza tanto como el mundo tech.",
  resume: "https://drive.google.com/file/d/1T1eaiH6uK3ti98R1EobFam1lAOHelK9b/view?usp=drive_link",
};


const repos = {
  show: true,
  heading: "Últimos repositorios",
  gitHubUsername: "Tobami94", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile_maleP.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile_maleP.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
      {
        skillName: "html-5",
        icon: <SiHtml5 />,
      },
      {
        skillName: "css3",
        icon: <SiCss3 />,
      },
      {
        skillName: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        skillName: "reactjs",
        icon: <SiReact />,
      },
      {
        skillName: "nodejs",
        icon: <SiNodedotjs />,
      },
      {
        skillName: "express",
        icon: <SiExpress/>,
      },
      {
        skillName: "npm",
        icon: <SiNpm />,
      },
      {
        skillName: "sql-database",
        icon: <SiMysql />,
      },
      {
        skillName: "postgresql",
        icon: <SiPostgresql />,
      },
      {
        skillName: 'redux',
        icon: <SiRedux />,
        },
        {
          skillName: "php",
          icon: <SiPhp />,
        },
        {
          skillName: "bootstrap",
          icon: <SiBootstrap />,
        },
        {
          skillName: "jest",
          icon: <SiJest />,
        },
        {
          skillName: "postman",
          icon: <SiPostman />,
        },
        {
          skillName: "wordpress",
          icon: <SiWordpress />,
        },
      {
        skillName: "docker",
        icon: <SiDocker />,
      }
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contacta conmigo",
  message:
    "¡Actualmente estoy buscando oportunidades de desarrollo web Front end principalmente, a tiempo completo! Si conoce algún puesto disponible, si tiene alguna pregunta o si solo quiere saludar, no dude en enviarme un correo electrónico a",
  email: "malenaparaschuk@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiencia",
  data: [
    {
      role: 'Full stack web · Aplicaciones web en react · Proyecto',
      companylogo: require('../assets/img/pokedex.png'),
      date: 'abr. 2023 – may. 2023 · 1 mes · Proyecto',
      resumen: 'He desarrollado una aplicación que cuenta con la funcionalidad de una Pokédex, con características de diseño responsivo y adaptado visualmente para las necesidades del usuario. La aplicación realiza peticiones a una API externa y ofrece un desarrollo en: front, back y bases de datos relacionales'
    },
    {
      role: 'Full stack web · Aplicaciones web en react · Proyecto',
      companylogo: require('../assets/img/rickMorty.png'),
      date: 'May 2017 – May 2018',
      resumen: 'Diseño y desarrollo de una aplicación web que incluya características como: Funcionalidad de búsqueda Filtros combinados, Solicitudes a aplicaciones externas, Creación de publicaciones, Bases de datos relacionales, Creación de perfiles (operaciones CRUD)'
    },
    {
      role: 'Desarrollo web · Freelancer',
      companylogo: require('../assets/img/CMS.png'),
      date: 'oct. 2021 - sept. 2022 · 1 año · Remoto',
      resumen: 'Realicé el tema de la [Sociedad Hípica Lebrera](https://sociedadhipicalebrera.es), entre otras páginas en producción. Esta página mencionada fue desarrollada con CMS (wordpress), Javascript, Bootstrap y HTML principalmente.'
    },
    {
      role: 'Front-End Developer · Freelancer',
      companylogo: require('../assets/img/veterans.png'),
      date: 'oct. 2021 - sept. 2022 · 1 año · Remoto',
      resumen: 'Corrección de errores y optimización en la web Veteranos FCB básquet.'
    },
    {
      role: 'Servicio de atención al cliente', 
      companylogo: require('../assets/img/movistar.png'),
      date: 'ago. 2018 - oct. 2018 · 3 meses · Presencial',
      resumen:  'En el centro de llamadas de Movistar, brindamos soporte de ventas y servicio al cliente a los clientes por teléfono. Nuestro equipo está dedicado a ayudar a los clientes con sus consultas, inquietudes y solicitudes relacionadas con los productos y servicios de Movistar.'
    },
    {
      role: 'Centro de atención telefónica',
      companylogo: require('../assets/img/fava.png'),
      date: 'jul. 2016 - oct. 2017 · 1 año 4 meses · Presencial',
      resumen:  'Trabajé en el departamento de servicio al cliente, donde manejé exitosamente bases de datos y mantuve mi propia cartera de clientes. Mis principales responsabilidades incluían la promoción y venta efectiva de varios planes y productos a los clientes. Además, brindé un soporte técnico excepcional, resolviendo rápidamente cualquier problema o inquietud que los clientes encontraran con los productos.'
    }
  ]
}



export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
