import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'products',component: ProductComponent},
  {path:'',redirectTo: 'products',pathMatch:'full'},
  {path:'products/catagory/:categoryId',component:ProductComponent},
  {path:'products/add-form1', component:ProductAddForm1Component},
  {path:'products/add-form2', component:ProductAddForm2Component},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
