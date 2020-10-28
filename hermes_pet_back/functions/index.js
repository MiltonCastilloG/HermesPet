const functions = require('firebase-functions');
const petApi = require('./src/pets/pet_api');

exports.hermesPet = functions.region('europe-west1').https.onRequest(petApi);