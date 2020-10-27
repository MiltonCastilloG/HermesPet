/*
General purpose wrapper for all REST APIs CRUDs in the same app.
Returns the same object app so that every app can still add
functions for any other routes needed.
*/
const express = require("express");
const cors = require("cors");

module.exports = (handlers, middlewares = []) => {
    const app = express();
    app.use( [cors({origin: true}), ...middlewares] );

    app.get("/", handlers.get);
    app.get("/:id", handlers.getById );
    app.post("/", handlers.post );
    app.put("/:id", handlers.put );
    app.delete("/:id", handlers.delete );  
    
    return app;
}