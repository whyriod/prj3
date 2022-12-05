/*******************************************************************************
* File: index.js
* Summary: Basic backend server for our project. 
*  ~ Holiness to the Lord ~
*******************************************************************************/

// Table variable for the db table name
db_table = "donuts"
let express = require("express");
let cors = require('cors')
let app = new express();
app.use(cors())

// Html for home pages:

// set up database connection
const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "",       //Fill in
        user: "",       //Fill in
        password: "",   //Fill in
        database:"",    //Fill in
        port: 3306,
    },
});

// Basic home page. If for some reason they hit this route, on 3000,
// It will redirect them to the home page. 
app.get("/",(req,res) => {
    res.sendFile("index.html");
});
 
//If they hit /donuts, then they will have JSON returned to them. Of course, 
//In the future this should be our app data once we have that set up. 
app.get("/" + db_table,(req,res) => {
    res.send('{"items": [{"1":{"picture":"img.png","name":"Bob"}}]}');

    // Database stuff for when we make it. 
    // knex.select()
    // .from(db_table)
    // .then((result) => {

    //     // This will show in the console what we got. 
    //     console.log(result);
    //     res.send(result);
    // }).catch(error => {
    //     console.log(error);
    //     res.send("Internal Server Error");
    // });
});

app.listen(3000);