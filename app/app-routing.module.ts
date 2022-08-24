import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { PdpComponent } from './pdp/pdp.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:"productList",component:PdpComponent},
  {path:"update-product/:id",component:UpdateProductComponent},
  {path:"create-product",component:CreateProductComponent},
  {path:"home",component:HomeComponent},
  {path:"file-upload",component:FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
