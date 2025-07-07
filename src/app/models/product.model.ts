export interface Product {
  _id?: string;
  code: string;
  name: string;
  descripcion: string;
  existencia?: boolean;
  imageUrl?: string;
  seccion: string; // 🆕
}

