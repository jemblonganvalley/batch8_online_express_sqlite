//import dependencies
const express = require("express");
const cors = require("cors");
const cus = require("./controllers/customerController");
const PORT = process.env.PORT || 8000;
const app = express();

//midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//controller
app.use("/api/customer", cus);

//litener
app.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
