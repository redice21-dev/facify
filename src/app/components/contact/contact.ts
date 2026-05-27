import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private firestore: Firestore = inject(Firestore);

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitting = false;
  success = false;
  error = '';

  async onSubmit() {
    if (!this.formData.name || !this.formData.email) {
      this.error = 'Please fill in all required fields.';
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
