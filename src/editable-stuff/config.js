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
       
      <p className="2"> Si avanzamos hasta el día de hoy, he tenido el privilegio de crear algunas web importantes, foros, y algunas aplicaciones que demuestran algo de mis habilidades. Mi principal objetivo estos días es crear interfaces hermosas y accesibles  ¿a todos nos gusta una web funcional y visualmente agradable cierto?. Lo que más disfruto es crear, diseñar algo desde cero, en el punto ideal donde se unen el diseño gráfico y el desarrollo: cosas que se ven bien pero que también están bien construidas bajo toda esa capa de cosas bonitas. En mi tiempo libre, también he desarrollado algunos bots de <a className="enlacess hover:text #ff4f93" href="https://discord.com/">Discord</a>, programado algún que otro servidor de juegos multijugador, diseños por placer en Photoshop, etc. He creado muchos tipos diferentes de sitios web y productos digitales con herramientas como React, Vue, WordPress, Node.js y más.</p>
       
      <p className="3"> Cuando no estoy frente al ordenador, normalmente estoy cuidando de mis plantas, entrenando karate o incluso realizando alguna caminata al aire libre. </p>
      
      </div>),
  resume: "https://drive.google.com/file/d/1_tPTuiBE1s8apZfDXWPBtDQ_2vcgqanx/view",
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
      resumen:( <p className="z-10"> Creación de aplicaciones escalables que impulsaran las ventas y los servicios de nuestros clientes. En este rol, lideré proyectos que abarcaron desde el diseño y desarrollo web, hasta la implementación de soluciones de comercio electrónico utilizando plataformas como MercadoPago y PayPal. Además, colaboré en la creación de plataformas B2B/B2C, integraciones con tiendas en la Nube y la construcción de Landing Pages, entre otras responsabilidades.</p>),
   
      
      enlaces: [
        { url: "https://neoshihara.com/proyectos/",
        texto: "Neoshihara Projects"},
        
      
       ]
        
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
  message:
    
    (<p>Diseño en 
       <a className="enlacess text-decoration-none"   target="_blank" rel="noopener noreferrer" href="https://www.figma.com/"> Figma</a>, codificacion en 
       <a className="enlacess text-decoration-none"   target="_blank"
    rel="noopener noreferrer" href="https://code.visualstudio.com/"> Visual Studio Code</a>. Construido con 
    <a className="enlacess text-decoration-none"   target="_blank"
    rel="noopener noreferrer" href="https://es.react.dev/"> React</a> y 
    <a className="enlacess text-decoration-none" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"> Bootstrap v5.0</a>. </p>),
};

const proyects = {
  show: true,
  heading: "Proyectos",
  data: [
    {
      role: 'PokeApi ▪ API REST',
      companylogo: require('../assets/img/pokedex.png'),
      tools: [ 
        { tool: "Javascript"},
        { tool: "React"},
        { tool: "Redux"},
        { tool: "StyleComponent"},
        { tool: "Sequelize"},
        { tool: "Node"},
   ],
      resumen: (<p>Aplicación web para visualizar Pokemons y datos personalizados. Vea sus personajes favoritos, los más populares, busquelos por especie, clase, poder y/o orden alfabético. 

        Cree y guarde nuevos Pokemons, añadadalos a sus favoritos. 
        </p>),
      url: "https://github.com/Tobami94/Pokemon_PI_full"

    },
    {
      role: 'Dashboard',
      companylogo: require('../assets/img/rickMorty.png'),
      tools: [ 
        { tool: "Javascript"},
        { tool: "React"},
        { tool: "Tailwind"},
        { tool: "Vercel"},
        { tool: "HTML"},
        { tool: "Auth0"},


   ],
   resumen: (<p>App de Dashboard de usuario/administrador. El objetivo es crear una interfaz intuitiva y funcional que permita a los administradores gestionar eficientemente los datos y los usuarios de la app y las estadisticas de la misma.</p>),
   url: "https://github.com/Tobami94/Dash-prototype",
 },
    {
      role: 'Clone Spotify',
      companylogo: require('../assets/img/rickMorty.png'),
      tools: [ 
        { tool: "Javascript"},
        { tool: "React"},
        { tool: "Taildwind"},
        { tool: "HTML"},

   ],
   resumen: (<p>He desarrollado una aplicación que cuenta con la funcionalidad de una Pokédex, con características de diseño responsivo y adaptado visualmente para las necesidades del usuario. La aplicación realiza peticiones a una API externa y ofrece un desarrollo en: front, back y bases de datos relacionales</p>),
   url: "",
 },
    {
      role: 'Bot Discord.js',
      companylogo: require('../assets/img/embled.png'),
      tools: [ 
        { tool: "Javascript"},
         { tool: "MongoDB"},
         { tool: "Discord.js"},
   ],
   resumen: (<p>He desarrollado una aplicación que cuenta con la funcionalidad de una Pokédex, con características de diseño responsivo y adaptado visualmente para las necesidades del usuario. La aplicación realiza peticiones a una API externa y ofrece un desarrollo en: front, back y bases de datos relacionales</p>),
   url: "https://github.com/Tobami94/TronoDeSombras_BotDS",
   
  }
  ]
}



export { navBar, mainBody, about, skills, experience, getInTouch, proyects };
