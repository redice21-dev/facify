import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  private firestore: Firestore = inject(Firestore);
  global$: Observable<any> | undefined;
  
  email: string = '';
  submitting: boolean = false;
  success: boolean = false;

  ngOnInit() {
    this.global$ = docData(doc(this.firestore, 'siteContent', 'global'));
  }

  async onSubscribe() {
    if (!this.email || !this.email.includes('@')) return;

    this.submitting = true;
    try {
      const subscribersRef = collection(this.firestore, 'subscribers');
      await addDoc(subscribersRef, {
        email: this.email,
        timestamp: new Date()
      });
      this.success = true;
      this.email = '';
      setTimeout(() => this.success = false, 5000);
    } catch (err) {
      console.error('Newsletter error:', err);
    } finally {
      this.submitting = false;
    }
  }
}
