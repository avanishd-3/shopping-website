import { createContext, useContext} from 'react';

// Cart functionality
type CartContextType = {
  cartItems: string[];
  addToCart: (item: string) => void;
  getTotalItems: () => number;
};


export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  getTotalItems: () => 0,
});

export function useCart() {
  return useContext(CartContext);
}