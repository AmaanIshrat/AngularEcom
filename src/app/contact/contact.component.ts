// contact-us.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactModel = {
    name: '',
    email: '',
    message: ''
  };

  messageSent = false;

  onSubmit() {
    if (this.contactModel.name && this.contactModel.email && this.contactModel.message) {
      // Simulate form submission (e.g., sending the data to an API)
      console.log('Form submitted:', this.contactModel);
      this.messageSent = true; // Show success message
    }
  }
}
