import { Router } from 'express'
import CustomerController from './controllers/CustomerController'
import ItemController from './controllers/ItemController'
import OrderController from './controllers/OrderController'

const routes = Router()
const CustomerCtrl = new CustomerController()
const ItemCtrl = new ItemController()
const OrderCtrl = new OrderController()

routes.use('/v1', OrderCtrl.getRouter())
routes.use('/v1', ItemCtrl.getRouter())
routes.use('/v1', CustomerCtrl.getRouter())

export default routes