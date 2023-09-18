const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    location_id: {
        type : Number,
    },
    location_name: {
        type : String,
        required : true,
    },
    state_id: {
        type : Number,
    },
    state: {
        type : String,
    },
    country_name: {
        type : String,
    }
  })

// const productSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true
//     },
//     price: {
//       type: Number,
//       required: true
//     },
//     location_id: {
//       type: Number,
//       required: true
//     }
//   });

module.exports = mongoose.model("Product",productSchema);

