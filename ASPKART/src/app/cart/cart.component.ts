import { Component, OnInit, NgZone } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../product';
import { DataListModule } from 'primeng/primeng';
import { DataScrollerModule } from 'primeng/primeng';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule, SharedModule, PanelModule } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];
  sum: number;
  count: number = 0;
  constructor(private cartService: CartService, private router: Router, private zone: NgZone, // <== added
  ) { }
  productDetail(): void {
    this.sum = 0;
    this.cartService.getProducts().then(products => {
      products.forEach(element => {
        this.sum = this.sum + (element.price * element["quantity"]);
        this.count = this.count + element["quantity"];
      });
      return this.products = products
    });
  }
  ngOnInit() {

    this.productDetail();
    //  let timer = Observable.timer(2000, 5000);
    //  timer.subscribe(() => this.productDetail());
  }


  deleteFromCart(product: Product): void {
    this.cartService
      .delete(product.id)
      .then(() => {
        this.router.navigate(['/cart']);

        return this.products = this.products.filter(h => h !== product);

      });
  }

}
