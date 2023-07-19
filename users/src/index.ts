import * as express from 'express'
import { connectToDB, closeDBConnection } from './database/db';
import * as UserRoutes from './routes/users.routes';


class Connection{
  private async connectToDB(){
    try{
      await connectToDB();
    } catch(error){
      console.error("Error connection to the database :", error);
    }
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

const app = express();

const port = process.env.PORT || 3000

app.use(express.json());


app.get('/',(req, res)=>{
  res.json({message : "User microservice "});
});

app.use("/users",UserRoutes);

app.listen(port,() =>{
  return console.log(`Listening at :${port}`);
})

