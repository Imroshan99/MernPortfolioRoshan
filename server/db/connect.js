const mongoose=require("mongoose");
const url=process.env.DATABASE;
mongoose.connect(url)
.then(()=>{
    console.log("connect to database");
}).catch(error=>{console.log("error",error)})
