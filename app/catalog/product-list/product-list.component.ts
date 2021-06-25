import { Component, OnInit,ViewChildren ,QueryList} from '@angular/core';
import { Product } from '../../Product/product';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
   productItems!: QueryList<ProductItemComponent>;
  products: Product[];
  constructor() {
    this.products =[{
      name: 'ส้มโอ',
      price: 111
      },
      {
      name: 'แตงโม',
      price: 222
      },
      {
      name: 'มะพ้ร่าวนํ้าหอม',
      price: 333
      }
    ]
   }
  ngOnInit() {}
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
      productComponent.isSelected = true;
  }
}