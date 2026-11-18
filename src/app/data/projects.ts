import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'connect-four',
    title: 'Connect Four',
    subtitle: 'Unity Game',
    description:
      'A Connect Four implementation featuring game state management, win detection, move history, and undo functionality.',
    image: 'images/projects/connect-four.png',
    categories: ['Unity', 'C#'],
    technologies: ['Unity', 'C#']
  },
  {
    id: 'rendering-optimization',
    title: 'Rendering Optimization',
    subtitle: 'Graphics Programming',
    description:
      'An exploration of rendering performance using batching, GPU instancing, and automated benchmarking.',
    image: 'images/projects/rendering.png',
    categories: ['Web Dev', 'Tools'],
    technologies: ['PlayCanvas', 'JavaScript', 'GPU Instancing']
  },
  {
    id: 'procedural-city',
    title: 'Procedural Cyberpunk City',
    subtitle: 'Procedural Generation',
    description:
      'A Unity project exploring procedural environment generation.',
    image: 'images/projects/procedural-city.png',
    categories: ['Unity', 'C#'],
    technologies: ['Unity', 'C#', 'Procedural Generation']
  }
];
