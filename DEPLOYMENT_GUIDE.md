# Microservices Project - Deployment and Submission Guide

## Project Structure

Your project now has three microservices:

1. **product-details/** - Python Flask microservice (Product Details)
2. **dealer-pricing/** - Node.js Express microservice (Dealer Pricing)
3. **dealer-evaluation/** - Frontend HTML/JS application (Dealer Evaluation)

---

## Step-by-Step Deployment Instructions

### Step 1: Deploy Product Details Microservice (Python)

**Location:** `product-details/` folder

**Files:**
- app.py
- requirements.txt
- Dockerfile

**Deployment Steps on IBM Cloud Code Engine:**

1. Navigate to the `product-details` folder:
   ```bash
   cd product-details
   ```

2. Build and push the Docker image to IBM Cloud Container Registry:
   ```bash
   ibmcloud cr build -t <your-registry-namespace>/product-details:latest .
   ```

3. Deploy to Code Engine:
   ```bash
   ibmcloud ce application create --name product-details --image <your-registry-namespace>/product-details:latest --port 8080
   ```

4. Get the application URL:
   ```bash
   ibmcloud ce application get --name product-details
   ```

**Screenshot for Question 1:**
- Take a screenshot showing the successful deployment of the Product Details microservice
- Save as: `product_details_deploy.png` or `product_details_deploy.jpeg`

---

### Step 2: Deploy Dealer Pricing Microservice (Node.js)

**Location:** `dealer-pricing/` folder

**Files:**
- app.js
- package.json
- Dockerfile

**Deployment Steps on IBM Cloud Code Engine:**

1. Navigate to the `dealer-pricing` folder:
   ```bash
   cd dealer-pricing
   ```

2. Build and push the Docker image:
   ```bash
   ibmcloud cr build -t <your-registry-namespace>/dealer-pricing:latest .
   ```

3. Deploy to Code Engine:
   ```bash
   ibmcloud ce application create --name dealer-pricing --image <your-registry-namespace>/dealer-pricing:latest --port 8080
   ```

4. Get the application URL:
   ```bash
   ibmcloud ce application get --name dealer-pricing
   ```

**Screenshot for Question 2:**
- Take a screenshot showing the successful deployment of the Dealer Pricing microservice
- Save as: `dealer_details_deploy.png` or `dealer_details_deploy.jpeg`

---

### Step 3: Clone Dealer Evaluation Frontend

**Option A: Use the Local Frontend (Recommended)**

Since you already have the frontend created locally in the `dealer-evaluation/` folder, you can use that instead of cloning from Git. However, if the assignment requires cloning from a specific Git URL, you should:

**Option B: Clone from Git (if required by assignment)**

1. Navigate to a different directory:
   ```bash
   cd ..
   mkdir frontend-repo
   cd frontend-repo
   ```

2. Clone the repository (replace with the actual Git URL provided in your assignment):
   ```bash
   git clone <GIT_URL_PROVIDED_IN_ASSIGNMENT>
   ```

**Screenshot for Question 3:**
- Take a screenshot of the terminal showing the successful git clone command
- Save as: `git_clone.png` or `git_clone.jpeg`

---

### Step 4: Update Frontend with Deployed URLs

**Location:** `dealer-evaluation/app.js`

**What to change:**

Open `dealer-evaluation/app.js` and update the API endpoints at the top of the file:

```javascript
// API Endpoints - REPLACE THESE WITH YOUR DEPLOYED URLs
const PRODUCT_DETAILS_API = 'YOUR_PRODUCT_DETAILS_API_URL';
const DEALER_PRICING_API = 'YOUR_DEALER_PRICING_API_URL';
```

Replace with your actual deployed URLs from Steps 1 and 2:

```javascript
const PRODUCT_DETAILS_API = 'https://product-details-abc123.us-south.codeengine.appdomain.cloud';
const DEALER_PRICING_API = 'https://dealer-pricing-xyz456.us-south.codeengine.appdomain.cloud';
```

**Screenshot for Question 4:**
- Take a screenshot of the code in `index.html` or `app.js` showing the updated API endpoints
- Save as: `index_urlchanges.png` or `index_urlchanges.jpeg`

---

### Step 5: Deploy Dealer Evaluation Frontend

**Location:** `dealer-evaluation/` folder

**Files:**
- index.html
- app.js
- Dockerfile

**Deployment Steps on IBM Cloud Code Engine:**

1. Navigate to the `dealer-evaluation` folder:
   ```bash
   cd dealer-evaluation
   ```

2. Build and push the Docker image:
   ```bash
   ibmcloud cr build -t <your-registry-namespace>/dealer-evaluation:latest .
   ```

3. Deploy to Code Engine:
   ```bash
   ibmcloud ce application create --name dealer-evaluation --image <your-registry-namespace>/dealer-evaluation:latest --port 8080
   ```

4. Get the application URL:
   ```bash
   ibmcloud ce application get --name dealer-evaluation
   ```

**Screenshot for Question 5:**
- Take a screenshot showing the successful deployment of the Frontend microservice
- Save as: `frontend_deploy.png` or `frontend_deploy.jpeg`

---

### Step 6: Test the Application

Open the deployed frontend URL in your browser.

**Screenshot for Question 6:**
- Take a screenshot of the homepage showing the products preloaded in the dropdown
- The dropdown should show: Laptop, Smartphone, Headphones, Tablet, Smartwatch
- Save as: `homepage.png` or `homepage.jpeg`

**Screenshot for Question 7:**
- Select a product from the dropdown (e.g., "Laptop")
- Take a screenshot showing the list of dealers that supply the product (e.g., TechStore, ElectroWorld, ComputerZone)
- Save as: `product_dealer.png` or `product_dealer.jpeg`

**Screenshot for Question 8:**
- Select a specific dealer from the dealer list (e.g., "TechStore")
- Take a screenshot showing the price offered by that dealer for the selected product
- Save as: `product_dealer_price.png` or `product_dealer_price.jpeg`

**Screenshot for Question 9:**
- Select "All Dealers" from the dealer dropdown
- Take a screenshot showing the prices offered by all dealers for the selected product
- Save as: `product_all_dealers_prices.png` or `product_all_dealers_prices.jpeg`

---

## Summary of Screenshots to Submit

| Question | Screenshot Filename | What to Show |
|----------|-------------------|--------------|
| 1 | `product_details_deploy.png` | Successful deployment of Product Details microservice |
| 2 | `dealer_details_deploy.png` | Successful deployment of Dealer Pricing microservice |
| 3 | `git_clone.png` | Terminal showing git clone of frontend repository |
| 4 | `index_urlchanges.png` | Code showing updated API endpoints in index.html/app.js |
| 5 | `frontend_deploy.png` | Successful deployment of Frontend microservice |
| 6 | `homepage.png` | Homepage with products preloaded in dropdown |
| 7 | `product_dealer.png` | List of dealers for a selected product |
| 8 | `product_dealer_price.png` | Price for a specific dealer and product |
| 9 | `product_all_dealers_prices.png` | Prices from all dealers for a product |

---

## Additional Notes

### Prerequisites

Before deploying, ensure you have:
- IBM Cloud CLI installed
- IBM Cloud account with Code Engine access
- Container Registry namespace created

### Testing Locally (Optional)

You can test the microservices locally before deploying:

**Test Product Details (Python):**
```bash
cd product-details
pip install -r requirements.txt
python app.py
```
Test at: http://localhost:8080/products

**Test Dealer Pricing (Node.js):**
```bash
cd dealer-pricing
npm install
node app.js
```
Test at: http://localhost:8080/dealers/laptop

**Test Frontend:**
Simply open `dealer-evaluation/index.html` in a browser (after updating API URLs to localhost)

### Troubleshooting

1. **CORS Issues:** Ensure both backend services have CORS enabled (already included in the code)
2. **API URL Format:** Make sure URLs include the protocol (https://) and don't have trailing slashes
3. **Port Issues:** All services use port 8080, which is standard for Code Engine

---

## API Endpoints Reference

### Product Details API
- `GET /` - Service status
- `GET /products` - Get all products
- `GET /products/{id}` - Get specific product details
- `GET /health` - Health check

### Dealer Pricing API
- `GET /` - Service status
- `GET /dealers/{product_id}` - Get all dealers for a product
- `GET /pricing/{product_id}/{dealer_id}` - Get price for specific dealer
- `GET /pricing/{product_id}` - Get all dealers with prices for a product
- `GET /health` - Health check
