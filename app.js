require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routers/products");

const connectdb = require("./db/connect");

app.get("/",(req,res) => {
    res.send("welcome to server side");
});

app.use("/api/products", products_routes);

const start = async () => {
    try{
        await connectdb(process.env.MONDODB_URL);
       app.listen(PORT,() => {
        console.log(`connected to port ${PORT}`);
       });
    } catch (error){
       console.log(error)
    }
};



start();