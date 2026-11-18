import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    id: 'denda-games',
    company: 'Denda Games',
    role: 'Game Developer Intern',
    period: '2026',
    category: 'Internship',
    description:
      'Worked on gameplay systems and optimization for HTML5 games using PlayCanvas.',
    responsibilities: [
      'Implemented and maintained gameplay systems.',
      'Worked on object pooling and procedural level generation.',
      'Analyzed and improved runtime performance.'
    ],
    technologies: ['PlayCanvas', 'JavaScript']
  },
  {
    id: 'letink-design',
    company: 'Letink Design',
    role: 'Software Developer Intern',
    period: 'Add dates',
    category: 'Internship',
    description:
      'Contributed to interactive 3D applications and technical research.',
    responsibilities: [
      'Developed interactive applications using Unity and Angular.',
      'Participated in research and development.',
      'Explored visualization techniques.'
    ],
    technologies: ['Unity', 'C#', 'Angular']
  }
];
