import { Link } from "react-router-dom";

function ProductsError({ error }: { error: Error }) {
  /* hook to be used when error boundary is provided to react router in route */
  // let routeLevelError = useRouteError();

  console.error(error);

  return (
    <div>
      <h1 className="text-4xl font-bold mt-12 mb-4">Products</h1>
      <h2 className="text-xl mb-4">
        Could not load products 🥲! Go to{" "}
        <Link to="/" className="underline">
          Home
        </Link>
      </h2>
      <div className="bg-gray-100 p-3 rounded-lg overflow-auto h-[500px]">
        <code className="whitespace-pre">{JSON.stringify(error, null, 2)}</code>
      </div>
    </div>
  );
}

export default ProductsError;
