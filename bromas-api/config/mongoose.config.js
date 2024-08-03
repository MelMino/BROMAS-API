const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bromas")
    .then(() => console.log("Conectado con DB"))
    .catch(err => console.log("Error al conectarse con DB", err));
