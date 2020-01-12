import { config } from 'dotenv';
config();
import express, { Application } from 'express';
import routes from './routes';
import mongoose from 'mongoose';
class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
  }

  public bootstrap(): void {
    this.express.listen(process.env.PORT);
  }

  public middlewares(): void {
    this.express.use(express.json());
    this.express.use(routes);
  }
  public database(): void {
    mongoose.connect(<string>process.env.DATABASE_DEV_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }
}

export default new App();
