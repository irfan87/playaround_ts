import { Application } from 'express';
import { JsonPlaceholderService } from '../services/jsonPlaceholderService';

export class Controller {
    private jsonPlaceholderService: JsonPlaceholderService;

    constructor(private app: Application) {
        this.jsonPlaceholderService = new JsonPlaceholderService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.jsonPlaceholderService.getAllItems);
    }
}