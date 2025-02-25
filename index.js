const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const routes = require("./routes/filter");

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT||3006;

app.get("/", (req, res) => {
    res.json("Server test");
})



app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
})