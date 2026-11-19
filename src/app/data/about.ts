export interface Technology {
    icon: string;
    name: string;
}

export interface AboutData {
  introduction: string[];
  profileImage: string;
  resumeUrl: string;

  software: Technology[];
  languagesAndFrameworks: Technology[];
  skills: Technology[];
}

export const ABOUT_DATA: AboutData = {
  introduction: [
    // `Hi there! I'm Anca Custura, a Game Developer specialising in systems and tools programming and performance optimisation, with a background in Creative Media & Game Technologies from Saxion University of Applied Sciences.`,
    // `Over the past few years, I've had the opportunity to work on a variety of projects, from small games and technical experiments to projects in professional development environments. Somewhere along the way, I realised that what I enjoy most about game development is figuring out how things work behind the scenes.`,
    // `As much as I enjoy creating experiences for players, I thrive on designing complex systems, building custom tools, and finding ways to make things run better. It's especially satisfying when you see the difference a small technical decision can make, after doing endless experimenting with different solutions.`,
    // `I also love exchanging ideas with other developers and learning about different approaches to the same problem. There's still so much I wish to explore, both within and outside of game development.`,
    // `I'm always excited to talk about new opportunities, interesting projects, and connect with people within the industry. Feel free to reach out!`
  ],

  profileImage: '',
  resumeUrl: 'documents/resume.pdf',

 
software: [
  { icon: 'icons/unity.png', name: 'Unity Engine'},
  { name: 'PlayCanvas', icon: 'icons/playcanvas.png' },
  { name: 'Visual Studio', icon: 'icons/visual-studio-svgrepo-com.svg' },
  { name: 'Visual Studio Code', icon: 'icons/visual-studio-svgrepo-com (1).svg' },
  { name: 'Git', icon: 'icons/git-svgrepo-com.svg' },
  { name: 'GitHub', icon: 'icons/github-color-svgrepo-com.svg' },
],

languagesAndFrameworks: [
  { name: 'C#', icon: 'icons/csharp.png' },
  { name: 'C++', icon: 'icons/cplusplus.png' },
  { name: 'JavaScript', icon: 'icons/javascript-svgrepo-com.svg' },
  { name: 'TypeScript', icon: 'icons/typescript-svgrepo-com.svg' },
  { name: 'Angular', icon: 'icons/angular-svgrepo-com.svg' },
  { name: 'Three.js', icon: 'icons/three.png' },
  { name: 'HTML5', icon: 'icons/html-5-svgrepo-com.svg' },
  { name: 'HLSL / GLSL', icon: 'icons/glsl-svgrepo-com.svg' }

],
  
skills: [
  { name: 'Gameplay Programming', icon: 'icons/gamepad-svgrepo-com.svg' },
  { name: 'Software Architecture', icon: 'icons/lego-1-svgrepo-com.svg' },
  { name: 'Performance Optimization', icon: 'icons/gauge-high-svgrepo-com.svg' },
  { name: 'Graphics Programming', icon: 'icons/laptop-svgrepo-com.svg' },
  { name: 'Tools Development', icon: 'icons/tool-svgrepo-com.svg' },
  { name: 'Procedural Generation', icon: 'icons/network-wired-svgrepo-com.svg' },
  { name: 'Web Development', icon: 'icons/web-svgrepo-com.svg' },
  { name: 'Object Pooling', icon: 'icons/layers-svgrepo-com.svg' },
  { name: 'Technical Analysis', icon: 'icons/document-add-svgrepo-com.svg' },
  { name: 'Agile / Scrum', icon: 'icons/code-square-svgrepo-com.svg' },
  { name: 'Team Management', icon: 'icons/team-svgrepo-com.svg' },

]

};
