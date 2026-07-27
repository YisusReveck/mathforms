import { Component } from '@angular/core';
import { FORMULARIOS } from '@data/forms.data';
import { FadeInOnScrollDirective } from '@utils/appFadeInOnScroll';

@Component({
  selector: 'app-forms',
  imports: [FadeInOnScrollDirective],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  formularios = FORMULARIOS;
}
