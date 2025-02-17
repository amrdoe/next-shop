"use client";

import React, { createContext, Dispatch, SetStateAction, use, useCallback, useState } from "react";

interface CartItem {
    id: number;
    quantity: number;
}

export const CartContext = createContext([[] as CartItem[], {} as Dispatch<SetStateAction<CartItem[]>>] as const);

export function useCart() {
    const [items, setItems] = use(CartContext);

    const getItemCount = useCallback(
        (id: number) => {
            return items.find((item) => item.id === id)?.quantity || 0;
        },
        [items]
    );

    const increment = useCallback(async (id: number) => {
        setItems((prev) => {
            const item = prev.find((item) => item.id === id);
            if (!item) return [...prev, { id, quantity: 1 }];

            return prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
        });
    }, [setItems]);

    const decrement = useCallback(async (id: number) => {
        setItems((prev) => {
            const item = prev.find((item) => item.id === id);
            if (!item) return prev;
            if (item.quantity <= 1) return prev.filter((item) => item.id !== id);

            return prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    }, [setItems]);

    return {
        items,
        totalCount: items.reduce((acc, item) => acc + item.quantity, 0),
        getItemCount,
        increment,
        decrement,
    };
}


export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    return (
        <CartContext.Provider value={[items, setItems]}>
            {children}
        </CartContext.Provider>
    )
}
