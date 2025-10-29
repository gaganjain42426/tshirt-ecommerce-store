# Deployment Guide - The T Shirt Store

## 🚀 Quick Deploy Summary

### Frontend (Vercel) - FREE
- Deploy time: 3 minutes
- URL: your-store.vercel.app
- Custom domain: FREE

### Backend (Railway/Render) - FREE
- Deploy time: 5 minutes  
- 512MB RAM, 1GB Storage
- Automatic HTTPS

### Database (MongoDB Atlas) - FREE
- 512MB storage
- Shared cluster
- Deploy time: 2 minutes

---

## 📦 Part 1: Deploy Frontend to Vercel

### Step 1: Push Code to GitHub (if not already done)
```bash
cd frontend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/tshirtstore-frontend.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your frontend repository
4. Framework Preset: **Next.js**
5. Root Directory: `./` (or `frontend` if repo has both)
6. Environment Variables: *None needed for frontend*
7. Click **Deploy**

### Step 3: Update Backend URL (After backend deployed)
Add environment variable in Vercel:
- `NEXT_PUBLIC_API_URL` = `https://your-backend.railway.app`

---

## 🔧 Part 2: Deploy Backend to Railway

### Step 1: Push Backend to GitHub
```bash
cd backend
git init
git add .
git commit -m "Backend initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/tshirtstore-backend.git
git push -u origin main
```

### Step 2: Deploy on Railway
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your backend repository
4. Railway auto-detects Node.js

### Step 3: Add Environment Variables
In Railway dashboard, add these variables:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=<YOUR_MONGODB_ATLAS_URI>
JWT_SECRET=<GENERATE_RANDOM_STRING>
RAZORPAY_KEY_ID=rzp_test_RZ9Z7rJBgLUBWL
RAZORPAY_KEY_SECRET=EBcD12Z1DdwSmvUNGWuEG8UX
FRONTEND_URL=https://your-store.vercel.app
```

### Step 4: Get Railway URL
- Railway automatically generates URL: `https://your-app.railway.app`
- Copy this URL to update frontend `NEXT_PUBLIC_API_URL`

---

## 💾 Part 3: Setup MongoDB Atlas (FREE)

### Step 1: Create Account
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up for free
3. Choose **M0 FREE** tier

### Step 2: Create Cluster
1. Choose Cloud Provider: **AWS**
2. Region: Choose closest to your users
3. Cluster Name: `tshirtstore`
4. Click **Create Cluster** (takes 3-5 minutes)

### Step 3: Setup Database Access
1. Go to **Database Access**
2. Click **Add New Database User**
3. Username: `tshirtstore`
4. Password: Generate secure password
5. Database User Privileges: **Read and write to any database**
6. Click **Add User**

### Step 4: Setup Network Access
1. Go to **Network Access**
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (0.0.0.0/0)
   - For production, restrict to Railway IPs
4. Click **Confirm**

### Step 5: Get Connection String
1. Go to **Database** → Click **Connect**
2. Choose **Connect your application**
3. Copy connection string:
   ```
   mongodb+srv://tshirtstore:<password>@cluster0.xxxxx.mongodb.net/tshirtstore?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your actual password
5. Add this as `MONGODB_URI` in Railway environment variables

---

## 🔄 Alternative: Deploy Backend to Render

If you prefer Render over Railway:

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub

### Step 2: Deploy Web Service
1. Click **New +** → **Web Service**
2. Connect your backend repository
3. Settings:
   - **Name**: tshirtstore-backend
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

### Step 3: Add Environment Variables
Same as Railway, add all environment variables in Render dashboard.

---

## ✅ Verification Checklist

### Frontend (Vercel)
- [ ] Site loads at vercel.app URL
- [ ] Products page displays all 16 products
- [ ] Cart functionality works
- [ ] Images load correctly

### Backend (Railway/Render)
- [ ] Health check responds: `https://your-backend.railway.app/health`
- [ ] CORS allows frontend domain
- [ ] Orders API works: POST /api/orders

### Database (MongoDB Atlas)
- [ ] Connection successful from backend
- [ ] Orders collection created
- [ ] Data persists after page refresh

### Integration Test
1. Add product to cart
2. Proceed to checkout
3. Fill shipping address
4. Select payment method (COD for testing)
5. Place order
6. Verify order saved in MongoDB Atlas

---

## 🎯 Post-Deployment Steps

### 1. Update Frontend API URL
In Vercel environment variables:
```
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```
Redeploy frontend after adding this.

### 2. Update Backend CORS
In Railway environment variables:
```
FRONTEND_URL=https://your-store.vercel.app
```

### 3. Test Razorpay Integration
- Use test cards: 4111 1111 1111 1111
- Any future expiry date and CVV

### 4. Add Custom Domain (Optional)
- In Vercel: Settings → Domains → Add yourdomain.com
- Update DNS records as instructed
- Update FRONTEND_URL in backend

---

## 💰 Cost Breakdown

| Service | Plan | Cost | Resources |
|---------|------|------|-----------|
| Vercel | Hobby | **FREE** | Unlimited bandwidth, 100GB bandwidth |
| Railway | Free Tier | **$0/mo** | 512MB RAM, $5 credit/month |
| MongoDB Atlas | M0 | **FREE** | 512MB storage, Shared cluster |
| **TOTAL** | | **$0/month** | Perfect for starting! |

### When to Upgrade:
- **Traffic > 10k visitors/month**: Upgrade Railway to $5/mo
- **Database > 512MB**: Upgrade Atlas to M10 ($9/mo)
- **Custom features**: Keep Vercel free, it's generous!

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution**: Add frontend URL to backend CORS_ORIGIN env variable

### Issue: Database Connection Failed
**Solution**: 
1. Check MongoDB Atlas network access (0.0.0.0/0)
2. Verify connection string has correct password
3. Check database user permissions

### Issue: Images Not Loading
**Solution**: 
1. Verify Unsplash images domain in next.config.ts
2. Check AVIF images are in correct folder
3. Clear browser cache

### Issue: Payment Not Working
**Solution**:
1. Check Razorpay test keys are correct
2. Verify Razorpay script loaded (check console)
3. Use test card: 4111 1111 1111 1111

---

## 📱 Mobile Testing

After deployment, test on:
- iPhone Safari
- Android Chrome
- Tablet view
- Desktop (Chrome, Firefox, Safari, Edge)

---

## 🔐 Security Notes

### Before Going Live:
1. Change JWT_SECRET to random 64-character string
2. Restrict MongoDB Atlas IP access to Railway IPs
3. Switch Razorpay from test to live keys
4. Add rate limiting (already implemented in backend)
5. Enable HTTPS only (automatic on Vercel/Railway)

### Generate Secure JWT Secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📊 Monitoring

### Vercel Analytics (FREE)
- Enable in Vercel dashboard
- Track pageviews, performance

### Railway Logs
- View logs in Railway dashboard
- Monitor API requests

### MongoDB Atlas Monitoring
- View connection stats
- Monitor storage usage

---

## 🎉 Your Store is Live!

Frontend: `https://your-store.vercel.app`
Backend: `https://your-backend.railway.app`
Database: MongoDB Atlas

### Share Your Store:
- Add to portfolio
- Share on social media
- Get feedback from users

---

## 📞 Support

If you encounter issues:
1. Check deployment logs in Vercel/Railway
2. Verify all environment variables
3. Test backend health check endpoint
4. Check MongoDB Atlas connection

Happy Selling! 🎉👕
