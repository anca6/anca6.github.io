
export type ExperienceCategory = 'Internship' | 'Other';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;

  category: ExperienceCategory;
  description: string;
  responsibilities?: string[];
  technologies?: string[];

  image?: string;
  gallery?: string[];
  websiteUrl?: string;
}
