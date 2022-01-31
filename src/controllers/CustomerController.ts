import BaseCrudController from './BaseCrudController'
import { Request, Response, NextFunction, Router } from 'express'
import { IControllerResponse } from '../models/ICrudController'
import CustomerModel from '../models/mongoose/CustomerModel'

export default class CustomerController extends BaseCrudController {
    
    protected createRouter = () => {
        const router = Router()
        router.get('/customers/:id', this.get)
        router.get('/customers', this.getAll)
        router.post('/customers', this.create)
        return router
    }

    protected createHandler = async (req: Request): Promise<IControllerResponse> => {
        // add some kind of validator here
        let response: IControllerResponse
        const customer = await CustomerModel.create(req.body)
        response = {
            status_code: 200,
            response_data: { data: customer }
        }

        return response
    }
    protected getOneHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        
        const customer = await CustomerModel.findOne()
        response = {
            status_code: 200,
            response_data: { data: customer }
        }
        return response
    }

    protected getAllHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        const customer = await CustomerModel.find()
        response = {
            status_code: 200,
            response_data: { data: customer }
        }
        return response
    }
    
}