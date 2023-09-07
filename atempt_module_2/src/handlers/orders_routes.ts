import express, {Request, Response} from 'express'
import { Order, OrderStored } from '../models/order'

const store = new OrderStored()

const index = async (requestHnd: Request, responseHnd: Response) => {
    const orders = await store.index()
    responseHnd.json(orders)
}

const orders__routes = (app: express.Application) => {
    app.get('/orders', index)
}

export default  orders__routes