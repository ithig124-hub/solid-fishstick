// All guides data stored locally
const GUIDES_DATA = [
    {
        \"id\": \"stripe-payment-integration\",
        \"title\": \"Stripe Payment Integration\",
        \"description\": \"Accept payments in your app with Stripe. Learn how to set up checkout sessions and handle webhooks.\",
        \"category\": \"Payments\",
        \"difficulty\": \"Intermediate\",
        \"setup_time\": \"30 minutes\",
        \"tags\": [\"stripe\", \"payments\", \"checkout\", \"webhooks\"],
        \"api_keys_needed\": [\"Stripe Secret Key\", \"Stripe Publishable Key\"],
        \"content\": \"# Stripe Payment Integration

## Overview
Stripe is the most popular payment processor for developers. This guide will help you integrate Stripe Checkout into your application.

## Prerequisites
- A Stripe account (sign up at stripe.com)
- Basic understanding of REST APIs

## Step 1: Install Stripe SDK

For Python:
pip install stripe

For JavaScript:
npm install @stripe/stripe-js

## Step 2: Get Your API Keys
1. Go to Stripe Dashboard
2. Navigate to Developers > API Keys
3. Copy your Secret Key and Publishable Key

## Step 3: Create Checkout Session
Create a backend endpoint that initializes a Stripe checkout session using your Secret Key.

## Step 4: Redirect to Checkout
Use the session ID to redirect users to Stripe's hosted checkout page.

## Common Pitfalls
- Don't expose your Secret Key - keep it on backend only
- Always verify webhook signatures
- Test with test mode first before going live\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"openai-gpt-integration\",
        \"title\": \"OpenAI GPT Integration\",
        \"description\": \"Add AI-powered text generation to your app using OpenAI's GPT models.\",
        \"category\": \"AI Integration\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"15 minutes\",
        \"tags\": [\"openai\", \"gpt\", \"ai\", \"chatbot\"],
        \"api_keys_needed\": [\"OpenAI API Key\"],
        \"content\": \"# OpenAI GPT Integration

## Overview
Integrate powerful AI language models into your application with OpenAI's API.

## Step 1: Get Your API Key
1. Create an account at openai.com
2. Go to API Keys section
3. Generate a new secret key

## Step 2: Install SDK
Python: pip install openai
Node.js: npm install openai

## Best Practices
- Set reasonable token limits to control costs
- Implement rate limiting on your endpoints
- Cache responses when possible
- Use streaming for better UX on long responses

## Common Use Cases
- Chatbots and virtual assistants
- Content generation
- Code assistance
- Summarization\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"vercel-deployment\",
        \"title\": \"Deploy to Vercel\",
        \"description\": \"Deploy your web app to Vercel with automatic HTTPS, CDN, and zero configuration.\",
        \"category\": \"Deployment\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"10 minutes\",
        \"tags\": [\"vercel\", \"deployment\", \"hosting\", \"ci-cd\"],
        \"api_keys_needed\": [],
        \"content\": \"# Deploy to Vercel

## Overview
Vercel offers the easiest way to deploy modern web applications with instant deployments.

## Step 1: Install Vercel CLI
npm install -g vercel

## Step 2: Login
vercel login

## Step 3: Deploy
Navigate to your project and run: vercel

## GitHub Integration
1. Connect GitHub account on vercel.com
2. Import your repository
3. Auto-deploy on every push to main

## Custom Domains
1. Go to project settings
2. Navigate to Domains
3. Add custom domain
4. Update DNS settings\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"firebase-auth\",
        \"title\": \"Firebase Authentication\",
        \"description\": \"Add secure user authentication with email/password, Google, and social login providers.\",
        \"category\": \"Authentication\",
        \"difficulty\": \"Intermediate\",
        \"setup_time\": \"25 minutes\",
        \"tags\": [\"firebase\", \"auth\", \"login\", \"oauth\"],
        \"api_keys_needed\": [\"Firebase Config Object\"],
        \"content\": \"# Firebase Authentication

## Overview
Firebase Authentication provides backend services to authenticate users.

## Step 1: Create Firebase Project
1. Go to console.firebase.google.com
2. Click Add Project
3. Follow setup wizard

## Step 2: Enable Auth Methods
1. Go to Authentication
2. Click Sign-in method
3. Enable Email/Password and Google

## Step 3: Install SDK
npm install firebase

## Features
- Email/password authentication
- Google Sign-In
- Phone authentication
- Password reset
- Email verification\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"mongodb-setup\",
        \"title\": \"MongoDB Database Setup\",
        \"description\": \"Set up MongoDB for your application with best practices for schema design and queries.\",
        \"category\": \"Storage & Databases\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"20 minutes\",
        \"tags\": [\"mongodb\", \"database\", \"nosql\"],
        \"api_keys_needed\": [\"MongoDB Connection String\"],
        \"content\": \"# MongoDB Database Setup

## Overview
MongoDB is a popular NoSQL database perfect for modern applications.

## Step 1: Create MongoDB Atlas Account
1. Go to mongodb.com/cloud/atlas
2. Sign up for free tier
3. Create a new cluster

## Step 2: Configure Network Access
1. Go to Network Access
2. Add your IP address

## Step 3: Create Database User
1. Go to Database Access
2. Add new database user
3. Set username and password

## Step 4: Get Connection String
1. Click Connect on your cluster
2. Choose Connect your application
3. Copy connection string

## Best Practices
- Use indexes for frequently queried fields
- Don't embed documents deeper than 3 levels
- Implement proper error handling\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"sendgrid-email\",
        \"title\": \"SendGrid Email Integration\",
        \"description\": \"Send transactional and marketing emails with SendGrid's reliable email API.\",
        \"category\": \"Email/SMS\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"15 minutes\",
        \"tags\": [\"sendgrid\", \"email\", \"transactional\"],
        \"api_keys_needed\": [\"SendGrid API Key\"],
        \"content\": \"# SendGrid Email Integration

## Overview
SendGrid makes it easy to send emails from your application.

## Step 1: Create SendGrid Account
1. Sign up at sendgrid.com
2. Verify your email

## Step 2: Create API Key
1. Go to Settings > API Keys
2. Create API Key with Full Access
3. Copy and save your key

## Step 3: Verify Sender
1. Go to Sender Authentication
2. Verify single sender email OR
3. Authenticate domain (production)

## Common Use Cases
- Welcome emails
- Password resets
- Order confirmations
- Newsletters\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"twilio-sms\",
        \"title\": \"Twilio SMS Integration\",
        \"description\": \"Send SMS notifications and verification codes using Twilio's messaging API.\",
        \"category\": \"Email/SMS\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"20 minutes\",
        \"tags\": [\"twilio\", \"sms\", \"notifications\"],
        \"api_keys_needed\": [\"Twilio Account SID\", \"Twilio Auth Token\", \"Twilio Phone Number\"],
        \"content\": \"# Twilio SMS Integration

## Overview
Twilio provides a simple API for sending SMS messages.

## Step 1: Create Twilio Account
1. Sign up at twilio.com
2. Complete phone verification

## Step 2: Get Phone Number
1. Go to Phone Numbers > Buy a number
2. Choose SMS-capable number
3. Purchase (free trial includes credits)

## Step 3: Get Credentials
1. Go to Console Dashboard
2. Copy Account SID
3. Copy Auth Token

## Use Cases
- Two-factor authentication
- Order notifications
- Appointment reminders
- Verification codes\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"railway-deployment\",
        \"title\": \"Deploy to Railway\",
        \"description\": \"Deploy full-stack applications with databases on Railway with automatic deployments.\",
        \"category\": \"Deployment\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"15 minutes\",
        \"tags\": [\"railway\", \"deployment\", \"postgres\", \"docker\"],
        \"api_keys_needed\": [],
        \"content\": \"# Deploy to Railway

## Overview
Railway makes it easy to deploy full-stack applications with built-in database support.

## Step 1: Create Account
1. Go to railway.app
2. Sign up with GitHub

## Step 2: Create Project
1. Click New Project
2. Deploy from GitHub repo
3. Select your repository

## Step 3: Add Database
1. Click New > Database
2. Choose PostgreSQL, MongoDB, etc.
3. Railway creates connection variables

## Features
- Automatic deployments on git push
- Built-in databases
- Custom domains
- Environment variables\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"jwt-authentication\",
        \"title\": \"JWT Authentication\",
        \"description\": \"Implement secure token-based authentication using JSON Web Tokens.\",
        \"category\": \"Authentication\",
        \"difficulty\": \"Intermediate\",
        \"setup_time\": \"30 minutes\",
        \"tags\": [\"jwt\", \"auth\", \"security\", \"tokens\"],
        \"api_keys_needed\": [],
        \"content\": \"# JWT Authentication

## Overview
JSON Web Tokens provide stateless authentication for modern applications.

## How JWT Works
1. User logs in with credentials
2. Server validates and generates JWT
3. Client stores token
4. Client sends token with each request
5. Server validates token

## JWT Structure
- Header: Algorithm and token type
- Payload: User data and claims
- Signature: Verifies integrity

## Security Best Practices
- Use HTTPS only
- Set short expiration times
- Implement refresh tokens
- Store tokens securely
- Use strong secret keys\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"claude-ai-integration\",
        \"title\": \"Anthropic Claude AI Integration\",
        \"description\": \"Integrate Claude AI for advanced conversational AI and text analysis.\",
        \"category\": \"AI Integration\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"15 minutes\",
        \"tags\": [\"claude\", \"anthropic\", \"ai\", \"llm\"],
        \"api_keys_needed\": [\"Anthropic API Key\"],
        \"content\": \"# Anthropic Claude AI Integration

## Overview
Claude is Anthropic's AI assistant, known for being helpful, harmless, and honest.

## Step 1: Get API Access
1. Go to console.anthropic.com
2. Sign up for API access
3. Generate API key

## Step 2: Install SDK
Python: pip install anthropic
Node.js: npm install @anthropic-ai/sdk

## Features
- Long context windows (up to 200K tokens)
- Strong instruction following
- Excellent at analysis
- Safe and aligned responses

## Best Use Cases
- Complex reasoning tasks
- Long document analysis
- Code review
- Research assistance\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"razorpay-integration\",
        \"title\": \"Razorpay Payment Integration\",
        \"description\": \"Accept payments in India with Razorpay. Perfect for Indian startups.\",
        \"category\": \"Payments\",
        \"difficulty\": \"Intermediate\",
        \"setup_time\": \"25 minutes\",
        \"tags\": [\"razorpay\", \"payments\", \"india\", \"upi\"],
        \"api_keys_needed\": [\"Razorpay Key ID\", \"Razorpay Key Secret\"],
        \"content\": \"# Razorpay Payment Integration

## Overview
Razorpay is India's leading payment gateway supporting UPI, cards, wallets.

## Step 1: Create Account
1. Sign up at razorpay.com
2. Complete KYC verification

## Step 2: Get API Keys
1. Go to Settings > API Keys
2. Generate Test Keys for development
3. Generate Live Keys for production

## Payment Methods
- UPI (Google Pay, PhonePe, Paytm)
- Credit/Debit Cards
- Net Banking
- Wallets

## Features
- Instant refunds
- Subscription billing
- Payment links
- QR codes\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"gemini-image-generation\",
        \"title\": \"Google Gemini Image Generation\",
        \"description\": \"Generate images with Google's Gemini Nano Banana model.\",
        \"category\": \"Image Generation\",
        \"difficulty\": \"Intermediate\",
        \"setup_time\": \"20 minutes\",
        \"tags\": [\"gemini\", \"image-generation\", \"ai\", \"google\"],
        \"api_keys_needed\": [\"Google AI API Key\"],
        \"content\": \"# Google Gemini Image Generation

## Overview
Generate stunning images using Google's Gemini Nano Banana model.

## Step 1: Get API Key
1. Go to makersuite.google.com/app/apikey
2. Create new API key
3. Copy and save securely

## Step 2: Install SDK
Python: pip install google-generativeai
Node.js: npm install @google/generative-ai

## Best Practices
- Write detailed prompts
- Specify style preferences
- Include lighting details
- Iterate on prompts

## Use Cases
- Product mockups
- Social media graphics
- Blog illustrations
- Concept art\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"postgresql-setup\",
        \"title\": \"PostgreSQL Database Setup\",
        \"description\": \"Set up PostgreSQL for robust relational data with ACID compliance.\",
        \"category\": \"Storage & Databases\",
        \"difficulty\": \"Intermediate\",
        \"setup_time\": \"25 minutes\",
        \"tags\": [\"postgresql\", \"sql\", \"database\", \"relational\"],
        \"api_keys_needed\": [],
        \"content\": \"# PostgreSQL Database Setup

## Overview
PostgreSQL is a powerful open-source relational database.

## Option 1: Local Installation
macOS: brew install postgresql
Ubuntu: sudo apt install postgresql

## Option 2: Cloud Hosting
- Supabase (free tier)
- Railway
- AWS RDS

## Creating Tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Best Practices
- Use indexes on queried columns
- Implement foreign keys
- Use transactions
- Regular backups\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    },
    {
        \"id\": \"resend-email\",
        \"title\": \"Resend Email Integration\",
        \"description\": \"Modern email API built for developers. Send emails with React components.\",
        \"category\": \"Email/SMS\",
        \"difficulty\": \"Beginner\",
        \"setup_time\": \"10 minutes\",
        \"tags\": [\"resend\", \"email\", \"react\", \"transactional\"],
        \"api_keys_needed\": [\"Resend API Key\"],
        \"content\": \"# Resend Email Integration

## Overview
Resend is a modern email API with React email templates.

## Step 1: Create Account
1. Go to resend.com
2. Sign up free (100 emails/day)

## Step 2: Get API Key
1. Go to API Keys
2. Create new API key
3. Copy and save

## Step 3: Verify Domain
For production:
1. Add domain in dashboard
2. Add DNS records
3. Wait for verification

## Why Resend?
- React email templates
- Built-in testing
- Great deliverability
- Developer-friendly API\",
        \"code_snippets\": [],
        \"views\": 0,
        \"helpful_votes\": 0
    }
];

// Store view counts and votes in localStorage
function getLocalStats() {
    const stored = localStorage.getItem('guidesStats');
    return stored ? JSON.parse(stored) : {};
}

function saveLocalStats(stats) {
    localStorage.setItem('guidesStats', JSON.stringify(stats));
}

function incrementView(guideId) {
    const stats = getLocalStats();
    if (!stats[guideId]) {
        stats[guideId] = { views: 0, helpful_votes: 0 };
    }
    stats[guideId].views++;
    saveLocalStats(stats);
}

function incrementHelpful(guideId) {
    const stats = getLocalStats();
    if (!stats[guideId]) {
        stats[guideId] = { views: 0, helpful_votes: 0 };
    }
    stats[guideId].helpful_votes++;
    saveLocalStats(stats);
}

function getGuideStats(guideId) {
    const stats = getLocalStats();
    return stats[guideId] || { views: 0, helpful_votes: 0 };
}

// Get all guides with stats
function getAllGuides() {
    const stats = getLocalStats();
    return GUIDES_DATA.map(guide => {
        const guideStats = stats[guide.id] || { views: 0, helpful_votes: 0 };
        return {
            ...guide,
            views: guideStats.views,
            helpful_votes: guideStats.helpful_votes
        };
    });
}

// Get guide by ID
function getGuideById(id) {
    const guide = GUIDES_DATA.find(g => g.id === id);
    if (!guide) return null;
    
    const stats = getGuideStats(id);
    return {
        ...guide,
        views: stats.views,
        helpful_votes: stats.helpful_votes
    };
}

// Get categories
function getCategories() {
    const categoryCounts = {};
    GUIDES_DATA.forEach(guide => {
        categoryCounts[guide.category] = (categoryCounts[guide.category] || 0) + 1;
    });
    
    return Object.entries(categoryCounts).map(([name, count]) => ({
        name,
        count
    }));
}

// Get stats
function getStats() {
    const guides = getAllGuides();
    const totalViews = guides.reduce((sum, g) => sum + g.views, 0);
    const popular = guides.sort((a, b) => b.views - a.views).slice(0, 5);
    
    return {
        total_guides: guides.length,
        total_views: totalViews,
        popular_guides: popular
    };
}

// Export for use in other files
window.GuidesDB = {
    getAllGuides,
    getGuideById,
    getCategories,
    getStats,
    incrementView,
    incrementHelpful
};
