import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
declarations: [ProductItemComponent,ProductItemComponent],   
imports: [CommonModule],
exports: [ProductListComponent]
})

export class CatalogModule { }
