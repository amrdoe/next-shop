import Image from "next/image";

interface Props {
  title?: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function Products({ title, products = [] }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-64 object-cover rounded-lg"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
