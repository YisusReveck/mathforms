import { Component } from '@angular/core';
import { Tooltip } from '@utils/tooltip/tooltip';
import { FORMULARIOS } from '@data/forms.data';

@Component({
  selector: 'app-hero',
  imports: [Tooltip],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  formularios = FORMULARIOS;
}
