"use client";

// Shadcn UI components
import { Button } from "@/components/ui/button";

// Toast notification
import { toast } from "sonner";

// Icons
import { Plus } from "lucide-react";

// Have client component handle button clicks for shop page (which is a server component)


function handleAddToCart({product}: {
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
    // TODO -> Add cart functionality
    console.log("Adding to cart:", product);

    // Display toast that product has been added to cart
    // Success notification uses forest green, which doesn't look good on light mode (it's probably worse on dark mode)
    toast(`${product.title} has been added to your cart!`, {
        description: `Price: $${product.price.toFixed(2)}`,
    });


}

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

    return (
        <>
            <Button 
            onClick={() => handleAddToCart({ product })}
            size="sm"
            className="shrink-0 cursor-pointer"
            >
            <Plus className="w-4 h-4 mr-1" />
            Add
            </Button>
        </>
    )
    
}