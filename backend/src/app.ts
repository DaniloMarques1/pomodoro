import express, { Application } from "express";

class App {
    private express: Application;
    constructor() {
        this.express = express();
    }
    
    public bootstrap(PORT: number): void {
        this.express.listen(PORT);
    }
}

export default new App();