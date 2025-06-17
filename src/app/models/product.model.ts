export interface Product {
  _id?: string;
  code: string;
  name: string;
  price: number;
  caracteristicas: string;  // ✅ antes era 'weight'
  existencia: boolean;      // ✅ nuevo campo
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}
