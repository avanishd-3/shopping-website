"use client";

// Shadcn UI components
import { Button } from "@/components/ui/button";

// Toast notification
import { toast } from "sonner";

// Icons
import { Plus } from "lucide-react";

// Cart functionality
import { useContext } from "react";
import { CartContext, useCart } from "@/contexts/cart-context";

// Have client component handle button clicks for shop page (which is a server component)

export default function AddToCartButton({ product } : {
    product: {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        };
    };
}) {

    // Use cart context to add product to cart
    const { cartItems, addToCart, getTotalItems } = useContext(CartContext);

    function handleAddToCart() {
    
        // TODO -> Add cart functionality
        console.log("Adding to cart:", product);

        // Use cart context to add product to cart
        addToCart(product.title);

        // Log the current items in the cart
        console.log("Items in cart:", cartItems);

        // Display toast that product has been added to cart
        // Success notification uses forest green, which doesn't look good on light mode (it's probably worse on dark mode)
        toast(`${product.title} has been added to your cart!`, {
            description: `Price: $${product.price.toFixed(2)}`,
        });
    }

    return (
        <>
            <Button 
            onClick={() => handleAddToCart()}
            size="sm"
            className="shrink-0 cursor-pointer"
            >
            <Plus className="w-4 h-4 mr-1" />
            Add
            </Button>
        </>
    )
    
}