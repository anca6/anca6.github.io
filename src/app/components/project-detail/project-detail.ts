import {
  AfterViewInit,
  Component,
  ElementRef,
  computed,
  effect,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';

import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetail implements AfterViewInit {
  readonly project = input.required<Project>();
  readonly projects = input.required<Project[]>();

  readonly closed = output<void>();
  readonly projectChanged = output<Project>();

  private readonly dialog =
    viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  readonly imageIndex = signal(0);
  readonly imageFailed = signal(false);

  readonly images = computed(() => {
    const project = this.project();

    return project.gallery?.length
      ? project.gallery
      : [project.image];
  });

  readonly projectIndex = computed(() =>
    this.projects().findIndex(p => p.id === this.project().id)
  );

  constructor() {
    // resetting the gallery whenever the parent selects a different project
    effect(() => {
      this.project();
      this.imageIndex.set(0);
      this.imageFailed.set(false);
    });
  }

  ngAfterViewInit(): void {
    this.dialog().nativeElement.showModal();
  }

  selectImage(index: number): void {
    this.imageIndex.set(index);
    this.imageFailed.set(false);
  }

  nextImage(): void {
    this.selectImage(
      (this.imageIndex() + 1) % this.images().length
    );
  }

  previousImage(): void {
    this.selectImage(
      (this.imageIndex() - 1 + this.images().length) %
      this.images().length
    );
  }

  changeProject(direction: number): void {
    const projects = this.projects();
    if (!projects.length) return;

    // wraping around when reaching either end of the project list
    const nextIndex =
      (this.projectIndex() + direction + projects.length) %
      projects.length;

    this.projectChanged.emit(projects[nextIndex]);
  }

  onKeyDown(event: KeyboardEvent): void {
    // ignoring shortcuts while interacting with editable controls
    const target = event.target as HTMLElement;

    if (target.closest('input, textarea, select, [contenteditable]')) {
      return;
    }

    if (event.key === 'ArrowRight' && this.images().length > 1) {
      event.preventDefault();
      this.nextImage();
    }

    if (event.key === 'ArrowLeft' && this.images().length > 1) {
      event.preventDefault();
      this.previousImage();
    }
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  onDialogClosed(): void {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }
}
