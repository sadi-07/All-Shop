export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.products.map((product) => (
          <div
            key={product.id}
            className=" rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 bg-gray-900 flex flex-col"
          >
            {/* Product Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            {/* Product Info */}
            <div className="p-4 flex flex-col grow">
              <h2 className="font-bold text-lg mb-2">{product.title}</h2>
              <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                {product.description}
              </p>

              <div className="mt-auto flex justify-between items-center">
                <span className="font-semibold text-lg text-green-600">
                  ${product.price}
                </span>
                <span className="text-yellow-500 font-semibold">
                  ⭐ {product.rating}
                </span>
              </div>

              <a
                href={`/products/${product.id}`}
                className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
