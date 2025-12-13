"use client";

// Shadcn UI components
import { Button } from "@/components/ui/button";

// Toast notification
import { toast } from "sonner";

// Icons
import { Plus } from "lucide-react";

// Cart functionality
import { useContext } from "react";
import { CartContext } from "@/astro/src/contexts/cart-context";

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
    const { cartItems, addToCart, incrementQuantity } = useContext(CartContext);

    function handleAddToCart() {
    
        // TODO -> Add cart functionality
        console.log("Adding to cart:", product);

        // Use cart context to add product to cart
        const currItem = {
            id: product.id,
            price: product.price,
            title: product.title,
            image: product.image, // Assuming product has an image property
            quantity: 1, // Default quantity is 1
        }

        // Check if the item is already in the cart
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // Update quantity of existing item
            incrementQuantity(product.id);
        }
        else {
            // Add new item to cart
            addToCart(currItem);
        }

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