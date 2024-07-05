import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

export interface Product{
  item: string
  description: string
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  products!: Product[]

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts(){
    this.products = [{
      item: "Product1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      item: "Product2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      item: "Product3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      item: "Product4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }]
  }
}
