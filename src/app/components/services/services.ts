import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit {
  private firestore = inject(Firestore);
  content$: Observable<any> | undefined;

  ngOnInit() {
    const docRef = doc(this.firestore, 'siteContent', 'services');
    this.content$ = docData(docRef);
  }
}
