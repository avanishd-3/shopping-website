import { Suspense } from "react";
import ShopCardWrapper from "@/components/shop/shop-card-wrapper";
import { SkeletonCardGrid } from "@/components/skeleton-card";

// Toaster
import { Toaster } from "@/components/ui/sonner";

export default async function Shop() {

    // TODO -> Implement add to cart functionality
    return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Shop</h1>
        <p className="text-muted-foreground">Discover our curated collection of premium products</p>
        {/* Close button auto closes the toaster after a few seconds */}
        <Toaster position="bottom-right" closeButton richColors/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Suspense fallback={<SkeletonCardGrid />}>
          {/* Using Suspense to handle loading state for the shop cards */}
          {/* This prevents the cards from loading individually, which can be visually jarring */}
          <ShopCardWrapper />
        </Suspense>
      </div>
    </div>
  )

}