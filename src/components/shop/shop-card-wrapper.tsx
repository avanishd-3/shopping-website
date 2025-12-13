// Shadcn UI components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

// Icons
import { Star } from "lucide-react";

// Zod for response validation
import { z } from "zod";

// Client component for adding products to cart
import AddtoCartButton from "./add-to-cart-button";

// Nextjs image component
import Image from "next/image";

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
    let products;

    try {
        products = await res.json();
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return (
          <h1 className="flex items-center justify-center text-2xl font-bold mb-4">Failed to load products. Try again</h1>
        );
    }

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
            <CardContent className="aspect-square overflow-hidden rounded-t-lg">
              <Image 
                  src={product.image} 
                  alt={product.title}
                  className="group-hover:scale-105 transition-transform duration-300"
                  width={300}
                  height={100}
                />
            </CardContent>
            <CardHeader className="pb-3">
              {/* Min height not needed on mobile, where only 1 product is shown at a time */}
              <CardTitle className="text-lg leading-tight line-clamp-2 md:min-h-10">
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