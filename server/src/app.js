const express = require("express");
const morgan = require("morgan");
const cors =require("cors");
const { config } = require("./config");
const app = express();

app.use(morgan("dev"));
app.use(cors()); 
app.use("/api/status",(req,res)=>{
  res.send({msg:`Yes... welcome to ${config.APP_NAME} API`})
});

module.exports = app;