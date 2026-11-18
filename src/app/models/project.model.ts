export type ProjectCategory =
  | 'C#'
  | 'Unity'
  | 'C++'
  | 'Mobile'
  | 'Web Dev'
  | 'Tools'
  | 'Game Jam';

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
