# MongoDB Cheatsheet

This cheatsheet covers essential MongoDB commands and concepts, providing descriptions and reasons for their use.

## 1. Basic Commands

### Connect to MongoDB
Connect to your MongoDB instance, which allows you to run commands and interact with your databases.
```sh
mongo  # Connect to default MongoDB instance
mongo <database>  # Connect to a specific database
```plaintext

### Show Databases
Lists all databases on the connected MongoDB server, helping you see what data is available.
```sh
show dbs
```plaintext

### Use a Database
Selects a specific database to work with, allowing you to perform operations on that database.
```sh
use <database>
```plaintext

### Show Collections
Displays all collections within the selected database, which helps you understand the structure of your data.
```sh
show collections
```plaintext

## 2. CRUD Operations

CRUD operations are the fundamental actions performed on data in a database: Create, Read, Update, and Delete.

### Create (Insert Documents)
Inserts new documents into a collection, allowing you to add data to your database.
```sh
db.collection.insertOne({ name: "John", age: 30 })
db.collection.insertMany([{ name: "Alice", age: 25 }, { name: "Bob", age: 27 }])
```plaintext

### Read (Query Documents)
Retrieves documents from a collection, enabling you to access and analyze your data.
```sh
db.collection.find()  # Fetch all documents
db.collection.find({ age: 30 })  # Query with condition
db.collection.findOne({ name: "John" })  # Fetch a single document
```plaintext

### Update Documents
Modifies existing documents in a collection, allowing you to change the data as needed.
```sh
db.collection.updateOne({ name: "John" }, { $set: { age: 31 } })
db.collection.updateMany({ age: { $gt: 25 } }, { $set: { active: true } })
```plaintext

### Delete Documents
Removes documents from a collection, helping you manage and clean up your data.
```sh
db.collection.deleteOne({ name: "John" })
db.collection.deleteMany({ age: { $lt: 25 } })
```plaintext

## 3. Indexes

Indexes improve the speed of data retrieval operations on a collection, optimizing query performance.

### Create Index
Creates an index on specified fields to speed up queries that filter or sort by those fields.
```sh
db.collection.createIndex({ name: 1 })  # Ascending order
db.collection.createIndex({ age: -1 })  # Descending order
```plaintext

### Show Indexes
Displays all indexes on a collection, allowing you to review and manage them.
```sh
db.collection.getIndexes()
```plaintext

### Drop Index
Removes an index from a collection when it is no longer needed or to optimize performance.
```sh
db.collection.dropIndex("name_1")
```plaintext

## 4. Aggregation Framework

The aggregation framework processes data records and returns computed results, facilitating complex data analysis.

### Basic Aggregation
Performs operations such as filtering, grouping, and sorting data, allowing for insightful analysis of your collections.
```sh
db.collection.aggregate([
  { $match: { age: { $gte: 30 } } },
  { $group: { _id: "$age", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])
```plaintext

## 5. Operators

Operators are symbols that specify the conditions in queries and updates, allowing for powerful data manipulation.

### Query Operators
Used in queries to compare field values, aiding in filtering results based on specific conditions.
```sh
$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
```plaintext

### Logical Operators
Combine multiple conditions in queries to create more complex filters.
```sh
$and, $or, $not, $nor
```plaintext

### Update Operators
Modify fields in documents during update operations, providing flexibility in how data can be changed.
```sh
$set, $unset, $inc, $push, $pop, $pull
```plaintext

## 6. Transactions (For Multi-Document Operations)

Transactions allow you to execute multiple operations as a single atomic action, ensuring data integrity.

### Start a Session
Begins a session for executing multiple operations within a transaction.
```sh
session = db.getMongo().startSession()
session.startTransaction()
```plaintext

### Commit or Abort Transaction
Commits the changes made during the transaction or aborts them in case of errors, maintaining data consistency.
```sh
session.commitTransaction()
session.abortTransaction()
```plaintext

## 7. Replication & Sharding

Replication ensures data availability and durability, while sharding distributes data across multiple servers for scalability.

### Check Replica Set Status
Displays the current status of the replica set, providing insight into the health and distribution of your data.
```sh
rs.status()
```plaintext

### Add a Shard
Adds a new shard to the cluster, enhancing data handling capabilities and scalability.
```sh
sh.addShard("shard1.example.com:27017")
```plaintext

## 8. Backup & Restore

Managing data backups is critical for data recovery and integrity.

### Backup Database
Creates a backup of the specified database, safeguarding your data against loss.
```sh
mongodump --db <database> --out /backup/path
```plaintext

### Restore Database
Restores a database from a previously created backup, allowing recovery of lost data.
```sh
mongorestore --db <database> /backup/path
```plaintext

## 9. User Management

User management is essential for controlling access to your database and ensuring security.

### Create User
Creates a new user with specified roles, setting permissions for database access and operations.
```sh
db.createUser({ user: "admin", pwd: "password", roles: ["readWrite", "dbAdmin"] })
```plaintext

### Show Users
Lists all users in the current database, helping you manage access control.
```sh
show users
```plaintext

### Delete User
Removes a user from the database, which may be necessary for security or administrative reasons.
```sh
db.dropUser("admin")
```plaintext