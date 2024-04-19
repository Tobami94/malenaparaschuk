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
  message: " Apasionada en crear experiencias digitales profesionales.",
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
  message:(
    <div> <p class="1">En 2011, decidí intentar crear temas personalizados para Foroactivo y caí de cabeza en la madriguera de la codificación,  el desarrollo web y el diseño gráfico.</p>
       
      <p class="2"> Si avanzamos hasta el día de hoy, he tenido el privilegio de crear algunas web importantes, foros, y algunas aplicaciones que demuestran algo de mis habilidades. Mi principal objetivo estos días es crear interfaces hermosas y accesibles  ¿a todos nos gusta una web funcional y visualmente agradable cierto?. Lo que más disfruto es crear, diseñar algo desde cero, en el punto ideal donde se unen el diseño gráfico y el desarrollo: cosas que se ven bien pero que también están bien construidas bajo toda esa capa de cosas bonitas. En mi tiempo libre, también he desarrollado algunos bots de <a class="hover:text #ff4f93" href="https://discord.com/">Discord</a>, programado algún que otro servidor de juegos multijugador, diseños por placer en Photoshop, etc. Una mezcla de cosas.</p>
       
      <p class="3"> Cuando no estoy frente al ordenador, normalmente estoy cuidando de mis plantas, entrenando karate o incluso realizando alguna caminata al aire libre. </p>
      
      </div>),
  resume: "https://drive.google.com/file/d/1KWSmXE1QO_xKN0bj8Pch2xBUaXLpmVN9/view?usp=drive_link",
};


const repos = {
  show: false,
  heading: "Últimos repositorios",
  gitHubUsername: "Tobami94", 
  reposLength: 4,
  specificRepos: [],
};


const experience = {
  show: true,
  heading: "Experiencia",
  data: [
   
    {
      role: 'Desarrollo web · Freelancer',
      date: 'oct. 2021 - sept. 2022 · 1 año · Remoto',
      tools: [ 
         { tool: "JavaScript"},
         { tool: "React"},
         { tool: "Vue"},
         { tool: "PHP"},
         { tool: "HTML & SCSS"},
         { tool: "Contentful"},
         { tool: "Wordpress"},
         { tool: "Elementor"},
    ],
      resumen: 'Realicé el tema de la [Sociedad Hípica Lebrera](https://sociedadhipicalebrera.es), entre otras páginas en producción. Esta página mencionada fue desarrollada con CMS (wordpress), Javascript, Bootstrap y HTML principalmente.'
    },
    {
      role: 'Front-End Developer · Freelancer',
      date: 'oct. 2021 - sept. 2022 · 1 año · Remoto',
      tools: [ 
        { tool: "JavaScript"},
        { tool: "React"},
        { tool: "Vue"},
        { tool: "PHP"},
        { tool: "HTML & SCSS"},
        { tool: "Contentful"},
        { tool: "Wordpress"},
        { tool: "Elementor"},
   ],
      resumen: 'Corrección de errores y optimización en la web Veteranos FCB básquet.'
    },
    {
      role: 'Servicio de atención al cliente', 
      date: 'ago. 2018 - oct. 2018 · 3 meses · Presencial',
      tools: [ 
        { tool: "JavaScript"},
        { tool: "React"},
        { tool: "Vue"},
        { tool: "PHP"},
        { tool: "HTML & SCSS"},
        { tool: "Contentful"},
        { tool: "Wordpress"},
        { tool: "Elementor"},
   ],
      resumen:  'En el centro de llamadas de Movistar, brindamos soporte de ventas y servicio al cliente a los clientes por teléfono. Nuestro equipo está dedicado a ayudar a los clientes con sus consultas, inquietudes y solicitudes relacionadas con los productos y servicios de Movistar.'
    },
    {
      role: 'Centro de atención telefónica',
      date: 'jul. 2016 - oct. 2017 · 1 año 4 meses · Presencial',
      tools: [ 
        { tool: "JavaScript"},
        { tool: "React"},
        { tool: "Vue"},
        { tool: "PHP"},
        { tool: "HTML & SCSS"},
        { tool: "Contentful"},
        { tool: "Wordpress"},
        { tool: "Elementor"},
   ],
      resumen:  'Trabajé en el departamento de servicio al cliente, donde manejé exitosamente bases de datos y mantuve mi propia cartera de clientes. Mis principales responsabilidades incluían la promoción y venta efectiva de varios planes y productos a los clientes. Además, brindé un soporte técnico excepcional, resolviendo rápidamente cualquier problema o inquietud que los clientes encontraran con los productos.'
    }
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

const proyects = {
  show: true,
  heading: "Proyectos",
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
   
  ]
}



export { navBar, mainBody, about, repos, skills, experience, getInTouch, proyects };
