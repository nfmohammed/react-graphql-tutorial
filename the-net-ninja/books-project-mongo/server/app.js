const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}.mlab.com:35488/gql-ninja`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

//create GraphQL middleware to handle graphql request
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for request on port 4000');
})