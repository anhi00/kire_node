import express from "express";
import mysql from "mysql2";
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());

const port = 4243;

const db = mysql.createPool({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "KireDB",
    connectionlimit: 10,
})

server.listen(port, function(){
    console.log("The server is now running in port 4243");
});

// Show all products

server.get('/products/allProducts', function(req, res){

    let sqlQuery = "CALL `showAllProducts`()";
    db.query(sqlQuery, function (error, data){
        if(error){
            res.json({message:error})
        }
        else{
            res.json(data[0]);
        }
    })
 })

 // Show Available Products

 server.get('/products/availableProducts', function(req, res){

    let sqlQuery = "CALL `showAvailableProducts`()";
    db.query(sqlQuery, function (error, data){
        if(error){
            res.json({message:error})
        }
        else{
            res.json(data[0]);
        }
    })
 })

  // Show Unavailable Products

  server.get('/products/unavailableProducts', function(req, res){

    let sqlQuery = "CALL `showUnavailableProducts`()";
    db.query(sqlQuery, function (error, data){
        if(error){
            res.json({message:error})
        }
        else{
            res.json(data[0]);
        }
    })
 })


 //Show Display Products

 server.get('/products/displayProducts', function(req, res){

    let sqlQuery = "CALL `showDisplayProducts`()";
    db.query(sqlQuery, function (error, data){
        if(error){
            res.json({message:error})
        }
        else{
            res.json(data[0]);
        }
    })
 })

  //Show Highest to Lowest

  server.get('/products/highestToLowestPrice', function(req, res){

    let sqlQuery = "CALL `showHighestToLowest`()";
    db.query(sqlQuery, function (error, data){
        if(error){
            res.json({message:error})
        }
        else{
            res.json(data[0]);
        }
    })
 })

  //Show Lowest to Highest

  server.get('/products/lowestToHighestPrice', function(req, res){

    let sqlQuery = "CALL `showLowestToHighest`()";
    db.query(sqlQuery, function (error, data){
        if(error){
            res.json({message:error})
        }
        else{
            res.json(data[0]);
        }
    })
 })

 // Show by Category

 server.get('/products/category/:id', function (req, res){
    let sqlQuery = "CALL `showByCategory`(?)";

    db.query(sqlQuery, [req.params.id], function(error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

    
})

 // Show by product ID

 server.get('/products/individual/:id', function (req, res){
    let sqlQuery = "CALL `showByProductId`(?)";

    db.query(sqlQuery, [req.params.id], function(error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

    
})

 // Show deals of the day

 server.get('/products/deals/:weekDay', function (req, res){
    let sqlQuery = "CALL `showDealsOfTheDay`(?)";

    db.query(sqlQuery, [req.params.weekDay], function(error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

    
})

// Add a product

server.post('/products/addProduct', function (req, res){

    let sqlQuery = "CALL `addNewProduct`(?, ?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sqlQuery, [req.body.data.productName, req.body.data.productImage, 
                        req.body.data.productSummary, req.body.data.productDescription, 
                        req.body.data.price, req.body.data.availability, req.body.data.display, 
                        req.body.data.categoryID], function (error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

})

// Update product

server.put('/product/:productID', function (req, res){
    let sqlQuery = "CALL `updateProduct`(?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sqlQuery, [req.params.productID, req.body.data.productName, req.body.data.productImage, 
                        req.body.data.productSummary, req.body.data.productDescription, 
                        req.body.data.price, req.body.data.availability, req.body.data.display, 
                        req.body.data.categoryID], function(error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

})

// Update price

server.put('/product/updatePrice/:productID', function (req, res){
    let sqlQuery = "CALL `updatePrice`(?, ?)";

    db.query(sqlQuery, [req.params.productID, req.body.data.price], function(error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

})

// Update deal

server.put('/product/updateDeal/:dealID', function (req, res){
    let sqlQuery = "CALL `updateDeals`(?, ?)";

    db.query(sqlQuery, [req.params.dealID, req.body.data.deal], function(error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

})

// Delete product

server.delete('/product/:productID', function (req, res){

    let sqlQuery = "CALL `deleteProduct`(?)";
    
    db.query(sqlQuery, [req.params.productID], function (error, data){
        if(error){
            res.json({errorMessage: error})
        }
        else{
            res.json(data);
        }
    })

})






