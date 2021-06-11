//The express module is first imported from the express package
import express from "express";
//
//import graphqlHTTP from "express-graphql";
//import mongoose pachage and connect to MongodDB via database "notetaking_db"
import mongoose from "mongoose";
//
import schema from "./schema"


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const { graphqlHTTP } = require('express-graphql');
//module function is assigned to a variable called app
 const app = express();

 //variable called PORT is created which holds the port number in which the server will live
 const PORT = 4300;

 //handle a GET request to our server using the .get() function w/ 2 parameters 
 //the URL for this function to act upon. In this case, we are targeting '/', which is the root of our API in this case, localhost:4300
 app.get("/", (req, res) => {
     res.json({
         message: "Notetaking API v1"
     });
 });
//express-graphql is used to create a graphql server app based on a schema and resolver functions
//
 app.use("/graphql", graphqlHTTP({
         //The graphiql option (which is set to true) indicates use of web client which features a GUI, GraphiQL
         schema: schema,
         graphiql: true
     })
 );

 //.listen() function, which also tells the app which port to listen on by using the PORT variable
 app.listen(PORT, () => {
     console.log(`server islistening on PORT ${PORT}`);
 });