import { Component, computed, signal } from '@angular/core';

import { ProjectCard } from '../project-card/project-card';
import { ProjectDetail } from '../project-detail/project-detail';

import { PROJECTS } from '../../data/projects';
import { Project, ProjectCategory } from '../../models/project.model';

type PortfolioFilter = 'All' | ProjectCategory;

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, ProjectDetail],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  readonly projects = PROJECTS;

  readonly categories: PortfolioFilter[] = [
    'All',
    'C#',
    'Unity',
    'Mobile',
    'Web Dev',
    'Tools',
    'Game Jams'
  ];

  readonly selectedCategory = signal<PortfolioFilter>('All');
  readonly selectedProject = signal<Project | null>(null);

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();

    if (category === 'All') {
      return this.projects;
    }

    return this.projects.filter(project =>
      project.categories.includes(category)
    );
  });

  selectCategory(category: PortfolioFilter): void {
    this.selectedCategory.set(category);
  }

  openProject(project: Project): void{
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }
}
