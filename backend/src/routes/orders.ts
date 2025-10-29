import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

// Simple Order Schema (lightweight for now)
const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customerInfo: {
    fullName: String,
    email: String,
    phone: String,
  },
  shippingAddress: {
    address: String,
    city: String,
    state: String,
    pincode: String,
  },
  items: [{
    id: String,
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    image: String,
  }],
  subtotal: Number,
  shipping: Number,
  total: Number,
  paymentMethod: String,
  paymentId: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

// @route   POST /api/orders
// @desc    Create new order
// @access  Public (for now)
router.post('/', async (req, res) => {
  try {
    const orderData = req.body;
    
    // Create order in MongoDB
    const order = new Order({
      orderId: orderData.orderId || `ORD${Date.now()}`,
      customerInfo: {
        fullName: orderData.shippingAddress?.fullName,
        email: orderData.shippingAddress?.email,
        phone: orderData.shippingAddress?.phone,
      },
      shippingAddress: {
        address: orderData.shippingAddress?.address,
        city: orderData.shippingAddress?.city,
        state: orderData.shippingAddress?.state,
        pincode: orderData.shippingAddress?.pincode,
      },
      items: orderData.items,
      subtotal: orderData.subtotal,
      shipping: orderData.shipping,
      total: orderData.total,
      paymentMethod: orderData.paymentMethod,
      paymentId: orderData.paymentId,
      status: orderData.status || 'pending',
    });

    await order.save();
    
    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      orderId: order.orderId,
      order: order
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message
    });
  }
});

// @route   GET /api/orders
// @desc    Get all orders
// @access  Public
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(100);
    
    res.json({ 
      success: true,
      count: orders.length,
      orders: orders
    });
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders'
    });
  }
});

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({ orderId: id });
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    res.json({
      success: true,
      order: order
    });
  } catch (error) {
    console.error('Fetch order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order'
    });
  }
});

export default router;