import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  private firestore = inject(Firestore);
  content$: Observable<any> | undefined;
  global$: Observable<any> | undefined;

  currentFilter: string = 'all';

  ngOnInit() {
    this.content$ = docData(doc(this.firestore, 'siteContent', 'portfolio'));
    this.global$ = docData(doc(this.firestore, 'siteContent', 'global'));
  }

  getFilteredProjects(projects: any[]) {
    if (!projects) return [];
    if (this.currentFilter === 'all') {
      return projects;
    }
    return projects.filter(p => p.category === this.currentFilter);
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
  }
}
