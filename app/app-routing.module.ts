import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { PdpComponent } from './pdp/pdp.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"productList",component:PdpComponent},
  {path:"update-product/:id",component:UpdateProductComponent},
  {path:"productList/create-product",component:CreateProductComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"file-upload",component:FileUploadComponent},
  {path:"user-login/user-register",component:UserregisterComponent},
  {path:"userList",component:UsersComponent},
  {path:"userList/create-user",component:UserregisterComponent},
  {path:"update-user/:id",component:UpdateUserComponent},
  {path:"user-login",component:UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
