import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { ProductDetailComponent } from 'src/app/products/product-detail.component';
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
