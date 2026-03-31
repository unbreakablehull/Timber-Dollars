# Housing Insights Platform

A modern, futuristic real estate analytics platform built with React and Node.js.

## Features

- 🏠 **Real-time Market Data**: Access up-to-the-minute housing market trends
- 📊 **Interactive Analytics**: Advanced data visualization with charts and graphs
- 🔐 **User Authentication**: Secure login system with premium access tiers
- 📰 **Interactive Articles**: Rich content with embedded data visualizations
- 🚀 **Modern UI**: Futuristic glass-morphism design with smooth animations
- 🔄 **Lead Integration**: Automatic Follow Up Boss integration for lead capture

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- Recharts for data visualization
- Lucide React for icons
- React Router for navigation

### Backend
- Node.js with Express
- Supabase for database and auth
- JWT for authentication
- Follow Up Boss API integration
- CORS and security middleware

## Project Structure

```
housing-insights-platform/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts (Auth)
│   │   ├── pages/           # Route components
│   │   ├── utils/           # Utility functions
│   │   └── main.jsx         # App entry point
│   ├── public/              # Static assets
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── routes/              # API route handlers
│   ├── middleware/          # Custom middleware
│   ├── config/              # Configuration files
│   ├── utils/               # Utility functions
│   └── server.js            # Server entry point
└── render.yaml              # Render deployment config
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Follow Up Boss account (optional)

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Frontend (.env)**
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:5000/api
```

**Backend (.env)**
```
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
JWT_SECRET=your_jwt_secret
FOLLOWUP_BOSS_API_KEY=your_followup_boss_api_key
FOLLOWUP_BOSS_SYSTEM=your_system_name
```

### Installation

1. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```

4. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  name VARCHAR,
  phone VARCHAR,
  subscription_tier VARCHAR DEFAULT 'free',
  subscription_start TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Articles Table
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category VARCHAR,
  premium_only BOOLEAN DEFAULT false,
  interactive_data JSONB,
  author_id UUID REFERENCES users(id),
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Market Trends Table
```sql
CREATE TABLE market_trends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location VARCHAR NOT NULL,
  date DATE NOT NULL,
  median_price DECIMAL,
  yoy_change DECIMAL,
  inventory_level VARCHAR,
  days_on_market INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Deployment

This project is configured for deployment on Render using the included `render.yaml` file.

### Deploy to Render

1. **Connect your repository** to Render
2. **Set environment variables** in the Render dashboard
3. **Deploy** using the render.yaml configuration

The application will be automatically deployed with:
- Backend API as a web service
- Frontend as a static site
- Automatic builds on git push

## Features Overview

### Authentication System
- User registration and login
- JWT-based authentication
- Premium access tiers
- Automatic Follow Up Boss lead capture

### Article System
- Rich text articles with interactive data
- Premium content access control
- Category filtering and search
- Embedded data visualizations

### Analytics Dashboard
- Real-time market metrics
- Interactive charts and graphs
- Location-based filtering
- Premium analytics features

### Premium Features
- Advanced market analytics
- Interactive data visualizations
- Data export capabilities
- Priority support access

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Articles
- `GET /api/articles` - List articles
- `GET /api/articles/:id` - Get article details

### Data
- `GET /api/data/market-trends` - Market trend data
- `GET /api/data/analytics` - Analytics data (auth required)

### Subscriptions
- `GET /api/subscriptions/plans` - Available plans
- `GET /api/subscriptions/status` - User subscription status

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.