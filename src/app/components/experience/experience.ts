
import { Component, computed, signal } from '@angular/core';

import { ExperienceCard } from '../experience-card/experience-card';
import { ExperienceDetail } from '../experience-detail/experience-detail';

import { EXPERIENCES } from '../../data/experiece';
import {
  Experience as ExperienceModel,
  ExperienceCategory
} from '../../models/experience.model';

type ExperienceFilter = 'All' | ExperienceCategory;

@Component({
  selector: 'app-experience',
  imports: [ExperienceCard, ExperienceDetail],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly experiences = EXPERIENCES;

  readonly categories: ExperienceFilter[] = [
    'All',
    'Internship',
  ];

  readonly selectedCategory = signal<ExperienceFilter>('All');
  readonly selectedExperience = signal<ExperienceModel | null>(null);

  readonly filteredExperiences = computed(() => {
    const category = this.selectedCategory();

    if (category === 'All') {
      return this.experiences;
    }

    return this.experiences.filter(
      experience => experience.category === category
    );
  });

  selectCategory(category: ExperienceFilter): void {
    this.selectedCategory.set(category);
  }

  openExperience(experience: ExperienceModel): void {
    this.selectedExperience.set(experience);
  }

  closeExperience(): void {
    this.selectedExperience.set(null);
  }
}
