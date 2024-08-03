const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:3100"
    })
);

require("./config/mongoose.config");

const misRutas = require("./routes/broma.route");
misRutas(app);

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port http://localhost:${port}`)
);