const admin = require('firebase-admin');
const express = require("../lib/firebase_express_wrapper");
const crud = require("./CRUD_handlers");

admin.initializeApp();
const db = admin.firestore();
const petsRef = db.collection('pets');

const api = express( crud(petsRef) );

api.put("/like/:id", async (req, res) => {
    const petRef = petsRef.doc(req.params.id);
    const snapshot = await petRef.get();
    const petInfo = snapshot.data();
    
    await petRef.update({liked: !petInfo.liked});

    const snapshotUpdated = await petRef.get();
    const petInfoUpdated = snapshotUpdated.data();
    res.json({updatedPet: petInfoUpdated});
})

module.exports = api;