import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {

  productList: Product[]=[]

  constructor(private pservice:ProductService, private route:Router) { }

  ngOnInit(): void {
    
   this.getProductsTable();

  }

  getProductsTable(){
    this.pservice.getAllProducts().subscribe(res=>{
      console.log(res);
      alert("inside pdp")

        res.forEach( data => { 

            console.log(data);

            this.productList.push(data);
    })
  
  })

  }
   updateProduct(id:number){
    alert(id+" product will upadate")
    this.route.navigate(['update-product',id])
    alert("hhfg")


   }


}

