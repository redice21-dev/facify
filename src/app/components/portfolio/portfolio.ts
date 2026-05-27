import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  currentFilter: string = 'all';

  projects = [
    {
      id: 1,
      title: 'Aurora SaaS Dashboard',
      category: 'web',
      image: 'assets/portfolio/web-1.png',
      description: 'A comprehensive analytics dashboard for SaaS platforms focusing on real-time data visualization.',
      tags: ['Angular', 'Typescript', 'D3.js']
    },
    {
      id: 2,
      title: 'Aethel Luxury E-commerce',
      category: 'web',
      image: 'assets/portfolio/web-2.png',
      description: 'A minimalist, high-end fashion e-commerce platform with seamless shopping experience.',
      tags: ['Angular', 'Firebase', 'Stripe']
    },
    {
      id: 3,
      title: 'Aura Fitness App',
      category: 'app',
      image: 'assets/portfolio/app-1.png',
      description: 'A premium mobile application for workout tracking and fitness goal management.',
      tags: ['Ionic', 'Capacitor', 'Firebase']
    },
    {
      id: 4,
      title: 'Nexus Fintech App',
      category: 'app',
      image: 'assets/portfolio/app-2.png',
      description: 'A sophisticated digital banking and financial management application with secure transactions.',
      tags: ['Ionic', 'Angular', 'Node.js']
    },
    {
      id: 5,
      title: 'Voter Registration App',
      category: 'app',
      image: 'assets/portfolio/votingapp.jpeg',
      description: 'A secure and transparent voter registration and management system built for reliability and ease of use.',
      tags: ['Ionic', 'Angular', 'Firebase'],
      hasFrame: true
    },
    {
      id: 6,
      title: 'Boutique Management System',
      category: 'web',
      image: 'assets/portfolio/boutique.jpeg',
      description: 'A stylish and modern boutique management and shopping platform for high-end retail businesses.',
      tags: ['Angular', 'SCSS', 'Typescript'],
      hasFrame: true
    }
  ];

  get filteredProjects() {
    if (this.currentFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.currentFilter);
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
  }
}
