import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    id: 'denda-games',
    company: 'Denda Games',
    role: 'Game Developer Intern',
    period: 'Feb 2026 - Jul 2026',
    category: 'Internship',
    image: 'images/projects/denda-games.png',
    gallery: ['images/projects/denda2.png'],
    description: `During my graduation internship at Denda Games, I worked on porting a confidential game to HTML5 using PlayCanvas and JavaScript. My graduation project focused on performance optimisation, where a large part of my work involved understanding how existing systems behaved, identifying performance bottlenecks and researching practical ways to address them.

Through profiling and technical analysis, I investigated memory usage, object creation, draw calls and runtime performance. I used these findings to develop and improve gameplay systems, with a particular focus on object pooling, procedural level generation and efficient content spawning.

This internship strengthened my debugging, research and analytical skills while giving me a better understanding of the technical challenges involved in game development for web platforms. It also reinforced my interest in specialising in gameplay systems, software architecture and performance optimisation.`,

responsibilities: [
  'Conducted technical research into performance optimisation techniques for HTML5 games developed in PlayCanvas.',

  'Profiled and analysed runtime performance, memory usage, draw calls and object allocation to identify performance bottlenecks.',

  'Designed and implemented a reusable object pooling system with dynamic pool allocation, entity lifecycle management and runtime statistics.',

  'Developed procedural level generation systems, including dynamic spawning, recycling and positioning of gameplay objects.',

  'Improved existing gameplay systems with a focus on performance, modularity, scalability and code maintainability.',

  'Evaluated optimisation techniques through performance measurements and comparative testing.',

  'Contributed to the development and porting of gameplay features from Unity to PlayCanvas.',

  'Documented technical findings, implementation decisions and performance evaluation results as part of my graduation research.'
],

technologies: [
  'PlayCanvas',
  'JavaScript',
  'HTML5',
  'WebGL',
  'Unity',
  'C#',
  'Performance Profiling',
  'Object Pooling',
  'Procedural Generation'
],
  },
  {
    id: 'letink-design',
    company: 'Letink Design',
    role: 'Software Developer Intern',
    period: 'Feb 2025 - Jul 2025',
    category: 'Internship',
    image: 'images/projects/letink2.png',
   description: `Letink Design develops tailored digital solutions with a strong focus on 3D technologies, ranging from interactive product portfolios to full-scale virtual showrooms.

During my internship, I worked on client projects using Unity and Angular, while also conducting technical research and developing prototypes within the R&D department. This gave me the opportunity to explore different areas of software development, from building interactive applications to graphics programming and software deployment.

Working alongside industry professionals helped me gain a better understanding of professional development workflows and discover how much I enjoy combining creativity and technical problem-solving.`,

responsibilities: [
  'Contributed to the development of interactive product portfolios in Unity, implementing UI layouts, screen navigation and client asset integration.',

  'Independently developed an interactive 360-degree virtual tour using Angular, from planning and prototyping to development and deployment.',

  'Conducted technical research into real-time liquid visualisation, developing custom shaders and a node-based system for simulating flowing liquids.',

  'Developed a reusable installer template using NSIS to automate the installation process for Unity applications.',

  'Created animated web visuals using Three.js and custom GLSL shaders, with a focus on visual quality and runtime performance.'
],

//websiteUrl: 'https://www.letink.nl/',

technologies: [
  'Unity',
  'C#',
  'Angular',
  'TypeScript',
  'Three.js',
  'GLSL',
  'Shader Graph',
  'URP',
  'NSIS'
],
  }
];
