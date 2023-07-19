import * as express from 'express'
import { connectToDB, closeDBConnection } from './db';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
    this.connectToDB();
  }
  
  private async connectToDB(){
    try{
      await connectToDB();
    } catch(error){
      console.error("Error connection to the database :", error);
    }
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }

  public async closeDBConnection() {
    try {
      await closeDBConnection();
    } catch (error) {
      console.error("Error closing the database connection:", error);
      // Handle the error as you see fit
    }
  }
}

export default new App().express