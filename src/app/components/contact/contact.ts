import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private firestore: Firestore = inject(Firestore);
  content$: Observable<any> | undefined;
  global$: Observable<any> | undefined;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitting = false;
  success = false;
  error = '';

  ngOnInit() {
    this.content$ = docData(doc(this.firestore, 'siteContent', 'contact'));
    this.global$ = docData(doc(this.firestore, 'siteContent', 'global'));
  }

  async onSubmit(missingFieldsMsg: string) {
    if (!this.formData.name || !this.formData.email) {
      this.error = missingFieldsMsg || 'Please fill in all required fields.';
      return;
    }

    this.submitting = true;
    this.error = '';

    try {
      const contactsRef = collection(this.firestore, 'contacts');
      await addDoc(contactsRef, {
        ...this.formData,
        timestamp: new Date()
      });
      this.success = true;
      this.formData = { name: '', email: '', message: '' };
    } catch (err) {
      console.error('Error submitting form:', err);
      this.error = 'Something went wrong. Please try again later.';
    } finally {
      this.submitting = false;
    }
  }
}
