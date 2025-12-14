import ShopCardWrapper from "./shop-card-wrapper";

// Toaster
import { Toaster } from "../ui/sonner";

export default function ShopComponent() {

    // TODO -> Implement add to cart functionality
    return (
    <div className="container mx-auto py-12 pl-14">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Shop</h1>
        <p className="text-muted-foreground">Discover our curated collection of premium products</p>
        {/* Close button auto closes the toaster after a few seconds */}
        <Toaster position="bottom-right" closeButton richColors/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ShopCardWrapper />
      </div>
    </div>
  )

}