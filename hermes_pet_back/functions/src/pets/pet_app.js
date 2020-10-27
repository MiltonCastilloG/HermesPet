const express = require("../lib/firebase_express_wrapper");
const crud = require("./CRUD_handlers");

const app = express(crud);

module.exports = app;