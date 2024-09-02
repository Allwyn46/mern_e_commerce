const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://super_admin_commerce:${process.env.MONGOOSE_PASS}@ecommerce.pwekm.mongodb.net/`
  )
  .then(() => console.log("Database Connected Successfully"))
  .catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 5000;
