import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  departments = ['Tools', 'Kids',
  'Electronics', 'Home', 'Clothing'];
colors = ['Fushia','lavender','red','yellow','black','gold','grey'];
productMaterials = ['metal','Frozen','steel','rubber'];


submitted = false;

onSubmit() { this.submitted = true; }
}

