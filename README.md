# Microservices Final Project

This project contains three microservices for the Coursera Microservices Final Project assignment.

## Project Structure

```
serverless-guestbook/
├── product-details/          # Python Flask Microservice (Product Details)
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── dealer-pricing/          # Node.js Express Microservice (Dealer Pricing)
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── dealer-evaluation/       # Frontend Application (Dealer Evaluation)
│   ├── index.html
│   ├── app.js
│   └── Dockerfile
├── DEPLOYMENT_GUIDE.md      # Step-by-step deployment instructions
└── SUBMISSION_GUIDE.md      # What to submit for each question
```

## Microservices Overview

### 1. Product Details (Python Flask)
- **Port:** 8080
- **Endpoints:**
  - `GET /` - Service status
  - `GET /products` - Get all products
  - `GET /products/{id}` - Get specific product
  - `GET /health` - Health check

### 2. Dealer Pricing (Node.js Express)
- **Port:** 8080
- **Endpoints:**
  - `GET /` - Service status
  - `GET /dealers/{product_id}` - Get dealers for a product
  - `GET /pricing/{product_id}/{dealer_id}` - Get price for specific dealer
  - `GET /pricing/{product_id}` - Get all dealer prices for a product
  - `GET /health` - Health check

### 3. Dealer Evaluation (Frontend)
- **Port:** 8080
- **Technology:** HTML, JavaScript, Nginx
- **Features:**
  - Product selection dropdown
  - Dealer listing per product
  - Individual dealer pricing
  - All dealers pricing comparison

## Getting Started

### Prerequisites
- IBM Cloud CLI
- IBM Cloud account with Code Engine access
- Docker (for local testing)

### Deployment Instructions

See **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** for detailed step-by-step deployment instructions.

### Submission Instructions

See **[SUBMISSION_GUIDE.md](SUBMISSION_GUIDE.md)** for what to submit for each of the 9 questions.

## Quick Start for Local Testing

### Test Product Details (Python)
```bash
cd product-details
pip install -r requirements.txt
python app.py
```
Visit: http://localhost:8080/products

### Test Dealer Pricing (Node.js)
```bash
cd dealer-pricing
npm install
node app.js
```
Visit: http://localhost:8080/dealers/laptop

### Test Frontend
1. Update API URLs in `dealer-evaluation/app.js` to point to localhost
2. Open `dealer-evaluation/index.html` in a browser

## Sample Data

### Products
- Laptop
- Smartphone
- Headphones
- Tablet
- Smartwatch

### Dealers
- TechStore
- ElectroWorld
- ComputerZone
- MobileHub
- PhoneCenter
- AudioExpress

## Assignment Questions

This project addresses the following questions:
1. Deploy Product Details Microservice (Python)
2. Deploy Dealer Pricing Microservice (Node.js)
3. Git clone Dealer Evaluation Frontend
4. Update frontend with deployed API URLs
5. Deploy Dealer Evaluation Frontend
6. Screenshot of homepage with products
7. Screenshot of dealers for a product
8. Screenshot of dealer price for a product
9. Screenshot of all dealer prices for a product

## License

This project is for educational purposes only.