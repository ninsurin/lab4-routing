import { Injectable } from '@angular/core';
import { Product } from './Product/product';
@Injectable({
  providedIn: 'root'
  })
  export class BackendService {
  constructor() {}
  getProducts(): Product[] {
   return [{
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
    }];
   }
  }