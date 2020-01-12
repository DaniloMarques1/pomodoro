import express, { Application } from 'express';
import routes from './routes';

class App {
  private express: Application;

  constructor() {
    this.express = express();
  }

  public bootstrap(PORT: number): void {
    this.express.listen(PORT);
  }

  public middlewares(): void {
    this.express.use(routes);
  }
}

export default new App();
