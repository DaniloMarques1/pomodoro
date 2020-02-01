import Config from './config/config';
import express, { Application } from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import httpStatus from './middleware/httpStatus';
import cors from 'cors';

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
  }

  public bootstrap(): void {
    this.express.listen(Config.PORT);
  }

  middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(httpStatus);
    this.express.use(routes);
  }
  database(): void {
    mongoose.connect(<string>Config.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }
}

export default new App();
