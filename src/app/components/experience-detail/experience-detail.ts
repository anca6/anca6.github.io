import {
  AfterViewInit,
  Component,
  ElementRef,
  computed,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';

import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience-detail',
  imports: [],
  templateUrl: './experience-detail.html',
  styleUrl: './experience-detail.scss'
})
export class ExperienceDetail implements AfterViewInit {
  readonly experience = input.required<Experience>();
  readonly closed = output<void>();

  private readonly dialog =
    viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  readonly imageIndex = signal(0);
  readonly imageFailed = signal(false);

  readonly images = computed(() => {
    const experience = this.experience();

    return experience.gallery?.length
      ? experience.gallery
      : experience.image
        ? [experience.image]
        : [];
  });

  ngAfterViewInit(): void {
    this.dialog().nativeElement.showModal();
  }

  selectImage(index: number): void {
    this.imageIndex.set(index);
    this.imageFailed.set(false);
  }

  nextImage(): void {
    const count = this.images().length;
    if (count < 2) return;

    this.selectImage((this.imageIndex() + 1) % count);
  }

  previousImage(): void {
    const count = this.images().length;
    if (count < 2) return;

    this.selectImage((this.imageIndex() - 1 + count) % count);
  }

  onKeyDown(event: KeyboardEvent): void {
    const target = event.target;

    if (
      target instanceof HTMLElement &&
      target.closest('input, textarea, select, [contenteditable]')
    ) {
      return;
    }

    if (event.key === 'ArrowRight' && this.images().length > 1) {
      event.preventDefault();
      this.nextImage();
    } else if (event.key === 'ArrowLeft' && this.images().length > 1) {
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
