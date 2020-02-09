import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from '../Services/alertify.service';
import { HttpClient } from '@angular/common/http'
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  title = "Ürün Listesi";
  filterText = "";
  products: product[] = []



  ngOnInit() {


    this.activatedRoute.params.subscribe(params => {
      this.productService.getproduct(params["categoryId"]).subscribe(data => {
        this.products = data;

      })

    })



  }

  addtocart(product) {

    this.alertifyService.basarili(product.name + " eklendi");
  }
  

}
