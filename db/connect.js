const mongoose = require("mongoose");

// const url = "mongodb+srv://ganeshapi:Cd8AbwZqz3wb0idl@ganesh.yemtnwj.mongodb.net/ganeshapi?retryWrites=true&w=majority";

const connectdb = (url) => {
    // console.log("connect db");
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports = connectdb;