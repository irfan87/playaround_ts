import { Request, Response } from 'express';

export class JsonPlaceholderService {
    public getAllItems(req: Request, res: Response) {
        return res.status(200).send("Test");
    }
}