const product = require("../models/product");

const getAllProducts = async (req,res) => {

    const { sort,select } = req.query;

    const queryObject = {};

    // if(state){
    //     queryObject.state= state;
    //     // queryObject.state = {$regex: state , $options: "d"};
    // }

    let apidata = product.find(queryObject);

    if(sort){
        let sortfix = sort.replace(",", " ");
        apidata = apidata.sort(sortfix);
    }

     
    if(select){
        let selectfix = select.split(",").join(" ");
        apidata = apidata.select(selectfix);
    }
    
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1 ) * limit;

    apidata=apidata.skip(skip).limit(limit);

    let mydata = await apidata;
    res.status(200).json({
       mydata,nbHits:mydata.length
    });
};

const getAllProductsTesting = async (req,res) => {
    res.status(200).json({
        msg: "i am getAllProductsTesting"
    });
};

module.exports = { getAllProducts, getAllProductsTesting };