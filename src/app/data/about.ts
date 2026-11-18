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
    'I am a game and software developer with a background in Creative Media & Game Technologies.',
    'My main interests are gameplay systems, graphics programming, code architecture, and optimization. I enjoy combining technical problem-solving with creative development.'
  ],

  profileImage: 'images/profile.jpg',
  resumeUrl: 'documents/resume.pdf',

 
software: [
  { icon: 'icons/unity.svg', name: 'Unity'},
  { name: 'Unreal Engine', icon: 'icons/unreal-engine.svg' },
  { name: 'PlayCanvas', icon: 'icons/playcanvas.svg' },
  { name: 'Visual Studio', icon: 'icons/visual-studio.svg' },
  { name: 'Visual Studio Code', icon: 'icons/vscode.svg' },
  { name: 'Git', icon: 'icons/git.svg' },
  { name: 'GitHub', icon: 'icons/github.svg' },
  { name: 'Blender', icon: 'icons/blender.svg' }
],

languagesAndFrameworks: [
  { name: 'C#', icon: 'icons/csharp.svg' },
  { name: 'C++', icon: 'icons/cplusplus.svg' },
  { name: 'JavaScript', icon: 'icons/javascript.svg' },
  { name: 'TypeScript', icon: 'icons/typescript.svg' },
  { name: 'Python', icon: 'icons/python.svg' },
  { name: 'Angular', icon: 'icons/angular.svg' },
  { name: 'Three.js', icon: 'icons/threejs.svg' },
  { name: 'HTML / CSS', icon: 'icons/html-css.svg' }
],
  
skills: [
  { name: 'Gameplay Programming', icon: 'icons/gamepad.svg' },
  { name: 'Software Architecture', icon: 'icons/blocks.svg' },
  { name: 'Performance Optimization', icon: 'icons/gauge.svg' },
  { name: 'Graphics Programming', icon: 'icons/monitor.svg' },
  { name: 'Procedural Generation', icon: 'icons/network.svg' },
  { name: 'Object Pooling', icon: 'icons/layers.svg' },
  { name: 'Profiling & Benchmarking', icon: 'icons/chart.svg' },
  { name: 'Agile / Scrum', icon: 'icons/refresh.svg' }
]

};
