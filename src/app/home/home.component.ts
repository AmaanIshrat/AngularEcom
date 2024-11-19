import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule, FormsModule],   // Ensure CommonModule is included here
  styleUrls: ['./home.component.css']    // Correct property for styles
})
export class HomeComponent {

  featuredProducts = [
    {
      image: 'assets/images/product-1.jpg',
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 29.99
    },
    {
      image: 'assets/images/product-2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 39.99
    },
    // Add more products as needed
  ];

  
  // Your component logic here
}

