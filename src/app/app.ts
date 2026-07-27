import { Component, signal } from '@angular/core';
import { Footer } from '@layout/footer/footer';
import { Hero } from '@sections/hero/hero';
import { Forms } from '@sections/forms/forms';

@Component({
  selector: 'app-root',
  imports: [Footer, Hero, Forms],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('math-forms');
}
