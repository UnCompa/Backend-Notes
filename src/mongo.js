const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI).then((res)=> {
    console.log("Base conectada");
}).catch((e) => console.log(e))