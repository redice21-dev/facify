import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private firestore = inject(Firestore);
  content$: Observable<any> | undefined;
  global$: Observable<any> | undefined;

  showWhatsappModal = false;

  ngOnInit() {
    this.content$ = docData(doc(this.firestore, 'siteContent', 'home'));
    this.global$ = docData(doc(this.firestore, 'siteContent', 'global'));
  }
  
  openWhatsappModal(event: Event) {
    event.preventDefault();
    this.showWhatsappModal = true;
  }
  
  closeWhatsappModal() {
    this.showWhatsappModal = false;
  }
  
  confirmWhatsapp() {
    this.showWhatsappModal = false;
    const text = encodeURIComponent("Hello! I'm interested in your web and app development services. Can we discuss a project?");
    window.open(`https://wa.me/2348037359707?text=${text}`, '_blank');
  }
}
