import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss'
})
export class IndividualComponent implements OnInit {

  productDetail:any [] = [];

  constructor(private route:ActivatedRoute, private http:HttpClient){}

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get("id");

      this.http.get<any[]>(environment.server + '/products/individual/' + id ).subscribe ( response => {
        console.log(response);
        this.productDetail = response;
    });

  }

}
