import { Link, useParams } from "react-router-dom";
import { useGetProduct } from "../../apis/products/queries";

function AddEditProduct() {
  const { id } = useParams() as { id: string };
  const { data: product } = useGetProduct(id);

  return (
    <div className="mb-16">
      <Link className="inline-block mt-12 mb-4" to={"../products"}>
        {`< Back`}
      </Link>

      <img
        src={product.thumbnail}
        className="w-full max-h-[500px] h-full object-cover mb-4"
      />

      {product.images.length > 0 && (
        <div className="flex overflow-auto gap-4 mb-4">
          {product.images.map((src) => (
            <img
              key={src}
              src={src}
              className="w-auto h-[120px] object-cover"
            />
          ))}
        </div>
      )}

      <h1 className="font-bold text-2xl mb-2">{product?.title}</h1>
      <p className="mb-2">{product?.description}</p>
      <p className="font-bold text-4xl">₹{product?.price}</p>
    </div>
  );
}

export default AddEditProduct;
