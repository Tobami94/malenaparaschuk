import { SiTailwindcss, SiLinkedin, SiGithub,  SiRedux, SiHtml5, SiCss3, SiPhp, SiPostgresql, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiNpm, SiMysql, SiBootstrap, SiJest, SiPostman, SiWordpress, SiDocker      } from 'react-icons/si';

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
  titleSub: "Mid Frontend Developer",
  message: " Apasionada en crear experiencias digitales profesionales.",
  icons: [
    {
      name: "github",
      icon: <SiGithub />,
      url: "https://github.com/Tobami94",
    },
    {
      name: "linkedin",
      icon: <SiLinkedin />,
      url: "https://www.linkedin.com/in/malena-paraschuk/",
    },
   
  ],
};


const about = {
  show: true,
  heading: "¿Quién soy?",
  imageLink: require("../editable-stuff/profile_maleP.png"),
  imageSize: 400,
  message:(
    <div> <p className="1">En 2011, decidí intentar crear temas personalizados para Foroactivo y caí de cabeza en la madriguera de la codificación,  el desarrollo web y el diseño gráfico.</p>
       
      <p className="2"> Si avanzamos hasta el día de hoy, he tenido el privilegio de crear algunas web importantes, foros, y algunas aplicaciones que demuestran algo de mis habilidades. Mi principal objetivo estos días es crear interfaces hermosas y accesibles  ¿a todos nos gusta una web funcional y visualmente agradable cierto?. Lo que más disfruto es crear, diseñar algo desde cero, en el punto ideal donde se unen el diseño gráfico y el desarrollo: cosas que se ven bien pero que también están bien construidas bajo toda esa capa de cosas bonitas. En mi tiempo libre, también he desarrollado algunos bots de <a class="hover:text #ff4f93" href="https://discord.com/">Discord</a>, programado algún que otro servidor de juegos multijugador, diseños por placer en Photoshop, etc. Una mezcla de cosas.</p>
       
      <p className="3"> Cuando no estoy frente al ordenador, normalmente estoy cuidando de mis plantas, entrenando karate o incluso realizando alguna caminata al aire libre. </p>
      
      </div>),
  resume: "https://drive.google.com/file/d/1_tPTuiBE1s8apZfDXWPBtDQ_2vcgqanx/view",
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
      date: '2021 — PRESENTE',
      tools: [ 
         { tool: "Javascript"},
         { tool: "React"},
         { tool: "Vue"},
         { tool: "PHP"},
         { tool: "HTML & SCSS"},
         { tool: "Contentful"},
         { tool: "Wordpress"},
    ],
      resumen:(
        <p className="z-10">Desarrollar y mantener los componentes fundamentales que dan forma a las interfaces de usuario. Colaborar estrechamente con equipos multifuncionales, incluyendo desarrolladores, diseñadores y gerentes de producto, para implementar y promover las mejores prácticas de accesibilidad web. Garantizar la coherencia y la calidad en la experiencia del usuario mediante la creación y optimización de interfaces intuitivas y eficientes.</p>
        ), 

       enlaces: [
        { url: "https://sociedadhipicalebrera.es",
        texto: "Soc. Hípica Lebrera"},
        { url: "https://veteransbasquetfcb.com/",
        texto: "VeteransBasquetFCB"},
        { url: "https://hammamfarasha.com/",
        texto: "Hammam Farasha"},
      
       ]
        
    },
    {
      role: 'Frontend Developer · NEOSHIHARA',
      date: '2018 — 2021',
      tools: [ 
        { tool: "JavaScript"},
        { tool: "React"},
        { tool: "HTML, SCSS, Tailwind"},
        { tool: "Contentful"},
        { tool: "Node.js"},
   ],
      resumen:( <p className="z-10"> Creación de aplicaciones escalables que impulsaran las ventas y los servicios de nuestros clientes. En este rol, lideré proyectos que abarcaron desde el diseño y desarrollo web hasta la implementación de soluciones de comercio electrónico utilizando plataformas como MercadoPago y PayPal. Además, colaboré en la creación de plataformas B2B/B2C, integraciones con tiendas en la Nube y la construcción de Landing Pages, entre otras responsabilidades.</p>),
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
      },
      { skillName: "tailwindcss",
    icon: <SiTailwindcss />
  },
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
      role: 'Full stack web · Aplicaciones web en react',
      companylogo: require('../assets/img/pokedex.png'),
      date: 'abr. 2023 – may. 2023 · 1 mes · Proyecto',
      resumen: 'He desarrollado una aplicación que cuenta con la funcionalidad de una Pokédex, con características de diseño responsivo y adaptado visualmente para las necesidades del usuario. La aplicación realiza peticiones a una API externa y ofrece un desarrollo en: front, back y bases de datos relacionales'
    },
    {
      role: 'Dashboard · Aplicaciones web en react',
      companylogo: require('../assets/img/rickMorty.png'),
      date: 'May 2017 – May 2018',
      resumen: 'Diseño y desarrollo de una aplicación web que incluya características como: Funcionalidad de búsqueda Filtros combinados, Solicitudes a aplicaciones externas, Creación de publicaciones, Bases de datos relacionales, Creación de perfiles (operaciones CRUD)'
    },
    {
      role: 'Clone Spotify · Aplicaciones web en react',
      companylogo: require('../assets/img/rickMorty.png'),
      date: 'May 2017 – May 2018',
      resumen: 'Diseño y desarrollo de una aplicación web que incluya características como: Funcionalidad de búsqueda Filtros combinados, Solicitudes a aplicaciones externas, Creación de publicaciones, Bases de datos relacionales, Creación de perfiles (operaciones CRUD)'
    },
    {
      role: 'Bot Discord ',
      companylogo: require('../assets/img/rickMorty.png'),
      date: 'May 2017 – May 2018',
      resumen: 'Diseño y desarrollo de una aplicación web que incluya características como: Funcionalidad de búsqueda Filtros combinados, Solicitudes a aplicaciones externas, Creación de publicaciones, Bases de datos relacionales, Creación de perfiles (operaciones CRUD)'
    },
   
  ]
}



export { navBar, mainBody, about, repos, skills, experience, getInTouch, proyects };
