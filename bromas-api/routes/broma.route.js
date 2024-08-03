const BromaController = require("../controllers/broma.controller");

module.exports = (app) => {
    app.get("/api/bromas/", BromaController.ver_todos);
    app.get("/api/bromas/:idJoke", BromaController.ver);
    app.post("/api/bromas/", BromaController.crear);
    app.put("/api/bromas/:idJoke", BromaController.editar);
    app.delete("/api/bromas/:idJoke", BromaController.borrar);
};
