# Submission Guide - What to Submit for Each Question

## Overview

This guide tells you exactly what to submit for each of the 9 questions in your assignment.

---

## Question 1 (2 points)
**Submit:** `product_details_deploy.png` or `product_details_deploy.jpeg`

**What to screenshot:**
- The IBM Cloud Code Engine console showing the successful deployment of the Product Details microservice
- This should show the application is running/deployed successfully

**How to get it:**
1. After deploying the Product Details microservice using IBM Cloud Code Engine
2. Take a screenshot of the deployment success message or the application details page
3. Save the image with the exact filename specified

---

## Question 2 (2 points)
**Submit:** `dealer_details_deploy.png` or `dealer_details_deploy.jpeg`

**What to screenshot:**
- The IBM Cloud Code Engine console showing the successful deployment of the Dealer Pricing microservice (Node.js)
- This should show the application is running/deployed successfully

**How to get it:**
1. After deploying the Dealer Pricing microservice using IBM Cloud Code Engine
2. Take a screenshot of the deployment success message or the application details page
3. Save the image with the exact filename specified

---

## Question 3 (1 point)
**Submit:** `git_clone.png` or `git_clone.jpeg`

**What to screenshot:**
- Your terminal window showing the successful git clone command for the Dealer Evaluation Frontend

**How to get it:**
1. Open your terminal/command prompt
2. Run: `git clone <GIT_URL_PROVIDED_IN_ASSIGNMENT>` (replace with the actual URL from your assignment)
3. Take a screenshot of the terminal showing the clone was successful
4. Save the image with the exact filename specified

**Note:** If you're using the local frontend already created, you may need to clone it to a different location or show the git clone command for demonstration purposes.

---

## Question 4 (2 points)
**Submit:** `index_urlchanges.png` or `index_urlchanges.jpeg`

**What to screenshot:**
- The code in `index.html` or `app.js` showing where you updated the API endpoint placeholders with your deployed URLs

**What to change:**
In `dealer-evaluation/app.js`, update these lines:
```javascript
const PRODUCT_DETAILS_API = 'YOUR_PRODUCT_DETAILS_API_URL';
const DEALER_PRICING_API = 'YOUR_DEALER_PRICING_API_URL';
```

To something like:
```javascript
const PRODUCT_DETAILS_API = 'https://product-details-abc123.us-south.codeengine.appdomain.cloud';
const DEALER_PRICING_API = 'https://dealer-pricing-xyz456.us-south.codeengine.appdomain.cloud';
```

**How to get it:**
1. Open `dealer-evaluation/app.js` in your code editor
2. Highlight or show the lines where you updated the API URLs
3. Take a screenshot showing the updated code
4. Save the image with the exact filename specified

---

## Question 5 (2 points)
**Submit:** `frontend_deploy.png` or `frontend_deploy.jpeg`

**What to screenshot:**
- The IBM Cloud Code Engine console showing the successful deployment of the Dealer Evaluation Frontend microservice
- This should show the application is running/deployed successfully

**How to get it:**
1. After deploying the Frontend microservice using IBM Cloud Code Engine
2. Take a screenshot of the deployment success message or the application details page
3. Save the image with the exact filename specified

---

## Question 6 (2 points)
**Submit:** `homepage.png` or `homepage.jpeg`

**What to screenshot:**
- The deployed frontend application in your browser
- The homepage should show the products dropdown preloaded with all products

**What should be visible:**
- The Dealer Evaluation System webpage
- A dropdown menu showing: Laptop, Smartphone, Headphones, Tablet, Smartwatch
- The page should be fully loaded

**How to get it:**
1. Open the deployed frontend URL in your browser
2. Wait for the page to fully load
3. Take a screenshot of the entire page showing the dropdown with products
4. Save the image with the exact filename specified

---

## Question 7 (1 point)
**Submit:** `product_dealer.png` or `product_dealer.jpeg`

**What to screenshot:**
- The frontend application showing the list of dealers for a selected product

**What should be visible:**
- A product selected from the dropdown (e.g., "Laptop")
- A second dropdown showing the dealers that supply that product (e.g., TechStore, ElectroWorld, ComputerZone)
- The dealers list should be visible

**How to get it:**
1. Select a product from the first dropdown
2. Wait for the dealers dropdown to appear and populate
3. Take a screenshot showing both the selected product and the list of dealers
4. Save the image with the exact filename specified

---

## Question 8 (1 point)
**Submit:** `product_dealer_price.png` or `product_dealer_price.jpeg`

**What to screenshot:**
- The frontend application showing the price offered by a specific dealer for a selected product

**What should be visible:**
- A product selected (e.g., "Laptop")
- A specific dealer selected (e.g., "TechStore")
- A notification/box showing the price (e.g., "$899.99")

**How to get it:**
1. Select a product from the dropdown
2. Select a specific dealer from the dealers dropdown
3. Wait for the price to appear
4. Take a screenshot showing the product, dealer, and price
5. Save the image with the exact filename specified

---

## Question 9 (2 points)
**Submit:** `product_all_dealers_prices.png` or `product_all_dealers_prices.jpeg`

**What to screenshot:**
- The frontend application showing prices from all dealers for a selected product

**What should be visible:**
- A product selected (e.g., "Laptop")
- "All Dealers" selected from the dealers dropdown
- A list showing all dealers and their respective prices for that product

**How to get it:**
1. Select a product from the dropdown
2. Select "All Dealers" from the dealers dropdown
3. Wait for all dealer prices to appear in a list/card format
4. Take a screenshot showing the complete list of all dealer prices
5. Save the image with the exact filename specified

---

## Quick Checklist

Before submitting, verify you have:
- [ ] All 9 screenshots with the exact filenames specified
- [ ] Each screenshot clearly shows what the question asks for
- [ ] Screenshots are in .png or .jpeg format
- [ ] All microservices are deployed and working
- [ ] The frontend is properly connected to both backend APIs

---

## Tips for Taking Screenshots

1. **Use high-resolution screenshots** - Make sure text is readable
2. **Include context** - Show browser tabs or terminal prompts to prove authenticity
3. **Timing matters** - Take screenshots after pages fully load
4. **Test functionality** - Verify the application works before taking screenshots
5. **Backup your screenshots** - Keep copies in case you need to retake them

---

## Common Mistakes to Avoid

1. ❌ Wrong filenames - Use the exact filenames specified
2. ❌ Blurry screenshots - Ensure text is readable
3. ❌ Missing context - Don't crop out important information
4. ❌ Not updating API URLs - Frontend won't work without proper URLs
5. ❌ Taking screenshots before services are deployed - Verify deployments first
6. ❌ Using localhost URLs in screenshots - Must show deployed URLs

---

## Deployment Order

Follow this order:
1. Deploy Product Details (Python) → Get URL
2. Deploy Dealer Pricing (Node.js) → Get URL
3. Update frontend with both URLs
4. Deploy Frontend
5. Test application thoroughly
6. Take all screenshots in order (Questions 6-9)

Good luck with your submission!
