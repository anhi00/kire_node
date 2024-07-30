import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  providers:[HttpClient],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  title = "Shop All";
  products:any [] = [];

  constructor(private http:HttpClient){

  }

  cleansers(){
    this.http.get<any[]>(environment.server + "/products/category/1").subscribe( cleansers => {
      this.products = cleansers;
      this.title = "Cleansers"
    });
  }

  moisturizers(){
    this.http.get<any[]>(environment.server + "/products/category/2").subscribe( moisturizers => {
      this.products = moisturizers;
      this.title = "Moisturizers"
    });
  }

  faceSerums(){
    this.http.get<any[]>(environment.server + "/products/category/3").subscribe( faceSerums => {
      this.products = faceSerums;
      this.title = "Face Serums"
    });
  }

  sunscreen(){
    this.http.get<any[]>(environment.server + "/products/category/4").subscribe( sunscreen => {
      this.products = sunscreen;
      this.title = "Sunscreen"
    });
  }

  treatments(){
    this.http.get<any[]>(environment.server + "/products/category/5").subscribe( treatments => {
      this.products = treatments;
      this.title = "Treatments"
    });
  }

  sortLtoH(){
    this.http.get<any[]>(environment.server + "/products/lowestToHighestPrice").subscribe( sortLtoH => {
      this.products = sortLtoH;
      this.title = "Lowest to highest"
    });
  }

  sortHtoL(){
    this.http.get<any[]>(environment.server + "/products/highestToLowestPrice").subscribe( sortHtoL => {
      this.products = sortHtoL;
      this.title = "Highest to lowest"
    });
  }

  available(){
    this.http.get<any[]>(environment.server + "/products/availableProducts").subscribe( available => {
      this.products = available;
      this.title = "In stock"
    });
  }

  unavailable(){
    this.http.get<any[]>(environment.server + "/products/unavailableProducts").subscribe( unavailable => {
      this.products = unavailable;
      this.title = "Out of stock"
    });
  }



  ngOnInit(): void {
    this.http.get<any[]>(environment.server + '/products/allProducts').subscribe (productsList => {
      console.log(productsList);
      this.products = productsList;
    });
  }

}
