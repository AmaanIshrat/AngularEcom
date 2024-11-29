import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.css'
})
export class GroceriesComponent {
  groceries = [
    { name: 'Apples',discount :true, description: 'Fresh organic apples', price: 25.50, discountPrice: 22.40, originalPrice: 30.00, rating: 4, image: 'assets/images/apples.jpg' },
    { name: 'Bananas',discount :true, description: 'Ripe bananas', price: 18.99, discountPrice: 16.20, originalPrice: 22.00, rating: 4, image: 'assets/images/bananas.jpg' },
    { name: 'Tomatoes',discount :true, description: 'Organic tomatoes', price: 35.99, discountPrice: 31.50, originalPrice: 40.00, rating: 4, image: 'assets/images/tomatoes.jpg' },
    { name: 'Carrots', discount :true,description: 'Fresh organic carrots', price: 20.49, discountPrice: 18.00, originalPrice: 25.00, rating: 5, image: 'assets/images/carrots.jpg' },
    { name: 'Tomatoes',discount :true, description: 'Organic tomatoes', price: 35.99, discountPrice: 31.50, originalPrice: 40.00, rating: 4, image: 'assets/images/tomatoes.jpg' },
    { name: 'Oranges',discount :true, description: 'Juicy oranges', price: 50.00, discountPrice: 45.00, originalPrice: 60.00, rating: 5, image: 'assets/images/oranges.jpg' },
    { name: 'Strawberries',discount :true, description: 'Fresh strawberries', price: 80.00, discountPrice: 72.00, originalPrice: 90.00, rating: 4, image: 'assets/images/strawberries.jpg' },
    { name: 'Blueberries',discount :false, description: 'Fresh blueberries', price: 120.00, discountPrice: 108.00, originalPrice: 130.00, rating: 5, image: 'assets/images/blueberries.jpg' },
    { name: 'Lettuce', description: 'Crisp lettuce', price: 16.99, discountPrice: 15.50, originalPrice: 20.00, rating: 4, image: 'assets/images/lettuce.jpg' },
    { name: 'Cucumbers', description: 'Fresh cucumbers', price: 25.49, discountPrice: 23.00, originalPrice: 30.00, rating: 4, image: 'assets/images/cucumbers.jpg' },
    { name: 'Pears', description: 'Sweet organic pears', price: 55.89, discountPrice: 50.50, originalPrice: 65.00, rating: 4, image: 'assets/images/pears.jpg' },
    { name: 'Potatoes', description: 'Fresh potatoes', price: 15.29, discountPrice: 14.00, originalPrice: 18.00, rating: 4, image: 'assets/images/potatoes.jpg' },
    { name: 'Garlic', description: 'Fresh garlic cloves', price: 19.99, discountPrice: 18.00, originalPrice: 25.00, rating: 5, image: 'assets/images/garlic.jpg' },
    { name: 'Onions', description: 'Fresh onions', price: 40.79, discountPrice: 36.50, originalPrice: 45.00, rating: 4, image: 'assets/images/onions.jpg' },
    { name: 'Pineapple', description: 'Fresh pineapple', price: 65.00, discountPrice: 60.00, originalPrice: 70.00, rating: 5, image: 'assets/images/pineapple.jpg' },
    { name: 'Watermelon', description: 'Juicy watermelon', price: 90.00, discountPrice: 80.00, originalPrice: 100.00, rating: 5, image: 'assets/images/watermelon.jpg' },
    { name: 'Peaches',discount :false, description: 'Sweet peaches', price: 45.50, discountPrice: 40.00, originalPrice: 50.00, rating: 4, image: 'assets/images/peaches.jpg' },
    { name: 'Mangoes',discount :false, description: 'Fresh mangoes', price: 35.99, discountPrice: 32.00, originalPrice: 40.00, rating: 4, image: 'assets/images/mangoes.jpg' },
    { name: 'Kiwis', discount :false,description: 'Fresh kiwis', price: 80.99, discountPrice: 72.00, originalPrice: 90.00, rating: 5, image: 'assets/images/kiwis.jpg' },
    { name: 'Avocados',discount :false, description: 'Ripe avocados', price: 40.49, discountPrice: 35.00, originalPrice: 45.00, rating: 5, image: 'assets/images/avocados.jpg' },
    { name: 'Cherries', discount :false,description: 'Fresh cherries', price: 95.99, discountPrice: 85.00, originalPrice: 100.00, rating: 5, image: 'assets/images/cherries.jpg' }

   
  ];
  filteredGroceries = [...this.groceries];
  priceRange: number = 200;
  selectedRating: number = 1;
  sortOrder = 'lowToHigh';

  applyFilters() {
    this.filteredGroceries = this.groceries.filter(item => {
      const priceCondition = item.discountPrice <= this.priceRange;
      const ratingCondition = this.selectedRating ? item.rating >= this.selectedRating : true;
      return priceCondition && ratingCondition;
    });
    if (this.sortOrder === 'lowToHigh') {
      this.filteredGroceries.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (this.sortOrder === 'highToLow') {
      this.filteredGroceries.sort((a, b) => b.discountPrice - a.discountPrice);
    }
  }


  addToCart(item: any) {
    console.log(`${item.name} added to the cart`);
    // You can integrate with a cart service here for actual cart functionality
  }

}
