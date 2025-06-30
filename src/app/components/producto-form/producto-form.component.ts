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
    descripcion: '',
    existencia: true,
    imageUrl: '',
    seccion: '',
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Cargar datos si se está editando
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
    // Validación manual previa
    if (!this.product.code || !this.product.name || !this.product.descripcion || !this.product.seccion || !this.product.price) {
      alert('⚠️ Por favor completa todos los campos obligatorios.');
      return;
    }

    if (this.product._id) {
      this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
        alert('✅ Producto actualizado correctamente');
        this.resetForm();
      });
    } else {
      this.productService.createProduct(this.product).subscribe(() => {
        alert('✅ Producto agregado correctamente');
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.product = {
      code: '',
      name: '',
      price: 0,
      descripcion: '',
      existencia: true,
      imageUrl: '',
      seccion: '',
    };
  }
}
