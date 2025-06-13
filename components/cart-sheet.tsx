// Sheet to open cart
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function CartSheet({
  isCartOpen,
  setIsCartOpen,
  cartItems,
  getTotalItems,
}: {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartItems: { title: string; price: number; quantity: number }[];
  getTotalItems: () => number;
}) {
  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent side="right" className="w-full sm:w-96">
            <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription>
                Review your items before checkout
                </SheetDescription>
            </SheetHeader>
            {/* Cart stuff */}
            <div className="container mx-auto p-4">
                {/* List out each cart item */}
                {cartItems.length > 0 ? (
                <ul className="space-y-4">
                    {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between items-center p-4 border rounded">
                        <div>
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                        </div>
                        <span className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                    ))}
                    <li className="flex justify-between items-center p-4 border-t font-bold">
                    <span>Total Items: {getTotalItems()}</span>
                    <span>Total Price: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
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