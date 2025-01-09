import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.loadThemePreference();
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkTheme.value;
    this.isDarkTheme.next(newTheme);
    this.saveThemePreference(newTheme);
    this.applyTheme(newTheme);
  }

  getCurrentTheme(): 'dark' | 'light' {
    return this.isDarkTheme.value ? 'dark' : 'light';
  }

  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  private saveThemePreference(isDark: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('darkTheme', JSON.stringify(isDark));
    }
  }

  private loadThemePreference(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('darkTheme');
      const isDark = storedTheme ? JSON.parse(storedTheme) : false;
      this.isDarkTheme.next(isDark);
      this.applyTheme(isDark);
    }
  }
}
