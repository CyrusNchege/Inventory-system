const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();
const inventoryCollection = db.collection("inventory");

exports.getInventory = functions.https.onRequest(async (req, res) => {
  try {
    const snapshot = await inventoryCollection.get();
    const inventory = [];
    snapshot.forEach((doc) => {
      inventory.push(doc.data());
    });
    res.status(200).send(inventory);
  } catch (error) {
    res.status(500).send("Error getting inventory");
  }
},
);

exports.addInventory = functions.https.onRequest(async (req, res) => {
  try {
    const {name, quantity, price} = req.body;
    const inventory = {
      name,
      quantity,
      price,
    };
    const newInventory = await inventoryCollection.add(inventory);
    res.status(201).send(`Created a new inventory: ${newInventory.id}`);
  } catch (error) {
    res.status(500).send("Error creating inventory");
  }
},
);

exports.updateInventory = functions.https.onRequest(async (req, res) => {
  try {
    const {id, name, quantity, price} = req.body;
    const inventory = {
      name,
      quantity,
      price,
    };
    await inventoryCollection.doc(id).update(inventory);
    res.status(200).send(`Updated inventory: ${id}`);
  } catch (error) {
    res.status(500).send("Error updating inventory");
  }
},
);

exports.deleteInventory = functions.https.onRequest(async (req, res) => {
  try {
    const id = req.query.id;
    await inventoryCollection.doc(id).delete();
    res.status(200).send(`Deleted inventory: ${id}`);
  } catch (error) {
    res.status(500).send("Error deleting inventory");
  }
},
);


