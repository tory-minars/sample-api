import BaseCrudController from './BaseCrudController'
import { Request, Response, NextFunction, Router } from 'express'
import { IControllerResponse } from '../models/ICrudController'
import OrderModel from '../models/mongoose/OrderModel'
import OrderService from '../services/OrderService'
import { OrderEmitter } from '../events/OrderEvent'

export default class OrderController extends BaseCrudController {
    private os = new OrderService()
    protected createRouter = () => {
        const router = Router()
        router.get('/orders/:order_id', this.get)
        router.get('/orders', this.getAll)
        router.post('/orders', this.create)
        router.delete('/orders/:order_id', this.delete)
        return router
    }

    protected createHandler = async (req: Request): Promise<IControllerResponse> => {
        // add some kind of validator here
        let response: IControllerResponse
        const modified_order = this.os.newOrder(req.body)
        const order = await OrderModel.create(modified_order)
        const total = this.os.calculateTotal(order)
        order.total = total
        response = {
            status_code: 200,
            response_data: { data: order }
        }
        OrderEmitter.emit('completeOrder', order)
        return response
    }
    protected getOneHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        const order = await OrderModel.findOne(req.body)
        response = {
            status_code: 200,
            response_data: { data: order }
        }
        return response
    }

    protected getAllHandler = async (req: Request): Promise<IControllerResponse> => {
        let response: IControllerResponse
        const order = await OrderModel.find()
        response = {
            status_code: 200,
            response_data: { data: order }
        }
        return response
    }
    
}