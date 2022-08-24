import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 


  

  baseUrl:string="http://localhost:8080/products"

  constructor(private http:HttpClient) { }

  getAllProducts(){
    alert("getting products")
    return this.http.get<Product[]>(this.baseUrl+"/getAll");
  }

  addProduct(productData:Product){

    console.log("service" +productData)

     return    this.http.post(this.baseUrl+"/add-product",productData);


  }
  updateProduct(product:Product){
    return this.http.put(this.baseUrl+"/updateProduct",product);
  }

  getProductById(id:number){
    return this.http.get<Product>(this.baseUrl+"/get-product/"+id)
  }

}
