import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-producto-form',
  standalone: false,
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent {
  product: Product = {
    code: '',
    name: '',
    price: 0,
    weight: '',
    imageUrl: ''
  };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.createProduct(this.product).subscribe(() => {
      alert('Producto agregado correctamente');
      this.product = { code: '', name: '', price: 0, weight: '', imageUrl: '' };
    });
  }
}