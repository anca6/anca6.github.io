import { Component, input, output, signal } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly imageFailed = signal(false);

  readonly selected = output<Project>();

  selectProject(): void{
    this.selected.emit(this.project());
  }
}
