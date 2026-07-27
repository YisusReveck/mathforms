import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '@utils/theme.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private theme = inject(ThemeService);

  public isDark = computed(() => this.theme.theme() === 'dark');

  public toggleTheme(): void {
    this.theme.toggleTheme();
  }
}
