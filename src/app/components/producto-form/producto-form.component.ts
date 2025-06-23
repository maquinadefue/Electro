import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  standalone: false,
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  product: Product = {
    code: '',
    name: '',
    price: 0,
    caracteristicas: '',
    existencia: true,
    imageUrl: ''
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.productService.getProductById(id).subscribe(p => {
          this.product = p;
        });
      }
    });
  }

  saveProduct() {
    if (this.product._id) {
      this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
        alert('Producto actualizado correctamente');
        this.resetForm();
      });
    } else {
      this.productService.createProduct(this.product).subscribe(() => {
        alert('Producto agregado correctamente');
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.product = {
      code: '',
      name: '',
      price: 0,
      caracteristicas: '',
      existencia: true,
      imageUrl: ''
    };
  }
}
