const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const chalk = require("chalk");

const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
//import routers
const booksRouter = require("./routers/books");


//import resolvers and types
const typeDefs = gql(fs.readFileSync("./graphql/schema.graphql", { encoding: 'utf8' }))
const resolvers = require("./graphql/resolvers")

//connect app to database
mongoose.connect(
  "mongodb+srv://admin102:obt55BpjpXpvLDQR@cluster0.pelnl.mongodb.net/Books-Microservice?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log(chalk.green("connection to database successful!"));
  }
);

const port = 4545;


//initialize server
const app = express();

//apollo server
const graphqlPath = '/graphql';
const apolloServer = new ApolloServer({typeDefs, resolvers})
apolloServer.applyMiddleware({ app, path: graphqlPath })




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//call routes
//1. books route
app.use(booksRouter);

//open an express server
app.listen(port, () => {
  console.log(chalk.green("Books service server started."));
});

// obt55BpjpXpvLDQR
