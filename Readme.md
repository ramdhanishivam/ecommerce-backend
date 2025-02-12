# E-commerce Backend App

A simple eCommerce backend built with **Fastify**, **MongoDB**, and **Elasticsearch** to handle product management and search functionality.

---

## Features
- **Fastify** for high-performance API routing
- **MongoDB** for product storage
- **Elasticsearch** for fast product searching
- **CRUD operations** for product management
- **.env support** for environment variables

---

## Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or MongoDB Atlas)
- [Elasticsearch](https://www.elastic.co/downloads/elasticsearch)

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
Create a `.env` file and add your database and Elasticsearch credentials:
```env
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
ELASTICSEARCH_HOST=https://your-elasticsearch-url
ELASTICSEARCH_API_KEY=your-elastic-api-key
```

### 4. Start MongoDB & Elasticsearch
Run MongoDB locally:
```sh
mongod
```
Start Elasticsearch:
```sh
elasticsearch
```

### 5. Start the Server
```sh
npm start
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


### **5. Search Products using Elasticsearch**
```sh
GET /search?query=nike
```

---


## Future Enhancements
- Add authentication with **JWT**
- RabbitMQ
- Implement pagination

---

## License
This project is open-source under the [MIT License](LICENSE).

