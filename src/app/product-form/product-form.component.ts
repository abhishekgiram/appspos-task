import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ProductService} from './../product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  formData = {
    productId: '',
    batchId: '',
    isForRepeatCombo: false
  };

  constructor(private http: HttpClient, private router: Router,
    private productService: ProductService) {}

  onSubmit() {
    const payload = {
      
        "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
       "language_code": "en",
       "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
       "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
       "device_type": "android",
       "mst_product_id":41199,
       "branch_id":4,
       "price_type":1,
       "dishtype_id":"0",
       "is_for_repeat_set_combo":0
        
   
    };

    this.http.post('http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId', payload)
      .subscribe(response => {
        console.log(response)
        this.productService.setProductList(response)
      
        this.router.navigate(['/product-response']);
      });
  }
}