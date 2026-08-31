import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Facify | Web Development, Software & Digital Agency',
    data: {
      title: 'Facify | Web Development, Software & Digital Agency',
      description:
        'Facify is an expert digital agency providing custom web development, business solutions, and social media marketing to help your business grow.',
      keywords:
        'facify, digital agency, web development, software solutions, social marketing, business growth, website design, UI/UX design',
    },
  },
  {
    path: 'about',
    component: About,
    title: 'About Us | Facify',
    data: {
      title: 'About Us | Facify',
      description:
        'Learn about Facify, our expert team of creative innovators, company vision, and our proven business process road for creating digital products.',
      keywords:
        'about facify, creative team, digital agency team, business process, web design agency, software company',
    },
  },
  {
    path: 'services',
    component: Services,
    title: 'Our Services | Facify',
    data: {
      title: 'Our Services | Facify',
      description:
        'Explore Facify services including Social Media Marketing, Custom Web & Mobile Development, Business Solutions, CMS & WordPress development, and UI Design.',
      keywords:
        'facify services, social marketing, business solutions, web development, mobile app development, wordpress development, photoshop design',
    },
  },
  {
    path: 'portfolio',
    component: Portfolio,
    title: 'Our Portfolio | Facify',
    data: {
      title: 'Our Portfolio | Facify',
      description:
        'Discover Facify recent creative projects including SaaS analytics dashboards, luxury e-commerce platforms, mobile banking apps, boutique systems, and more.',
      keywords:
        'facify portfolio, recent projects, saas dashboard, e-commerce platform, mobile app showcase, angular projects, web design portfolio',
    },
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Us | Facify',
    data: {
      title: 'Contact Us | Facify',
      description:
        'Get in touch with the Facify team today to start your next web development or digital marketing project. We are ready to help your business grow.',
      keywords:
        'contact facify, hire digital agency, web development inquiry, project consultation, facify support',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

