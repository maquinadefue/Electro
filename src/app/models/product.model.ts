export interface Product {
  _id?: string;
  code: string;
  name: string;
  price: number;
  descripcion: string;
  existencia?: boolean;
  imageUrl?: string;
  seccion: string; // 🆕
}

