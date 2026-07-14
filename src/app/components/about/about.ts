import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  private firestore = inject(Firestore);
  content$: Observable<any> | undefined;

  ngOnInit() {
    const docRef = doc(this.firestore, 'siteContent', 'about');
    this.content$ = docData(docRef);
  }
}
