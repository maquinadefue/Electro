import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  standalone: false,
})
export class ProductoListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  selectedSection: string = '';

  sections: string[] = []; // 🆕 Lista de secciones disponibles

  constructor(
    private productService: ProductService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.sections = [...new Set(data.map(p => p.seccion))]; // Obtener secciones únicas
      this.filterProducts();
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(p => {
      const matchesSearch = this.searchTerm.trim() === '' || 
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.code.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesSection = this.selectedSection === '' || 
        p.seccion === this.selectedSection;
      return matchesSearch && matchesSection;
    });
  }

  onSearchChange() {
    this.filterProducts();
  }

  onSectionChange() {
    this.filterProducts();
  }

  editProduct(product: Product) {
    this.router.navigate(['/producto-form'], { queryParams: { id: product._id } });
  }

  deleteProduct(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}
