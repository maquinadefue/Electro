import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  standalone: false
})
export class ProductoListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    public authService: AuthService, // 👈 Hacemos público para usar en el HTML
    private router: Router // 👈 Para redirigir en editar
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  editProduct(product: Product) {
    // Aquí puedes redirigir al formulario con el ID del producto, o guardar el producto en un servicio
    this.router.navigate(['/producto-form'], { queryParams: { id: product._id } });
  }

  deleteProduct(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts(); // Recarga la lista después de eliminar
      });
    }
  }
}
