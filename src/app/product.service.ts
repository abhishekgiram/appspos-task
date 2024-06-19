import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: any[]=[];
  selectedItems: any[]=[];

  constructor() { }

  private setDesserts: string[] = [];
  private setDrinks: string[] = [];
  private mixianSet: string[] = [];

  setSetDesserts(data: string[]): void {
    this.setDesserts = data;
  }

  getSetDesserts(): string[] {
    return this.setDesserts;
  }

  setSetDrinks(data: string[]): void {
    this.setDrinks = data;
  }

  getSetDrinks(): string[] {
    return this.setDrinks;
  }

  setMixianSet(data: string[]): void {
    this.mixianSet = data;
  }

  getMixianSet(): string[] {
    return this.mixianSet;
  }
  getProductList() :any {
  return  this.productList 
  }
  setProductList(data) :any {
    this.productList = data
 }
 setSelectedItems(data):any{
  this.selectedItems = data
 }
 getSelectedItems(){
  return this.selectedItems
 }
}
