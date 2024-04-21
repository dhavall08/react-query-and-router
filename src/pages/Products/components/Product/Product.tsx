import { Link } from "react-router-dom";
import type { Product } from "../../../../apis/products/services";

type ProductProps = Pick<
  Product,
  "id" | "title" | "thumbnail" | "description" | "price"
>;

function Product({ id, title, thumbnail, description, price }: ProductProps) {
  return (
    <Link
      key={id}
      className="bg-gray-100 group rounded transition overflow-hidden hover:opacity-90 active:opacity-80"
      to={String(id)}
    >
      <img src={thumbnail} className="h-[160px] w-full object-cover" />

      <div className="flex flex-grow mb-2 h-full">
        <div className="flex flex-col p-3 truncate">
          <h3 className="text-md font-bold truncate" title={title}>
            {title}
          </h3>
          <p className="text-sm text-gray-500 truncate" title={description}>
            {description}
          </p>
        </div>

        <p className="text-lg bg-green-700 text-white p-3 font-bold transition group-hover:scale-125">
          ₹{price}
        </p>
      </div>
    </Link>
  );
}

export default Product;
