import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product } from '../product';
import { catagory } from 'src/app/catagory/catagory';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { AlertifyService } from 'src/app/Services/alertify.service';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css'],
  providers: [FormBuilder, CategoryService, ProductService]
})
export class ProductAddForm2Component implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private categoryService: CategoryService,
    private productService:ProductService,
    private alettifyService:AlertifyService ) { }

  productAddForm: FormGroup;
  product: product = new product();
  catagoryies: catagory[]

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      descripton: ["", Validators.required],
      catagoryId: ["", Validators.required],
      price: ["", Validators.required],
      imageUrl: ["", Validators.required],
    })
  }
  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getcategory().subscribe(data => {
      this.catagoryies = data;
    })
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.alettifyService.basarili(data.name + " başarıyla eklendi.")
    })
  }

}
