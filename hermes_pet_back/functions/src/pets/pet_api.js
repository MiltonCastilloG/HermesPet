const admin = require('firebase-admin');
const express = require("../lib/firebase_express_wrapper");
const crud = require("./CRUD_handlers");

admin.initializeApp();
const db = admin.firestore();
const petsRef = db.collection('pets');

const api = express( crud(petsRef) );

module.exports = api;