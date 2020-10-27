const functions = require('firebase-functions');
const pets = require('./src/pets/pet_app');

exports.hermesPet = functions.region('europe-west1').https.onRequest(pets);