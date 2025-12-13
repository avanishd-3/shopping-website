import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ShoppingBag, Truck, Shield, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Minimal Store
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover curated products with timeless design. Quality, simplicity, and elegance in every piece.
          </p>
          {/* Decorative line that looks like a small divider -> inspired by Apple */}
          <div className="flex justify-center">
            <div className="w-75 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-0 bg-card/50 backdrop-blur transition-transform duration-200 hover:scale-102 shadow hover:shadow-lg">
            <CardHeader>
              <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Curated Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every item is carefully chosen for quality and design excellence.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-card/50 backdrop-blur transition-transform duration-200 hover:scale-102 shadow hover:shadow-lg">
            <CardHeader>
              <Truck className="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Fast Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Free shipping on all orders with express delivery options.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-card/50 backdrop-blur transition-transform duration-200 hover:scale-102 shadow hover:shadow-lg">
            <CardHeader>
              <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Secure Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your privacy and security are our top priorities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-card/50 backdrop-blur transition-transform duration-200 hover:scale-102 shadow hover:shadow-lg">
            <CardHeader>
              <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Customer First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Exceptional service and support for every customer.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In a world of excess, we believe in the power of less. Our store features products that embody 
            minimalist design principles - clean lines, functional beauty, and sustainable craftsmanship. 
            Each item tells a story of thoughtful creation and purposeful design.
          </p>
        </div>
      </div>
    </div>
  )
}