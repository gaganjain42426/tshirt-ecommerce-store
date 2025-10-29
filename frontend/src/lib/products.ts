// Product data for The T Shirt Store

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'half-sleeve' | 'full-sleeve' | 'hoodies';
  price: number;
  comparePrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  colors?: string[];
  inStock: boolean;
  featured: boolean;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  // Half Sleeve T-Shirts (6 products)
  {
    id: '1',
    name: 'Classic Black Half Sleeve Tee',
    slug: 'classic-black-half-sleeve-tee',
    category: 'half-sleeve',
    price: 499,
    comparePrice: 799,
    description: 'Premium 100% cotton half sleeve t-shirt in classic black. Perfect for everyday wear with a modern minimal design.',
    images: ['/images/products/half-sleeve/half-sleeve-1.avif'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '2',
    name: 'Minimal White Half Sleeve Tee',
    slug: 'minimal-white-half-sleeve-tee',
    category: 'half-sleeve',
    price: 449,
    comparePrice: 699,
    description: 'Clean and minimal white half sleeve t-shirt. Soft, breathable fabric for maximum comfort.',
    images: ['/images/products/half-sleeve/half-sleeve-2.avif'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 132,
  },
  {
    id: '3',
    name: 'Graphic Print Half Sleeve Tee',
    slug: 'graphic-print-half-sleeve-tee',
    category: 'half-sleeve',
    price: 599,
    comparePrice: 899,
    description: 'Trendy graphic print half sleeve t-shirt. Stand out with this unique design.',
    images: ['/images/products/half-sleeve/half-sleeve-3.avif'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 98,
  },
  {
    id: '4',
    name: 'Urban Style Half Sleeve Tee',
    slug: 'urban-style-half-sleeve-tee',
    category: 'half-sleeve',
    price: 549,
    comparePrice: 799,
    description: 'Modern urban style half sleeve t-shirt. Perfect for casual outings.',
    images: ['/images/products/half-sleeve/half-sleeve-4.avif'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 87,
  },
  {
    id: '5',
    name: 'Premium Cotton Half Sleeve Tee',
    slug: 'premium-cotton-half-sleeve-tee',
    category: 'half-sleeve',
    price: 649,
    comparePrice: 999,
    description: 'Premium quality cotton half sleeve t-shirt. Luxury comfort at an affordable price.',
    images: ['/images/products/half-sleeve/half-sleeve-5.avif'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 201,
  },
  {
    id: '6',
    name: 'Sporty Half Sleeve Tee',
    slug: 'sporty-half-sleeve-tee',
    category: 'half-sleeve',
    price: 499,
    comparePrice: 749,
    description: 'Athletic fit half sleeve t-shirt. Perfect for workouts and active lifestyle.',
    images: ['/images/products/half-sleeve/half-sleeve-6.avif'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 76,
  },

  // Full Sleeve T-Shirts (5 products)
  {
    id: '7',
    name: 'Classic White Full Sleeve',
    slug: 'classic-white-full-sleeve',
    category: 'full-sleeve',
    price: 799,
    comparePrice: 1099,
    description: 'Premium white full sleeve t-shirt for all seasons. Perfect for layering or wearing alone.',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 143,
  },
  {
    id: '8',
    name: 'Essential Black Full Sleeve',
    slug: 'essential-black-full-sleeve',
    category: 'full-sleeve',
    price: 799,
    comparePrice: 1099,
    description: 'Comfortable black full sleeve tee for everyday wear. A wardrobe essential.',
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 167,
  },
  {
    id: '9',
    name: 'Navy Blue Full Sleeve',
    slug: 'navy-blue-full-sleeve',
    category: 'full-sleeve',
    price: 849,
    comparePrice: 1149,
    description: 'Stylish navy blue full sleeve t-shirt with ribbed cuffs. Perfect for smart casual look.',
    images: ['https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy'],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 102,
  },
  {
    id: '10',
    name: 'Grey Henley Full Sleeve',
    slug: 'grey-henley-full-sleeve',
    category: 'full-sleeve',
    price: 899,
    comparePrice: 1249,
    description: 'Classic grey henley style full sleeve t-shirt with button placket.',
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 89,
  },
  {
    id: '11',
    name: 'Maroon Full Sleeve Polo',
    slug: 'maroon-full-sleeve-polo',
    category: 'full-sleeve',
    price: 949,
    comparePrice: 1349,
    description: 'Elegant maroon full sleeve polo style t-shirt for a refined look.',
    images: ['https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Maroon'],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 67,
  },

  // Hoodies (5 products)
  {
    id: '12',
    name: 'Black Premium Zip Hoodie',
    slug: 'black-premium-zip-hoodie',
    category: 'hoodies',
    price: 1499,
    comparePrice: 1999,
    description: 'Premium black zip hoodie with fleece lining. Perfect for cold weather.',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 234,
  },
  {
    id: '13',
    name: 'Grey Pullover Hoodie',
    slug: 'grey-pullover-hoodie',
    category: 'hoodies',
    price: 1399,
    comparePrice: 1899,
    description: 'Comfortable grey pullover hoodie with kangaroo pocket. Perfect for winter.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 178,
  },
  {
    id: '14',
    name: 'Navy Blue Hoodie',
    slug: 'navy-blue-hoodie',
    category: 'hoodies',
    price: 1299,
    comparePrice: 1699,
    description: 'Classic navy blue hoodie with drawstring hood. Comfortable and stylish.',
    images: ['https://images.unsplash.com/photo-1620799140783-bb3f04ba09b7?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 145,
  },
  {
    id: '15',
    name: 'Olive Green Hoodie',
    slug: 'olive-green-hoodie',
    category: 'hoodies',
    price: 1399,
    comparePrice: 1799,
    description: 'Trendy olive green hoodie with soft fleece interior. Stand out from the crowd.',
    images: ['https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Olive'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 112,
  },
  {
    id: '16',
    name: 'White Premium Hoodie',
    slug: 'white-premium-hoodie',
    category: 'hoodies',
    price: 1599,
    comparePrice: 2099,
    description: 'Premium white hoodie with soft cotton blend. Luxury comfort for everyday wear.',
    images: ['https://images.unsplash.com/photo-1620799139834-6b8f844fbe0f?w=500&h=500&fit=crop&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 198,
  },
];

// Helper functions
export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category && p.inStock);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured && p.inStock);
};

export const getAllProducts = () => {
  return products.filter(p => p.inStock);
};