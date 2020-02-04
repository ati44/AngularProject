import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from '../Services/alertify.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private http: HttpClient) { }
  title = "Ürün Listesi";
  filterText = "";
  products: product[] = [

  ]
  ngOnInit() {
    this.http.get<product[]>("http://localhost:3000/product").subscribe(data => {
      this.products = data;
    })
  }

  addtocart(product) {

    this.alertifyService.basarili(product.name + " eklendi");
  }

}
