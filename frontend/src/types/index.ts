// User Types
export interface IAddress {
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'customer' | 'admin';
  phoneNumber?: string;
  dateOfBirth?: string;
  avatar?: string;
  isVerified: boolean;
  addresses: IAddress[];
  wishlist: string[];
  createdAt: string;
  updatedAt: string;
}

// Product Types
export interface IProductImage {
  url: string;
  alt: string;
  isMain: boolean;
}

export interface IProductVariant {
  name: string;
  value: string;
  price?: number;
  stock?: number;
  sku?: string;
}

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  comparePrice?: number;
  cost?: number;
  sku: string;
  barcode?: string;
  stock: number;
  lowStockThreshold: number;
  trackQuantity: boolean;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  category: string;
  categories: string[];
  tags: string[];
  images: IProductImage[];
  variants: IProductVariant[];
  attributes: Record<string, string>;
  isActive: boolean;
  isFeatured: boolean;
  averageRating: number;
  totalReviews: number;
  totalSales: number;
  seoTitle?: string;
  seoDescription?: string;
  metaTags?: string[];
  createdAt: string;
  updatedAt: string;
  // Virtual fields
  discountPercentage?: number;
  isAvailable?: boolean;
  isLowStock?: boolean;
}

// Category Types
export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentCategory?: string;
  subcategories: string[];
  isActive: boolean;
  sortOrder: number;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

// Cart Types
export interface ICartItem {
  product: string | IProduct;
  quantity: number;
  price: number;
  selectedVariants?: Record<string, string>;
}

export interface ICart {
  _id: string;
  user: string;
  items: ICartItem[];
  totalItems: number;
  subtotal: number;
  createdAt: string;
  updatedAt: string;
}

// Order Types
export interface IOrderItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  selectedVariants?: Record<string, string>;
  image?: string;
}

export interface IShippingAddress {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber?: string;
}

export interface IPaymentInfo {
  method: 'stripe' | 'paypal' | 'cash_on_delivery';
  transactionId?: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  amount: number;
  currency: string;
}

export interface IOrder {
  _id: string;
  orderNumber: string;
  user: string;
  items: IOrderItem[];
  shippingAddress: IShippingAddress;
  paymentInfo: IPaymentInfo;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  trackingNumber?: string;
  estimatedDelivery?: string;
  deliveredAt?: string;
  cancelledAt?: string;
  cancelReason?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Review Types
export interface IReview {
  _id: string;
  user: string | IUser;
  product: string;
  order: string;
  rating: number;
  title?: string;
  comment?: string;
  images?: string[];
  isVerified: boolean;
  isApproved: boolean;
  helpfulVotes: string[];
  reportedBy: string[];
  moderatorNotes?: string;
  createdAt: string;
  updatedAt: string;
  helpfulVotesCount?: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{
    field: string;
    message: string;
    value?: any;
  }>;
}

// Pagination Types
export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    items: T[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  message: string;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: IUser;
    token: string;
  };
}