import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]=[]

  constructor(private pservice:ProductService) { }

  ngOnInit(): void {
    this.pservice.getAllProducts().subscribe(res=>{
      this.products=res
    })
  }

}
