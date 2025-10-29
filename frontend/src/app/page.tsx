import Link from "next/link";
import { ShoppingBag, Truck, Shield, RefreshCw } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              The T Shirt Store
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Premium quality t-shirts and hoodies for the modern minimalist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our curated collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Half Sleeve */}
            <Link
              href="/products?category=half-sleeve"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-700 group-hover:text-black transition-colors" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Half Sleeve
                  </h3>
                  <p className="text-gray-600">5 Designs</p>
                </div>
              </div>
            </Link>

            {/* Full Sleeve */}
            <Link
              href="/products?category=full-sleeve"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-700 group-hover:text-black transition-colors" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Full Sleeve
                  </h3>
                  <p className="text-gray-600">5 Designs</p>
                </div>
              </div>
            </Link>

            {/* Hoodies */}
            <Link
              href="/products?category=hoodies"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-700 group-hover:text-black transition-colors" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Hoodies
                  </h3>
                  <p className="text-gray-600">5 Designs</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Truck className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders above ₹999</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure transactions</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <RefreshCw className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">7-day return policy</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <ShoppingBag className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">100% cotton fabric</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The T Shirt Store</h3>
              <p className="text-gray-400 text-sm">
                Premium quality clothing for the modern minimalist
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/products" className="hover:text-white">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=half-sleeve" className="hover:text-white">
                    Half Sleeve
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=full-sleeve" className="hover:text-white">
                    Full Sleeve
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=hoodies" className="hover:text-white">
                    Hoodies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 The T Shirt Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
