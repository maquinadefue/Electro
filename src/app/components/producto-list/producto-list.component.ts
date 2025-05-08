import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  standalone: false
})
export class ProductoListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(id: string | undefined) {
    if (id && confirm('¿Eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
    }
  }

  editProduct(product: Product) {
    // Puedes abrir un modal o redirigir a un formulario con los datos
    alert('Función editar en desarrollo');
  }
}