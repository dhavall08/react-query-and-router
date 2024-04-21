import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddEditProduct from "./pages/AddEditProduct";
import { QueryClient } from "@tanstack/react-query";
import { productLoader, productsLoader } from "./apis/products/queries";
import { Suspense } from "react";
import ProductsSkeleton from "./pages/Products/ProductsSkeleton";
import ProductsError from "./pages/Products/ProductsError";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: productsLoader(queryClient),
    // errorElement: <ProductsError />,
  },
  {
    path: "/products/:id",
    element: <AddEditProduct />,
    loader: productLoader(queryClient),
  },
]);

export default router;
