import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.css']
})
export class SelectedItemsComponent implements OnInit {
  selectedItems: any[] = [];
  setDesserts: string[];
  setDrinks: string[];
  mixianSet: string[];

  showSelectedDes:string[]=[]
  showSelectedDri: string[]=[];
  showSelectedMix:string[]=[];
  constructor(private http: HttpClient, private router: Router,
    private productService: ProductService) {}
  ngOnInit(): void {

  this.setDesserts = this.productService.getSetDesserts();
  
  this.setDrinks = this.productService.getSetDrinks();
  
  this.mixianSet = this.productService.getMixianSet();

  this.selectedItems = this.productService.getSelectedItems();
if(this.setDesserts.length>0){
  this.selectedItems.forEach((item)=>{
    this.setDesserts.forEach((des)=>{
      if(item === des){
      this.showSelectedDes.push(item);
      }
    })
  })
}
if(this.setDrinks.length>0){
  this.selectedItems.forEach((item)=>{
    this.setDrinks.forEach((des)=>{
      if(des === item){
      this.showSelectedDri.push(item)
      }
    })
  })
}
if(this.mixianSet.length>0){
  this.selectedItems.forEach((item)=>{
    this.mixianSet.forEach((des)=>{
      if(item === des){
      this.showSelectedMix.push(item)
      }
    })
  })
}
  }
}