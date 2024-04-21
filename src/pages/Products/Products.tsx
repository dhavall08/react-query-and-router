import { useGetProducts } from "../../apis/products/queries";
import Product from "./components/Product/Product";
import ProductsSkeleton from "./ProductsSkeleton";
import ProductsError from "./ProductsError";

function Products() {
  const { data, isLoading, isError, error } = useGetProducts();

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  if (isError) {
    return <ProductsError error={error} />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mt-12 mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data?.products.map(({ id, title, thumbnail, description, price }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            thumbnail={thumbnail}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
