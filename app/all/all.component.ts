import { Component, OnInit } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';
import { ProductService } from '../product.service';
import { Products } from '../products';
import {ButtonModule} from 'primeng/primeng';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
   products: Products[];
  selectedProduct: Products;
  displayDialog: boolean;
    constructor(private productService: ProductService) { }
  ngOnInit() {

    this.productService.getProducts().then(products => this.products = products);
  }
  selectProducts(product: Products) {
        this.selectedProduct = product;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedProduct = null;
    }

}
