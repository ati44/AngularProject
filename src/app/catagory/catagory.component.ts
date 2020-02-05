import { Component, OnInit } from '@angular/core';
import { catagory } from './catagory';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css'],
  providers:[CategoryService]
})
export class CatagoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  title = "Kategori Listesi";
  catagoryies: catagory[] 


  ngOnInit() {

    this.categoryService.getcategory().subscribe(data=>{

      this.catagoryies=data;
    })

  }

}
