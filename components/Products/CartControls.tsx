"use client";

import { useCart } from '@/lib/cart';
import React from 'react'

export default function CartControls({ id }: { id: number }) {
    const { getItemCount, increment, decrement } = useCart();
    const count = getItemCount(id);

    return <div className='absolute flex gap-2 bottom-4 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
        {count ? (<>
            <button
                onClick={() => decrement(id)}
                className="bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full">
                -
            </button>
            <input type="number" value={count} readOnly className='inline-block px-2 bg-white dark:bg-black text-black dark:text-white w-10 rounded-md' />
        </>) : null}

        <button
            onClick={() => increment(id)}
            className="bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full">
            {count ? "+" : "Add to Cart"}
        </button>
    </div>
}
