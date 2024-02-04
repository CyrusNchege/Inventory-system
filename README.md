# Inventory-system
Simple API using firebase cloud functions and Firebase cloud firestore as the primary database


# Description
This is a simple API that uses firebase cloud functions and Firebase cloud firestore as the primary database. The API has four main functions: getInventory, addInventory, updateInventory, and deleteInventory. The getInventory function retrieves all the inventory items from the database. The addInventory function adds a new inventory item to the database. The updateInventory function updates an existing inventory item in the database. The deleteInventory function deletes an inventory item from the database.

# Installation
To set up the API, you need to have Node.js and npm installed on your machine. You also need to have the Firebase CLI installed. Once you have these installed, you can clone the repository and run the following commands to set up the API:

```bash
git clone
```
```bash
cd Inventory-system
```
```bash
npm install
```
```bash
firebase login
```
```bash
firebase init
```
```bash
cd functions
```
```bash
npm install
```
```bash
npm run serve
```
This will start the API on your local machine. You can then use a tool like Postman to test the API endpoints.

# API Endpoints
The API has the following endpoints:

GET /getInventory - Retrieves all the inventory items from the database.
eg: http://127.0.0.1:5001/inventory-system-1a655/us-central1/getInventory
will return all the inventory items from the database.

```json
        [
            {
                "id": "EEb3DWburDGy4eBs4Lbz",
                "price": "1000",
                "name": "books",
                "quantity": "133"
            },
            {
                "id": "Qv2VRodvSt36y9TTUKFy",
                "quantity": "100",
                "price": "500",
                "name": "Uniform"
            }
        ]
```
POST /addInventory - Adds a new inventory item to the database.
eg: http://127.0.0.1:5001/inventory-system-1a655/us-central1/addInventory
```json
        {
            "name": "pencils",
            "price": "10",
            "quantity": "133"
        }
 ```

   This will add a new inventory item to the database.
```json
        {
            "id": "DWburDGy4eBs4Lb",
            "price": "10",
            "name": "pencils",
            "quantity": "133"
        }
```
PUT /updateInventory - Updates an existing inventory item in the database.
eg: http://127.0.0.1:5001/inventory-system-1a655/us-central1/updateInventory

```json
        {
            "id": "DWburDGy4eBs4Lb",
            "price": "10",
            "name": "pencils",
            "quantity": "100"
        }
 ```
  This   will update the inventory item with the id "DWburDGy4eBs4Lb" in the database.

```json
        {
            "id": "DWburDGy4eBs4Lb",
            "price": "10",
            "name": "pencils",
            "quantity": "100"
        }
```

DELETE /deleteInventory - Deletes an inventory item from the database.
eg: http://127.0.0.1:5001/inventory-system-1a655/us-central1/deleteInventory?id=DWburDGy4eBs4Lb

This will delete the inventory item with the id "DWburDGy4eBs4Lb" from the database.
    
The Postman collection for the API can be provided on request.

