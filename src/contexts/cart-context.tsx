import { createContext, useContext} from 'react';

// Cart functionality

// Cart item definition
export type CartItem = {
  id: number;
  price: number;
  title: string;
  quantity: number;
  image: string; // Assuming each item has an image URL
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removefromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
};


export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removefromCart: () => {},
  incrementQuantity: () => {},
  updateQuantity: () => {},
  getTotalItems: () => 0,
});

export function useCart() {
  return useContext(CartContext);
}