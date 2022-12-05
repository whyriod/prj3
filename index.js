/*******************************************************************************
* File: index.js
* Summary: Basic backend server for our project.
*  ~ Holiness to the Lord ~
*******************************************************************************/

// Table variable for the db table name
let db_table = "iphone"
let express = require("express");
let cors = require('cors')
let app = new express();
app.use(cors())
// app.use(function (req, res, next) {
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
// res.setHeader('Access-Control-Allow-Credentials', true);
// next();
// });


// Html for home pages:

// set up database connection
const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "awseb-e-qpbfgbanrb-stack-awsebrdsdatabase-fsnxyzbtdgci.cgfad7fi6x3f.us-east-2.rds.amazonaws.com",
        user: "admin",       //Fill in
        password: "admin123",   //Fill in
        database:"project3Finaldb",    //Fill in
        port: 3306,
    },
});

// Basic home page. If for some reason they hit this route, on 3000,
// It will redirect them to the home page.
app.get("/",(req,res) => {
    res.sendFile("./index.html",{root: '.'});
});

//If they hit /donuts, then they will have JSON returned to them. Of course,
//In the future this should be our app data once we have that set up.
app.get("/" + db_table,(req,res) => {
    //Stuff
    //res.send('{"items": [{"1":{"picture":"img.png","name":"Bob"}}]}');
    knex.select().from(db_table)
    .then((result) => {
    // This will show in the console what we got.
    console.log(result);
    res.send(result);
    }).catch(error => {
    console.log(error);
    res.send("Internal Server Error");
    });
});

app.listen(3000);