// Sheet to open cart
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet"
import { CartItemDisplay } from "./cart-item";

import { useStore } from "@nanostores/react";
import { isCartOpen } from "../../contexts/cart-sheet-state";
import { cartItems, getTotalItems } from "../../contexts/cart-context";

const $isCartOpen = useStore(isCartOpen);

const onOpenChange = (open: boolean) => {
  isCartOpen.set(open);
}

const $cartItems = useStore(cartItems);

export function CartSheet() {
  return (
    <Sheet open={$isCartOpen} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:w-96">
            <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription>
                Review your items before checkout
                </SheetDescription>
            </SheetHeader>
            {/* Cart stuff */}
            <div className="container mx-auto p-4 overflow-y-auto"> {/* Overflow-y-auto adds scrolling */}
                {/* List out each cart item */}
                {$cartItems.length > 0 ? (
                <ul className="space-y-4">
                    {$cartItems.map((item) => (
                    <CartItemDisplay
                        key={item.id}
                        item={item}/>
                    ))}
                    {/* Total items and price */}
                    <li className="flex justify-between items-center p-4 border-t font-bold"> {/* Border-t adds separator line */}
                    <span>Total Items: {getTotalItems()}</span>
                    <span>Total Price: ${$cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
                    </li>
                </ul>
                ) : (
                <p className="text-gray-500">Your cart is empty.</p>
                )}
            </div>
        </SheetContent>
    </Sheet>
  );
}