// Desc: Entry point for the server
const express = require('express');
const colors = require('colors');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 5000;

// Import schema
const schema = require('./schema/schema');
const app = express();
//connect to database
connectDB();

app.use(cors());
app.use(
    '/graphql', 
    graphqlHTTP(
    {
        schema,
        graphiql: process.env.NODE_ENV === 'development'
    }
));

// Start server
app.listen(port, console.log(`Server is running on port ${port}`));