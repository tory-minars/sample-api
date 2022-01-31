import { NextFunction, Request, Response } from 'express'
export interface IReturnObject {
    data: any | string | null;
    error?: any | null;
}
export interface IControllerResponse {
    status_code: number;
    response_data: IReturnObject;
}
export default interface ICrudController {
    get?: (req: Request, res: Response, next: NextFunction) => void;
    getAll?: (req: Request, res: Response, next: NextFunction) => void;
    create?: (req: Request, res: Response, next: NextFunction) => void;
    update?: (req: Request, res: Response, next: NextFunction) => void;
    delete?: (req: Request, res: Response, next: NextFunction) => void;
}