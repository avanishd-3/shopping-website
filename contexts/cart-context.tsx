import { createContext, useContext} from 'react';

// Cart functionality

// Cart item definition
export type CartItem = {
  id: number;
  price: number;
  title: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementQuantity: (id: number) => void;
  getTotalItems: () => number;
};


export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  incrementQuantity: () => {},
  getTotalItems: () => 0,
});

export function useCart() {
  return useContext(CartContext);
}