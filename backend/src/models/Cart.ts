import mongoose, { Document, Schema } from 'mongoose';

export interface ICartItem {
  product: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
  selectedVariants?: Record<string, string>;
}

export interface ICart extends Document {
  user: mongoose.Types.ObjectId;
  items: ICartItem[];
  totalItems: number;
  subtotal: number;
  createdAt: Date;
  updatedAt: Date;
  calculateTotals(): void;
}

const cartItemSchema = new Schema<ICartItem>({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative'],
  },
  selectedVariants: {
    type: Map,
    of: String,
  },
});

const cartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    items: [cartItemSchema],
    totalItems: {
      type: Number,
      default: 0,
      min: [0, 'Total items cannot be negative'],
    },
    subtotal: {
      type: Number,
      default: 0,
      min: [0, 'Subtotal cannot be negative'],
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
cartSchema.index({ user: 1 });
cartSchema.index({ updatedAt: -1 });

// Pre-save middleware to calculate totals
cartSchema.pre('save', function (next) {
  this.calculateTotals();
  next();
});

// Instance method to calculate totals
cartSchema.methods.calculateTotals = function () {
  this.totalItems = this.items.reduce((total: number, item: ICartItem) => total + item.quantity, 0);
  this.subtotal = this.items.reduce((total: number, item: ICartItem) => total + (item.price * item.quantity), 0);
};

export const Cart = mongoose.model<ICart>('Cart', cartSchema);