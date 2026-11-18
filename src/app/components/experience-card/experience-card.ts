import { Component, input, output } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss'
})
export class ExperienceCard {
  readonly experience = input.required<Experience>();
  readonly selected = output<Experience>();

  selectExperience(): void {
    this.selected.emit(this.experience());
  }
}
