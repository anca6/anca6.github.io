export type ProjectCategory =
  | 'C#'
  | 'Unity'
  | 'Mobile'
  | 'Web Dev'
  | 'Tools'
  | 'Game Jams';

export interface ProjectSection {
  heading: string;
  paragraphs?: string[];
  bulletPoints?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;

  description: string;
  sections?: ProjectSection[];

  image: string;
  gallery?: string[];

  categories: ProjectCategory[];
  technologies: string[];

  githubUrl?: string;
  demoUrl?: string;
}
