import { Component, OnInit } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';
import { ProductService } from '../service/product.service';
import { Product } from '../product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import 'rxjs/add/operator/switchMap';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule , SharedModule, PanelModule } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
 providers:[CartService,ProductService]
})
export class ProductListComponent implements OnInit {

   products: Product[];
  selectedProduct: Product;
  displayDialog: boolean;
  category:string;
    constructor(private productService: ProductService ,private route: ActivatedRoute ,private cartService:CartService  
    ) { }
    
  ngOnInit() {
    this.route.queryParams.switchMap(params => {
      if(params.category == undefined){
        return this.productService.getProducts();
      } else{
    return this.productService.getProducts(params.category);
  }
  }).subscribe(products => this.products = products);
    
}
  selectProducts(product: Product) {
        this.selectedProduct = product;
        this.displayDialog = true;
    }

moveToCart(selectedProduct:Product){
  this.displayDialog = false;
  this.cartService.getProductById(selectedProduct.id).then((product)=>{
   console.log(product);
   console.log(selectedProduct);
product["quantity"]=product["quantity"]+1;
console.log(product["quantity"]);
                     this.cartService.update(product);
 return this.selectedProduct=product;
 })
.catch(()=>{this.cartService.addtoDB(selectedProduct);
return null;})
  
}
    onDialogHide() {
        this.selectedProduct = null;
    }

}
