import { atom } from "nanostores";

// Cart functionality

// Cart item definition
export type CartItem = {
  id: number;
  price: number;
  title: string;
  quantity: number;
  image: string; // Assuming each item has an image URL
};

export const cartItems = atom<CartItem[]>([]);

// Cart functionality
export function addToCart(item: CartItem) {
  cartItems.set([...cartItems.get(), item]);
}

export function removeFromCart(id: number) {
  cartItems.set(cartItems.get().filter(item => item.id !== id));
}

export function incrementQuantity(id: number) {
  cartItems.set(
    cartItems.get().map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
}

export function updateQuantity(id: number, quantity: number) {
  cartItems.set(
    cartItems.get().map(item =>
      item.id === id ? { ...item, quantity } : item
    )
  );
}

export function getTotalItems() {
  return cartItems.get().reduce((total, item) => total + item.quantity, 0);
}