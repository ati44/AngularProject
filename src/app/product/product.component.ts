import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from '../Services/alertify.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
  title = "Ürün Listesi";
  filterText=""; 
  products : product[]=[

    {id:1, name:"Laptop", price:2500, categoryId:1, descripton:"Asus Zen book",imageUrl:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
    {id:2, name:"Mause", price:25, categoryId:2, descripton:"A4 Mause",imageUrl:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
    {id:2, name:"Klavye", price:45, categoryId:2, descripton:"A4 Kalvye",imageUrl:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
    {id:2, name:"Cacık", price:55, categoryId:2, descripton:"A4 cacık",imageUrl:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
    {id:2, name:"Kulaklık", price:15, categoryId:2, descripton:"A4 kulaklıkların en güzeli",imageUrl:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}


  ]
  ngOnInit() {
  }

  addtocart(product){

    this.alertifyService.basarili(product.name+ " eklendi");
  }

}
