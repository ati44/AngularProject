import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { CategoryService } from 'src/app/Services/category.service';
import { catagory } from 'src/app/catagory/catagory';
import { NgFormSelectorWarning, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { AlertifyService } from 'src/app/Services/alertify.service';

@Component({
  selector: 'app-product-add-form1',
  templateUrl: './product-add-form1.component.html',
  styleUrls: ['./product-add-form1.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductAddForm1Component implements OnInit {

  constructor(private categoryService:CategoryService, private productservice:ProductService,private alertifyservice:AlertifyService) { }

  model: product = new product();
  catagoryies: catagory[]

  ngOnInit() {

    this.categoryService.getcategory().subscribe(data=>{

      this.catagoryies=data;
    })
  }

  add(form:NgForm){
    
    this.productservice.addProduct(this.model).subscribe(data=>{
      this.alertifyservice.basarili(data.name + " başarıyla eklendi.")
    })
  }

}
