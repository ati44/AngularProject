import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from  '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { from } from 'rxjs';
import { AlertifyService } from './Services/alertify.service';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './Services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatagoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForm1Component,
    ProductAddForm2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
