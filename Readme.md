# E-commerce Backend App

A simple eCommerce backend built with **Fastify**, **MongoDB**, and **Elasticsearch** to handle product management and search functionality.

---

## Features
- **Fastify** for high-performance API routing
- **MongoDB** for product storage
- **Elasticsearch** for fast product searching
- **RabbitMQ** for message queueing and async processing
- **Joi** for request validation
- **CRUD operations** for product management
- **.env support** for environment variables

---

## Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or MongoDB Atlas)
- [Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
- [RabbitMQ](https://www.rabbitmq.com/download.html) (or run via Docker)

---

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file and add your database, Elasticsearch, and RabbitMQ credentials:
```env
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
ELASTICSEARCH_HOST=https://your-elasticsearch-url
ELASTICSEARCH_API_KEY=your-elastic-api-key
RABBITMQ_URL=amqp://localhost
```

### 4. Start MongoDB, Elasticsearch & RabbitMQ
Run MongoDB locally:
```sh
mongod
```
Start Elasticsearch:
```sh
elasticsearch
```
Start RabbitMQ:
```sh
rabbitmq-server start
```

### 5. Start the Server & Order Worker
```sh
npm start
```

### 6. Start the Order Worker
```sh
node workers/orderWorker.js
```
The server runs on **http://localhost:3000/**

---

## API Endpoints

### **1. Add a Product**
```sh
POST /products
```
**Body:**
```json
{
  "name": "Nike Shoes",
  "description": "Running shoes",
  "price": 100,
  "category": "Footwear"
}
```

### **2. Get All Products**
```sh
GET /products
```

### **3. Search Products using Elasticsearch**
```sh
GET /search?query=nike
```

### **4. Place an Order (Uses RabbitMQ)**
```sh
POST /order
```
**Body:**
```json
{
  "userId": "12345",
  "productId": "nike_shoes",
  "quantity": 2
}
```
---

## License
This project is open-source under the [MIT License](LICENSE).

