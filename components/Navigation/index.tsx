import Link from "./Link";
import { ShoppingCart, Search, Menu, Heart } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              My Shop
            </h1>
          </div>
          <ul className="hidden lg:flex items-center space-x-8">
            <Link href="/">Home</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
          </ul>
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 cursor-pointer" />
            <Heart className="h-6 w-6 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 cursor-pointer" />
            <ShoppingCart className="h-6 w-6 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
