import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  
{
  id: 'connect-four',
  title: 'Connect Four',
  subtitle: 'Unity Game',

  description:
    'A Connect Four game developed in Unity, focusing on gameplay systems and clean code architecture.',

  sections: [
    {
      heading: 'Overview',
      paragraphs: [
        'The project implements the classic Connect Four game, including player turns, move validation, win detection, and game state management.'
      ]
    },
    {
      heading: 'My Contributions',
      bulletPoints: [
        'Implemented board state management and move validation.',
        'Developed horizontal, vertical, and diagonal win detection.',
        'Built a move history system with undo functionality.',
        'Implemented board reset and disc animations.'
      ]
    },
    {
      heading: 'Technical Implementation',
      paragraphs: [
        'The game logic is separated into dedicated systems responsible for managing board state, checking winning conditions, and coordinating gameplay.'
      ]
    }
  ],

  image: 'images/projects/connect-four.png',

  gallery: [
    'images/projects/connect-four.png',
    'images/projects/connect-four-gameplay.png'
  ],

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
