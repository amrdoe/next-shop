export default function Hero() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            New Arrivals
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Discover our latest collection of premium products crafted for your
            lifestyle.
          </p>
          <div className="mt-5">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
