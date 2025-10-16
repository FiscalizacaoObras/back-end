const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const templateRoutes = require("./routes/templateRoutes");

app.use("/templates", templateRoutes);

app.listen(PORT, () => {
    console.log(`Server na porta: ${PORT}`);
});