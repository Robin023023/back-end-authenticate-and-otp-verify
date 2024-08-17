require("dotenv").config()

const dev={
    app:{
        port:process.env.PORT || 5000,
    },
    db:{
        url:process.env.DR_DB || "mongodb://localhost:27017/passportLocal"
    }
}

module.exports=dev