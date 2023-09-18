require("dotenv").config();

const connectdb = require("./db/connect");

const product = require("./models/product");

const productjson = require("./product.json");


const start = async () => {
    try{
       await connectdb(process.env.MONDODB_URL);
       await product.create(productjson);
       console.log("sucess");
    } catch(error){
       console.log(error)
    }
}

start(); 