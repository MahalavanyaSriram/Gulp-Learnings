import { Component, OnInit } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ViewEncapsulation} from '@angular/core';

import {InputTextModule, DataTableModule, ButtonModule, DialogModule , SharedModule, PanelModule } from 'primeng/primeng';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

   products: Product[];
  selectedProduct: Product;
  displayDialog: boolean;
    constructor(private productService: ProductService) { }
  ngOnInit() {

  this.productService.getProducts().then(products => this.products = products);

  }
  add(product: Product): void {
        this.productService.create(product)
      .then(hero => {
        this.products.push(product);
      });
  }

    delete(product: Product): void {
    this.productService
        .delete(product.id)
        .then(() => {
          this.products = this.products.filter(h => h !== product);
                  });
  }
  selectProducts(product: Product) {
        this.selectedProduct = product;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedProduct = null;
    }

}
