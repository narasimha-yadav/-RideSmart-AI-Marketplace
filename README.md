# 🚀 RideSmart-AI-Marketplace

## 📌 Problem Statement  
**Chosen Problem:** HACXPB003 – Build a two-wheeler marketplace web app  

Two-wheeler buying and selling today is fragmented, with buyers overwhelmed by choices and lack of personalization, while dealers struggle with inventory and pricing. Existing platforms act primarily as listing portals without intelligent decision support or transparent pricing.  

---

## 💡 Proposal & Prototype Plan  

**RideSmart-AI-Marketplace** is a web platform where users can **discover, compare, and transact on bikes, scooters, and EVs**.  
The prototype integrates both **mandatory marketplace features** and **AI-powered enhancements**.  

**Plan of Action:**  
- Build the **frontend** with React.js for a responsive, user-friendly interface.  
- Implement the **backend** with Node.js/Express for listings, search, bookings, and dealer dashboards.  
- Use **PostgreSQL** for structured data (vehicles, users) and **MongoDB** for semi-structured data (inventory, logs).  
- Develop **AI microservices**:  
  - Used Bike Price Estimator (regression model – XGBoost/Random Forest).  
  - Recommendation Engine (hybrid filtering for personalized suggestions).  
- Deploy using **AWS EC2/Heroku for backend & AI**, **Vercel/Netlify for frontend**, and **AWS RDS/MongoDB Atlas for databases**.  

---

## ✨ Features to be Implemented  

### Core Features (Required)  
- Vehicle listings with images, prices, and specifications  
- Search and filters (brand, price, fuel type, mileage, etc.)  
- Product detail pages with offers  
- Side-by-side vehicle comparison  
- EMI and fuel cost calculators  
- Buy/sell used bikes  
- Showroom directory with test ride booking  
- Upcoming vehicle launches  

### AI-Enhanced Features (Optional)  
- AI-powered recommendation engine for personalized vehicle suggestions  
- AI-based used bike price estimator for transparent resale pricing  
- User accounts with favorites  
- Reviews and ratings  
- Price alerts  
- Dealer dashboard for inventory management  

---

## 🛠️ Tech Stack  

- **Frontend:** React.js (hosted on Vercel/Netlify)  
- **Backend:** Node.js with Express (hosted on AWS EC2/Heroku)  
- **Database:** PostgreSQL (RDS) and MongoDB (Atlas)  
- **ML/AI Frameworks:** Scikit-learn, XGBoost, TensorFlow / PyTorch  
- **APIs & Tools:** REST APIs, Google Maps API, Chart.js, OpenAI API  

---

## 👥 Team Contributions  

- **Narasimha** – Backend APIs, database integration, EMI & fuel cost calculators  
- **Adarsh** – Frontend development (React.js), UI/UX design, test ride booking module  
- **Anshitha** – AI microservices (price estimator & recommendation engine), ML model training  
- **Ramya** – Data handling and preprocessing, deployment setup (AWS/Netlify), documentation
- **Aakhil** - QA, Testing, User Validation

---
