import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductResponseComponent } from './product-response/product-response.component';
import { SelectedItemsComponent } from './selected-items/selected-items.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-form', pathMatch: 'full' },
  { path: 'product-form', component: ProductFormComponent },
  { path: 'product-response', component: ProductResponseComponent },
  { path: 'selected-items', component: SelectedItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }