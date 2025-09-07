# Deployment Guide for Vercel

This guide will help you deploy the Aurum Delights application to Vercel.

## Prerequisites

1. A Vercel account (https://vercel.com)
2. All environment variables configured (see below)

## Environment Variables

Before deploying, you need to set up the following environment variables in your Vercel project:

```bash
# Public Environment Variables
NEXT_PUBLIC_CURRENCY=₹
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id

# Private Environment Variables
CLERK_SECRET_KEY=your_clerk_secret_key
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
NEXT_SERVER_ACTIONS_ENCRYPTION_KEY=your_encryption_key
```

## Deployment Steps

1. Push your code to a GitHub repository
2. Go to https://vercel.com/new
3. Select your repository
4. Configure the project:
   - Framework: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
5. Add all the environment variables listed above in the "Environment Variables" section
6. Click "Deploy"

## Post-Deployment

After deployment, verify that:
1. The homepage loads correctly
2. All navigation links work
3. Product pages display properly
4. Contact form functions
5. Gallery page displays images

## Troubleshooting

If you encounter issues:

1. Check that all environment variables are correctly set
2. Verify that your MongoDB connection string is correct
3. Ensure your Clerk credentials are valid
4. Check the Vercel logs for any build or runtime errors

## Notes

- The application is configured to work with Next.js 15.5.2
- Image optimization is enabled for WebP format
- React Strict Mode is enabled for better development practices
- Bundle compression is enabled for production