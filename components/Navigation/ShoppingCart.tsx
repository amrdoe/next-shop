"use client";

import { useCart } from '@/lib/cart';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';

export default function ShoppingCart() {
    const { totalCount } = useCart();

    return (
        <div className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 cursor-pointer" />
            {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                    {totalCount}
                </span>
            )}
        </div>
    )
}
