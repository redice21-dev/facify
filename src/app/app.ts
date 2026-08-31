import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('facify');
  isFabOpen = false;

  toggleFab() {
    this.isFabOpen = !this.isFabOpen;
  }
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route) => {
        const data = route.snapshot.data;
        const title = route.snapshot.title || data['title'];
        const description = data['description'];
        const keywords = data['keywords'];

        if (title) {
          this.titleService.setTitle(title);
        }
        if (description) {
          this.metaService.updateTag({ name: 'description', content: description });
          this.metaService.updateTag({ property: 'og:description', content: description });
        }
        if (keywords) {
          this.metaService.updateTag({ name: 'keywords', content: keywords });
        }
      });
  }
}

