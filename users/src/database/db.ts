import * as dotenv from 'dotenv';
const { MongoClient, ServerApiVersion } = require('mongodb');

// loading the env variable
dotenv.config();

const uri = process.env.MONGODB_URI;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDB(){
    try{
        // Connect the client to the server 

        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });

        console.log("Pinged your deployment. You successfully connect to the database")
        return client;

    } catch(error){
        console.error("Error connection to MongoDB:", error);
        throw error;
    }
}
async function closeDBConnection() {
  try {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("Closed MongoDB connection.");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    throw error;
  }
}

module.exports = { connectToDB, closeDBConnection };