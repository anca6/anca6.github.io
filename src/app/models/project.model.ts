export type ProjectCategory =
  | 'C#'
  | 'Unity'
  | 'Mobile'
  | 'Web Dev'
  | 'Tools'
  | 'Game Jams';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;

  image: string;

  categories: ProjectCategory[];
  technologies: string[];

  githubUrl?: string;
  demoUrl?: string;
}
