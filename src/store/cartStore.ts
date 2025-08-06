// store/cartStore.ts

import { create } from 'zustand';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (title: string) => void;
  increaseQuantity: (title: string) => void;
  decreaseQuantity: (title: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const exists = state.cartItems.find((item) => item.title === product.title);
      if (exists) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.title === product.title
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (title) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.title !== title),
    })),

  increaseQuantity: (title) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (title) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.title === title && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  clearCart: () => set({ cartItems: [] }),
}));
