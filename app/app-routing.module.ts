import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { PdpComponent } from './pdp/pdp.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"productList",component:PdpComponent},
  {path:"update-product/:id",component:UpdateProductComponent},
  {path:"productList/create-product",component:CreateProductComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"file-upload",component:FileUploadComponent},
  {path:"user-register",component:UserregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
