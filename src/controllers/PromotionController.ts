import BaseCrudController from './BaseCrudController'
import { Request, Response, NextFunction, Router } from 'express'
import { IControllerResponse } from '../models/ICrudController'
import PromotionModel from '../models/mongoose/PromotionModel'

export default class PromotionController extends BaseCrudController {
    
    protected createRouter = () => {
        const router = Router()
        router.get('/promo/:promo_id', this.get)
        router.get('/promo', this.getAll)
        router.post('/promo', this.create)
        router.delete('/promo/:promo_id', this.delete)
        return router
    }

    protected createHandler = async (req: Request): Promise<IControllerResponse> => {
        // add some kind of validator here
        let response: IControllerResponse
        const promo = await PromotionModel.create(req.body)
        response = {
            status_code: 200,
            response_data: { data: promo }
        }

        return response
    }
    protected getOneHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        const promo = await PromotionModel.findOne(req.body)
        response = {
            status_code: 200,
            response_data: { data: promo }
        }
        return response
    }

    protected getAllHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        const promo = await PromotionModel.find()
        response = {
            status_code: 200,
            response_data: { data: promo }
        }
        return response
    }
    
}