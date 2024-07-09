import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers:[HttpClient],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  deals:any [] = [];

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:4243/products/deals/Monday').subscribe (dealProduct => {
    console.log (dealProduct);
    this.deals = dealProduct;
    });
  }

}
