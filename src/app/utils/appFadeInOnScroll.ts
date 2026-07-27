import {
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  AfterViewInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Example CSS - Fade in desde la izquierda
// .example {
//     /* Estado Inicial (Oculto y desplazado hacia la izquierda) */
//     opacity: 0;
//     transform: translateX(-40px);

//     /* Transición de opacidad y posición */
//     transition: opacity 0.6s ease, transform 0.6s ease;
//     will-change: opacity, transform;
// }

//  /* Estado Activo cuando entra en el viewport */
// .example.active {
//     opacity: 1;
//     transform: translateX(0);
// }

@Directive({
  selector: '[appFadeInOnScroll]',
  host: {
    '[class.active]': 'isActive()',
  },
})
export class FadeInOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly isActive = signal(false);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.isActive.set(entry.isIntersecting);
      },
      { rootMargin: '-60px 0px -10% 0px', threshold: 0.1 },
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
