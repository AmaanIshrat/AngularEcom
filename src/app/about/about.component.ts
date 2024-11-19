import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // You can use this object to dynamically display information on your About page
  aboutContent = {
    title: 'About Our Store',
    description: `Welcome to our e-commerce store! We offer a wide range of products to meet all your needs.
                  From the latest fashion trends to household essentials, we pride ourselves on offering the best quality
                  at affordable prices. Our mission is to provide a seamless shopping experience with excellent customer service
                  and fast delivery.`,
    mission: `Our mission is to revolutionize the way people shop online by offering a personalized, convenient,
              and enjoyable experience with high-quality products and unbeatable prices.`,
    history: `Founded in 2024, our store started as a small local business and has now expanded to offer products
              to customers worldwide. We're passionate about delivering the best online shopping experience possible.`,
  };
}
