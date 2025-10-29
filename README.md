# Demo E-Commerce Website

# 👕 The T Shirt Store - Full Stack E-Commerce Website

A modern, minimal, and sleek e-commerce platform built with Next.js, Express, and MongoDB. Features a complete shopping experience with cart management, checkout flow, and Razorpay payment integration.

![Status](https://img.shields.io/badge/status-production%20ready-success)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)

## ✨ Features

### 🛍️ Shopping Experience
- **16 Products** across 3 categories (Half-Sleeve, Full-Sleeve, Hoodies)
- **Product Details** with image gallery, size selection, ratings & reviews
- **Advanced Filters** - Search, category, size, price range filters
- **Smart Sorting** - By price, name, or featured products
- **Responsive Design** - Mobile-first, works on all devices

### 🛒 Cart & Checkout
- **Shopping Cart** with size selection and quantity controls
- **Local Storage** persistence - cart survives page refresh
- **Live Cart Counter** in header
- **Shipping Calculator** - Free shipping above ₹1000
- **Order Summary** with subtotal, shipping, and total

### 💳 Payment Integration
- **Razorpay** test mode integration
- **COD (Cash on Delivery)** option
- **Secure Checkout** with address validation
- **Order Confirmation** page with tracking timeline
- **Backend API** for order storage

---

## 🚀 Tech Stack

**Frontend:** Next.js 16 · TypeScript · Tailwind CSS · React Context  
**Backend:** Node.js · Express · MongoDB · JWT  
**Payments:** Razorpay SDK  
**Deployment:** Vercel (Frontend) · Railway (Backend) · MongoDB Atlas  

---

## 🏃 Running Locally

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### Backend
```bash
cd backend
npm install
npm run dev
# Runs on http://localhost:5000
```

---

## 📦 Product Catalog

| Category | Count | Price Range |
|----------|-------|-------------|
| Half-Sleeve | 6 | ₹449 - ₹649 |
| Full-Sleeve | 5 | ₹799 - ₹949 |
| Hoodies | 5 | ₹1299 - ₹1599 |
| **Total** | **16** | **All sizes S-XXL** |

---

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide.

**Quick Deploy:** Frontend (Vercel) + Backend (Railway) + Database (MongoDB Atlas) = $0/month

---

## 🧪 Test Payment

**Razorpay Test Card:** 4111 1111 1111 1111  
**Expiry:** Any future date | **CVV:** Any 3 digits

---

**⭐ Star this repo if you found it helpful!**

## Tech Stack

### Frontend
- **React 18** with Next.js 14
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Context API** for state management
- **React Hook Form** for form handling
- **React Query** for data fetching

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Multer** for file uploads
- **Nodemailer** for email notifications

### Additional Services
- **Stripe** for payment processing
- **Cloudinary** for image storage
- **Node-cron** for scheduled tasks

## Project Structure

```
Demo_Ecom/
├── frontend/          # Next.js React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Next.js pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # TypeScript type definitions
│   │   └── styles/        # Global styles
│   ├── public/            # Static assets
│   └── package.json
├── backend/           # Express.js API server
│   ├── src/
│   │   ├── controllers/   # Route handlers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── utils/         # Utility functions
│   │   └── types/         # TypeScript type definitions
│   ├── uploads/           # File uploads directory
│   └── package.json
└── README.md
```

## Features

### User Features
- ✅ User registration and authentication
- ✅ Product browsing with search and filters
- ✅ Shopping cart management
- ✅ Secure checkout process
- ✅ Order tracking and history
- ✅ Product reviews and ratings
- ✅ User profile management
- ✅ Wishlist functionality

### Admin Features
- ✅ Product management (CRUD operations)
- ✅ Category management
- ✅ Order management and tracking
- ✅ User management
- ✅ Analytics dashboard
- ✅ Inventory management

### Technical Features
- ✅ Responsive design (mobile-first)
- ✅ Progressive Web App (PWA)
- ✅ Image optimization and lazy loading
- ✅ SEO optimization
- ✅ Security best practices
- ✅ Performance optimization
- ✅ Automated testing
- ✅ CI/CD pipeline

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Demo_Ecom
```

2. Setup Backend
```bash
cd backend
npm install
npm run dev
```

3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

4. Environment Variables
Create `.env` files in both frontend and backend directories with the required variables (see `.env.example` files).

## Development Commands

### Backend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.