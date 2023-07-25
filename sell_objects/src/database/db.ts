import * as dotenv from 'dotenv';
const { MongoClient, ServerApiVersion } = require('mongodb');



// loading the env variable
dotenv.config();

const uri = process.env.MONGODB_URI;


module.exports = {};