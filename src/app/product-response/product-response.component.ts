import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-response',
  templateUrl: './product-response.component.html',
  styleUrls: ['./product-response.component.css']
})
export class ProductResponseComponent implements OnInit {
  response: any;
  selectedItems: any[] = [];
  
   setDesserts = [];
   setDrinks = [];
   mixianSet = [];
   constructor(private http: HttpClient, private router: Router,
    private productService: ProductService) {}
  ngOnInit(): void {
    this.response = this.productService.getProductList();

this.response.data.details.forEach(category => {
  switch(category.mst_cat_name) {
    case "SetDessert":
      category.product_details.forEach(product => this.setDesserts.push(product.mst_product_name));
      break;
    case "Set Drinks":
      category.product_details.forEach(product => this.setDrinks.push(product.mst_product_name));
      break;
    case "Mixian Set":
      category.product_details.forEach(product => this.mixianSet.push(product.mst_product_name));
      break;
  }
});
console.log(this.setDesserts)
this.productService.setSetDesserts(this.setDesserts);
this.setDesserts = this.productService.getSetDesserts();

this.productService.setSetDrinks(this.setDrinks);
this.setDrinks = this.productService.getSetDrinks();

this.productService.setMixianSet(this.mixianSet);
this.mixianSet = this.productService.getMixianSet();
  }

  onCheckboxChange(key,item: any): void {
    if (this.selectedItems.includes(item)) {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    } else {
      this.selectedItems.push(item);
    }
  }
  addSelectedItems(){
    this.productService.setSelectedItems(this.selectedItems);
    this.router.navigate(['/selected-items']);
  }
}