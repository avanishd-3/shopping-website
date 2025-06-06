// Shadcn UI components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

// Icons
import { Plus, Star } from "lucide-react";

// Zod for response validation
import { z } from "zod";

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
            <div className="container mx-auto px-6 py-12">
            <h1 className="text-2xl font-bold mb-4">Failed to load products</h1>
            <pre className="text-red-500">{JSON.stringify(parsedProducts.error.issues, null, 2)}</pre>
            </div>
        );
    }
    
    return (
        <>
        {parsedProducts.data.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
            <div className="aspect-square overflow-hidden rounded-t-lg">
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
                <Button 
                //  onClick={() => handleAddToCart(product)}
                  size="sm"
                  className="shrink-0 cursor-pointer"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        </>
    )
}