const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose =require("mongoose");

const app=express();

dotenv.config({path:"./config.env"});
// const url=process.env.DATABASE;
const PORT=process.env.PORT;

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
//     next();
//   });

    app.use(cors());

require("./db/connect")
app.use(express.json());
app.use(require("./router/auth"))
// app.get("/",(req,res,next)=>{
//     res.send("Hellow roshan");
// })
const middlerware=(req,res,next)=>{
    console.log("I am in middleware");
    next();
}

app.get("/about",middlerware,(req,res,next)=>{
    // res.cookie("about",about)
    console.log(" im in after middlerware");
    res.send("hellow About ");
})
app.get("/contact",(req,res,next)=>{
    // res.cookie("contact",contact)
    res.send("hellow contact");
    res.cookie("thapa")
})
app.get("/signup",(req,res)=>{
    res.send("hellow signup")
})
app.get("/signin",(req,res,next)=>{
    res.send("hwllow sign in");
})


app.listen(PORT,()=>{
    console.log(`I am in port ${PORT}`);
})
