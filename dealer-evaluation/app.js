// API Endpoints - REPLACE THESE WITH YOUR DEPLOYED URLs
const PRODUCT_DETAILS_API = 'YOUR_PRODUCT_DETAILS_API_URL';
const DEALER_PRICING_API = 'YOUR_DEALER_PRICING_API_URL';

const productSelect = document.getElementById('productSelect');
const dealerSelect = document.getElementById('dealerSelect');
const dealerField = document.getElementById('dealerField');
const priceDisplay = document.getElementById('priceDisplay');
const priceText = document.getElementById('priceText');
const allPricesDisplay = document.getElementById('allPricesDisplay');
const allPricesList = document.getElementById('allPricesList');

// Load products on page load
window.addEventListener('DOMContentLoaded', loadProducts);

productSelect.addEventListener('change', handleProductChange);
dealerSelect.addEventListener('change', handleDealerChange);

async function loadProducts() {
    try {
        const response = await fetch(`${PRODUCT_DETAILS_API}/products`);
        const data = await response.json();
        
        if (data.products) {
            data.products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                productSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error loading products:', error);
        alert('Failed to load products. Please check if the Product Details API is accessible.');
    }
}

async function handleProductChange() {
    const productId = productSelect.value;
    
    // Reset dealer and price displays
    dealerSelect.innerHTML = '<option value="">-- Select a Dealer --</option>';
    dealerField.style.display = 'none';
    priceDisplay.style.display = 'none';
    allPricesDisplay.style.display = 'none';
    
    if (!productId) return;
    
    try {
        const response = await fetch(`${DEALER_PRICING_API}/dealers/${productId}`);
        const data = await response.json();
        
        if (data.dealers) {
            // Add "All Dealers" option
            const allOption = document.createElement('option');
            allOption.value = 'all';
            allOption.textContent = 'All Dealers';
            dealerSelect.appendChild(allOption);
            
            // Add individual dealers
            data.dealers.forEach(dealer => {
                const option = document.createElement('option');
                option.value = dealer.id;
                option.textContent = dealer.name;
                dealerSelect.appendChild(option);
            });
            
            dealerField.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading dealers:', error);
        alert('Failed to load dealers. Please check if the Dealer Pricing API is accessible.');
    }
}

async function handleDealerChange() {
    const productId = productSelect.value;
    const dealerId = dealerSelect.value;
    
    priceDisplay.style.display = 'none';
    allPricesDisplay.style.display = 'none';
    
    if (!dealerId) return;
    
    if (dealerId === 'all') {
        // Show all dealer prices
        try {
            const response = await fetch(`${DEALER_PRICING_API}/pricing/${productId}`);
            const data = await response.json();
            
            if (data.pricing) {
                allPricesList.innerHTML = '';
                data.pricing.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'card price-card';
                    card.innerHTML = `
                        <div class="card-content">
                            <div class="content">
                                <p><strong>${item.dealer_name}</strong></p>
                                <p class="is-size-4 has-text-success">$${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    `;
                    allPricesList.appendChild(card);
                });
                allPricesDisplay.style.display = 'block';
            }
        } catch (error) {
            console.error('Error loading all prices:', error);
            alert('Failed to load all dealer prices.');
        }
    } else {
        // Show single dealer price
        try {
            const response = await fetch(`${DEALER_PRICING_API}/pricing/${productId}/${dealerId}`);
            const data = await response.json();
            
            if (data) {
                priceText.innerHTML = `
                    <strong>${data.dealer_name}</strong> offers <strong>${data.product_id}</strong> at 
                    <span class="is-size-4">$${data.price.toFixed(2)}</span>
                `;
                priceDisplay.style.display = 'block';
            }
        } catch (error) {
            console.error('Error loading price:', error);
            alert('Failed to load dealer price.');
        }
    }
}
