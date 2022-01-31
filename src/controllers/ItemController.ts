import BaseCrudController from './BaseCrudController'
import { Request, Response, NextFunction, Router } from 'express'
import { IControllerResponse } from '../models/ICrudController'
import ItemModel from '../models/mongoose/ItemModel'

export default class ItemController extends BaseCrudController {
    
    protected createRouter = () => {
        const router = Router()
        router.get('/items/:sku', this.get)
        router.get('/items', this.getAll)
        router.post('/items', this.create)
        return router
    }

    protected createHandler = async (req: Request): Promise<IControllerResponse> => {
        // add some kind of validator here
        let response: IControllerResponse
        const item = await ItemModel.create(req.body)
        response = {
            status_code: 200,
            response_data: { data: item }
        }

        return response
    }
    protected getOneHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        const sku = req.params.sku
        const item = await ItemModel.findOne({sku})
        response = {
            status_code: 200,
            response_data: { data: item }
        }
        return response
    }

    protected getAllHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        const item = await ItemModel.find()
        response = {
            status_code: 200,
            response_data: { data: item }
        }
        return response
    }
    
}