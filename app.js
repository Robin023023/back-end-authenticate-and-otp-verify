const express=require("express");
const app=express();
const cors = require("cors")
const userData=require("./route/router")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api",userData)
require("./config/db");


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./view/index.html");
})


app.use((req, res, next) => {
    res.status(404).json({
      message: "route not found",
    });
  });
  
  
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: "something broke",
    });
  });

module.exports=app