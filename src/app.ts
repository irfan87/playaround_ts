// setup express application, routes and mongodb configurations here

import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { Controller } from './controllers/main_controller';

class App {
    public app: Application;

    public jsonPlaceholderController: Controller;

    constructor() {
        this.app = express();

        this.setConfig();

        this.jsonPlaceholderController = new Controller(this.app);
    }

    // setup config for express
    public setConfig() {
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.use(cors());
    }
}

export default new App().app;