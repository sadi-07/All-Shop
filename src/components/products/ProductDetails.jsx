export default function ProductDetails({ product }) {
  return (
    <div className="max-w-7xl mx-auto bg-gray-900 shadow-lg rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
      
      {/* Left Column: Images */}
      <div className="flex flex-col">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.title} ${index}`}
              className="w-24 h-24 object-cover rounded-lg border hover:scale-105 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Right Column: Info */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-400 text-lg mb-6">{product.description}</p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-yellow-500 font-semibold">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="space-y-2 mb-6">
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Status:</strong> {product.availabilityStatus}</p>
          <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p><strong>Shipping:</strong> {product.shippingInformation}</p>
        </div>

        <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
          Add to Cart
        </button>
      </div>

    </div>
  );
}
