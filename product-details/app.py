from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Sample product data
products = {
    "laptop": {
        "id": "laptop",
        "name": "Laptop",
        "description": "High-performance laptop for professionals",
        "category": "Electronics"
    },
    "smartphone": {
        "id": "smartphone",
        "name": "Smartphone",
        "description": "Latest smartphone with advanced features",
        "category": "Electronics"
    },
    "headphones": {
        "id": "headphones",
        "name": "Headphones",
        "description": "Noise-cancelling wireless headphones",
        "category": "Electronics"
    },
    "tablet": {
        "id": "tablet",
        "name": "Tablet",
        "description": "10-inch tablet for work and entertainment",
        "category": "Electronics"
    },
    "smartwatch": {
        "id": "smartwatch",
        "name": "Smartwatch",
        "description": "Fitness tracking smartwatch",
        "category": "Electronics"
    }
}

@app.route('/')
def home():
    return jsonify({"message": "Product Details Microservice"})

@app.route('/products')
def get_products():
    return jsonify({"products": list(products.values())})

@app.route('/products/<product_id>')
def get_product(product_id):
    product = products.get(product_id)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

@app.route('/health')
def health():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
