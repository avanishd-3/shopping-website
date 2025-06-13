// Shadcn UI components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

// Image
import Image from "next/image";

// Icons
import { Plus, Star } from "lucide-react";

// Zod for response validation
import { z } from "zod";

// Client component for adding products to cart
import AddtoCartButton from "@/components/shop/add-to-cart-button";

export default async function ShopCardWrapper() {
    const ProductSchema = z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        price: z.number(),
        description: z.string(),
        category: z.string(),
        image: z.string().url(),
        rating: z.object({
          rate: z.number(),
          count: z.number(),
        }),
      })
    );

    // Fetch products from Fake Store API
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    const parsedProducts = ProductSchema.safeParse(products);

    if (!parsedProducts.success) {
        console.error("Failed to parse products:", parsedProducts.error);
        return (
          <h1 className="flex items-center justify-center text-2xl font-bold mb-4">Failed to load products. Try again</h1>
        );
    }
    
    return (
        <>
        {parsedProducts.data.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              {/* Nextjs image would require fill */}
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg leading-tight line-clamp-2">
                {product.title}
              </CardTitle>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground ml-1">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </div>
              </div>
              <CardDescription className="line-clamp-2">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${product.price}</span>
                <AddtoCartButton product={product} />
              </div>
            </CardContent>
          </Card>
        ))}
        </>
    )
}