import { NextFunction, Request, Response, Router } from 'express'
import ICrudController, {IReturnObject, IControllerResponse } from '../models/ICrudController'

export default class BaseCrudController implements ICrudController {
    protected router: Router
    protected paramterKey: string
    
    public constructor() {
        this.setParameterKey()
    }

    public getRouter = (): Router => {
        if(!this.router) {
            this.router = this.createRouter()
        }
        return this.router
    }

    protected setParameterKey = (): void => {
        this.paramterKey = 'id'
    }
    
    protected getParameterKey = (): string => {
        if(!this.paramterKey) {
            this.setParameterKey()
        }
        return this.paramterKey
    }

    protected createRouter = (): Router => {
        const router = Router()
        router.get(`/:${this.getParameterKey()}`, this.get)
        router.get(`/`, this.getAll)
        router.post(``, this.create)
        router.put(`/:${this.getParameterKey()}`, this.update)
        router.delete(`/:${this.getParameterKey()}`, this.delete)
        return router
    }

    public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await this.process(req, res, next, this.createHandler)
    }

    public get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await this.process(req, res, next, this.getOneHandler)
    }

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await this.process(req, res, next, this.getAllHandler)
    }

    public update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await this.process(req, res, next, this.updateHandler)
    }

    public delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await this.process(req, res, next, this.deleteHandler)
    }

    protected sendResponse = (res: Response, result: IControllerResponse) => {
        res.status(result.status_code).json(result.response_data)
    }

    protected process = async (
        request: Request, 
        response: Response, 
        nextFunc: NextFunction,
        handler:(req: Request, res?: Response, next?: NextFunction) => Promise<IControllerResponse>
        ): Promise<void> => {
            if(request.header('content-type') !== 'application/json') {
                const error: IReturnObject = { error: 'Content-type header should be \'application/json/', data: {} }
                const errorResponse: IControllerResponse = {
                    status_code: 400,
                    response_data: error
                }
                this.sendResponse(response, errorResponse)
                return
            }
            return handler(request, response, nextFunc)
            .then((result: IControllerResponse) => {
                this.sendResponse(response, result)
            }).catch((err: Error) => {
                let errorResponse: IControllerResponse = {
                    status_code: 500,
                    response_data: {error: err.message, data: {}}
                }
                this.sendResponse(response, errorResponse)
            })
    }

    protected getOneHandler = async (req: Request, res: Response): Promise<IControllerResponse> => {
        return {status_code: 200, response_data: {data: {}}}
    }

    protected getAllHandler = async (req: Request, res: Response): Promise<IControllerResponse> => {
        return {status_code: 200, response_data: {data: {}}}
    }

    protected createHandler = async (req: Request, res: Response): Promise<IControllerResponse> => {
        return {status_code: 200, response_data: {data: {}}}
    }

    protected updateHandler = async (req: Request, res: Response): Promise<IControllerResponse> => {
        return {status_code: 200, response_data: {data: {}}}
    }

    protected deleteHandler = async (req: Request, res: Response): Promise<IControllerResponse> => {
        return {status_code: 200, response_data: {data: {}}}
    }
 }
