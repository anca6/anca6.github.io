import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'playcanvas-render-optimiser',
    title: 'Automatic Draw Call Optimisation',
    subtitle: 'Rendering Optimisation & Benchmarking',

    description: `Rendering optimisation pipeline developed in PlayCanvas (JavaScript) that automatically analyses scene objects and identifies compatible groups for static batching and GPU instancing.

Includes a custom benchmarking system, runtime scene generation, performance monitoring, and CSV data export. Reduced draw calls from approximately 10,001 to 4 using static batching and to 7 using GPU instancing in a controlled 10,000-object benchmark.`,

    image: 'images/projects/FrameTime3.png',
    gallery: ['images/projects/FrameTime3.png', 'images/projects/FrameTime1.png', 'images/projects/FrameTime2.png'],

    categories: ['Web Dev', 'Tools'],
    technologies: [
      'PlayCanvas',
      'JavaScript',
      'GPU Instancing',
      'Performance Optimisation'
    ],

    githubUrl: 'https://github.com/anca6/playcanvas-render-optimiser/wiki/Analysis'
  },

  {
    id: 'cyberpunk-procedural-generation',
    title: 'Cyberpunk Procedural Generation',
    subtitle: 'Procedural Generation & Graphics Programming',

    description: `Procedurally generated cyberpunk cityscape created with Unity (C#) using noise-based algorithms for building placement, modular architecture, and dynamic emission shaders.

Includes custom Unity Editor tools, URP post-processing stack, and runtime regeneration for real-time city variation.`,

    image: 'images/projects/cybercity2.png',
    gallery: ['images/projects/cybercity3.png', 'images/projects/cybercity4.png', 'images/projects/cybercity1.png'],

    categories: ['C#', 'Unity', 'Tools'],
    technologies: [
      'Unity',
      'C#',
      'Procedural Generation',
      'Editor Tools'
    ],

    githubUrl: 'https://github.com/anca6/cyberpunk-procedural-city'
  },

  //   {
  //     id: 'woodland-dash',
  //     title: 'Woodland Dash',
  //     subtitle: 'Local Multiplayer Racing Game',

  //     description: `Local multiplayer 3D racing game built in Unity (C#) featuring split-screen gameplay, character ability systems, and environment interactions.

  // Includes controller input handling, custom shaders (water, wind, skybox), and URP-based VFX for dynamic lighting and particle effects.`,

  //     image: 'images/projects/woodland-dash.png',
  //     gallery: [],

  //     categories: ['C#', 'Unity'],
  //     technologies: [
  //       'Unity',
  //       'C#',
  //       'Local Multiplayer',
  //       'Input System',
  //     ],

  //     githubUrl: 'https://github.com/anca6/woodland-dash'
  //   },

  {
    id: 'shader-programming',
    title: 'OpenGL & GLSL Shader Programming',
    subtitle: 'Graphics & Shader Programming',

    description: `A sequence of assignments focused on graphics programming in C++ and GLSL.

Explored the OpenGL rendering pipeline through procedural texture generation, transformation hierarchies, and real-time lighting using the ADS model.

Concluded with a terrain rendering demo leveraging vertex displacement and multi-layer texturing via height and splat maps.`,

    image: 'images/projects/glsl.gif',
    gallery: [],

    categories: ['C++'],
    technologies: [
      'C++',
      'OpenGL',
      'GLSL',
      'Shader Programming',
      'Lighting'
    ],

    githubUrl: 'https://github.com/anca6/shader-programming-2025'
  },

  {
    id: 'connect-4',
    title: 'Connect 4',
    subtitle: 'Gameplay Systems & Code Architecture',

    description: `Local multiplayer implementation of the classic Connect 4 game in Unity (C#), with a focus on modular code architecture and the separation of gameplay logic from engine-dependent components.

Includes configurable board dimensions and win conditions, move history and undo functionality, multidirectional win detection, and animated 3D disc placement.`,

    image: 'images/projects/connect-4.png',
    gallery: [],

    categories: ['C#', 'Unity'],
    technologies: [
      'Unity',
      'C#',
      'Code Architecture',
      'Gameplay Systems',
      'Local Multiplayer'
    ],

    githubUrl: 'https://github.com/anca6/connect-4-game'
  },

  {
    id: 'mythical-garden',
    title: 'Mythical Garden',
    subtitle: 'Augmented Reality Mobile Game',

    description: `Augmented reality exploration game developed in Unity (C#) with Vuforia Engine and GPS tracking.

Implements live location systems, inventory and growth management, and a three-stage plant evolution system rendered in AR environments.`,

    image: 'images/projects/mg.png',
    gallery: [],

    categories: ['C#', 'Unity', 'Mobile'],
    technologies: [
      'Unity',
      'C#',
      'Vuforia',
      'Augmented Reality',
      'GPS',
      'Mobile Development'
    ],

    githubUrl: 'https://github.com/anca6/mythical-garden'
  },

  {
    id: 'culture-whispers',
    title: 'Culture Whispers',
    subtitle: 'Open-World Language Learning Game',

    description: `Open-world language learning adventure in Unity (C#) with Ink integration for branching dialogues.

Implements player movement and camera control, scene and quest management, and an NPC dialogue-driven task system for narrative progression.`,

    image: 'images/projects/culture-whispers.png',
    gallery: ['images/projects/culture-whispers.png'],

    categories: ['C#', 'Unity'],
    technologies: [
      'Unity',
      'C#',
      'Dialogue Systems',
      'Quest Systems',
      'Gameplay Programming'
    ],

    githubUrl: 'https://github.com/anca6/culture-whispers'
  },

  {
    id: 'collider-performance-evaluation',
    title: 'Collider Performance Evaluation',
    subtitle: 'Physics & Performance Analysis Tool',

    description: `Physics evaluation tool in Unity (C#) designed to analyze and visualize collision events for accurate physical interaction testing.

Implements runtime collision detection, impact data logging, and custom editor visualisation tools to assist in fine-tuning object physics and hit registration systems.`,

    image: 'images/projects/rotating_knot.gif',
    gallery: ['images/projects/adv1.png', 'images/projects/adv2.png'],

    categories: ['C#', 'Unity', 'Tools'],
    technologies: [
      'Unity',
      'C#',
      'Physics',
      'Performance Analysis',
    ],

    githubUrl: 'https://github.com/anca6/advanced-tools-collision-eval/wiki/Collision-Detection-Evaluation-Report'
  },

  {
    id: 'game-jam-2025',
    title: 'Game Jam 2025',
    subtitle: 'ArtEZ MediaMusic / Saxion CMGT',

    description: `During the 3-day ArtEZ × Saxion game jam, I collaborated with music production students to create a 3D horror experience set on an abandoned spaceship. I focused on programming the gameplay systems and timed minigames, while integrating the custom ambient sounds and music composed by our ArtEZ teammates.

This project was a great opportunity to step outside the usual game development bubble and learn how sound design and music production shape player experience, which really broadened my perspective on creative collaboration.`,

    image: 'images/projects/image07.jpg',
    gallery: ['images/projects/image07.jpg'],

    categories: ['C#', 'Unity', 'Game Jam'],
    technologies: [
      'Unity',
      'C#',
      'Gameplay Programming',
      'Audio Integration',
      'Game Jam'
    ],

    githubUrl: 'https://github.com/anca6/game-jam-2025'
  }
];
