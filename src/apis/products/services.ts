import axiosInstance from "../../utils/axios"

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[]
}

export const getProducts = async () => {
  return (await axiosInstance.get<ProductsResponse>('/products')).data
}

export const getProduct = async (id?: string) => {
  if (!id) {
    throw ('Id is missing.')
  }

  return (await axiosInstance.get<Product>(`/product/${id}`)).data
}