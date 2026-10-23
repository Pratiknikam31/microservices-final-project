const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Sample dealer and pricing data
const dealers = {
    "laptop": [
        { "id": "dealer1", "name": "TechStore", "price": 899.99 },
        { "id": "dealer2", "name": "ElectroWorld", "price": 949.99 },
        { "id": "dealer3", "name": "ComputerZone", "price": 879.99 }
    ],
    "smartphone": [
        { "id": "dealer1", "name": "TechStore", "price": 699.99 },
        { "id": "dealer2", "name": "MobileHub", "price": 729.99 },
        { "id": "dealer4", "name": "PhoneCenter", "price": 689.99 }
    ],
    "headphones": [
        { "id": "dealer1", "name": "TechStore", "price": 149.99 },
        { "id": "dealer3", "name": "AudioExpress", "price": 129.99 }
    ],
    "tablet": [
        { "id": "dealer2", "name": "ElectroWorld", "price": 399.99 },
        { "id": "dealer4", "name": "PhoneCenter", "price": 429.99 }
    ],
    "smartwatch": [
        { "id": "dealer1", "name": "TechStore", "price": 249.99 },
        { "id": "dealer2", "name": "ElectroWorld", "price": 279.99 },
        { "id": "dealer3", "name": "ComputerZone", "price": 259.99 }
    ]
};

app.get('/', (req, res) => {
    res.json({ message: "Dealer Pricing Microservice" });
});

// Get all dealers for a product
app.get('/dealers/:product_id', (req, res) => {
    const productId = req.params.product_id;
    const productDealers = dealers[productId];
    
    if (productDealers) {
        // Return dealer info without price for listing
        const dealerList = productDealers.map(dealer => ({
            id: dealer.id,
            name: dealer.name
        }));
        res.json({ dealers: dealerList });
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});

// Get price for a specific dealer and product
app.get('/pricing/:product_id/:dealer_id', (req, res) => {
    const productId = req.params.product_id;
    const dealerId = req.params.dealer_id;
    
    const productDealers = dealers[productId];
    if (productDealers) {
        const dealer = productDealers.find(d => d.id === dealerId);
        if (dealer) {
            res.json({
                dealer_id: dealer.id,
                dealer_name: dealer.name,
                product_id: productId,
                price: dealer.price
            });
        } else {
            res.status(404).json({ error: "Dealer not found for this product" });
        }
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});

// Get all dealers with prices for a product
app.get('/pricing/:product_id', (req, res) => {
    const productId = req.params.product_id;
    const productDealers = dealers[productId];
    
    if (productDealers) {
        const pricingList = productDealers.map(dealer => ({
            dealer_id: dealer.id,
            dealer_name: dealer.name,
            product_id: productId,
            price: dealer.price
        }));
        res.json({ pricing: pricingList });
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Dealer Pricing Microservice running on port ${port}`);
});
