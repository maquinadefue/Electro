export interface Product {
  _id?: string;
  code: string;
  name: string;
  price: number;
  caracteristicas: string;
  existencia?: boolean;
  imageUrl?: string;
  seccion: string; // 🆕
}

