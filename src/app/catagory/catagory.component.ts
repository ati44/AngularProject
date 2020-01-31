import { Component, OnInit } from '@angular/core';
import { catagory } from './catagory';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi";
  catagoryies: catagory[] = [
    { id:1, name:"Elektronik" },
    { id:2, name:"Bilsayar" },
    { id:3, name:"İletişim" },
    { id:4, name:"Müzük" }

  ]


  ngOnInit() {
  }

}
