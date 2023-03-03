const express = require("express");
const cors = require("cors");
const app = express();
const dbConnectFunc = require("./src/db/Config");
const CompatibilityRout = require("./src/routes/CompatibilityRout");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api", CompatibilityRout);

const port = process.env.PORT;

dbConnectFunc()
  .then(() =>
    app.listen(port || 3001, () => {
      if (port) {
        console.log(`server start at port no ${port}`);
      } else {
        console.log(`server start at port no ${3001}`);
      }
    })
  )
  .catch((e) => console.log(e.message, " ERR-index.js"));
