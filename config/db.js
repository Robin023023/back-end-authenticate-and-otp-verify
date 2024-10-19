const config=require("./config")
const mongoose = require("mongoose");
const dbUrl=config.db.url

mongoose.connect(dbUrl) 
.then(()=>{
    console.log("mongodb atlas is connected")
})

.catch((error) => {
    console.log("mongodb atlas is not connected",error)
});