import express, {Request, Response} from 'express'
import { Product, ProductStore } from '../models/product'   

const store = new ProductStore()

const index = async (requestHnd: Request, responseHnd: Response) => {
    const products = await store.index()
    responseHnd.json(products)
}

const show = async (requestHnd: Request, responseHnd: Response) => { 
    let param: Number

    param  = parseInt(requestHnd.params['idprod'])
    const product = await store.show(param)
    responseHnd.json(product)
}

const products_routes_show = (app: express.Application) => {
    app.get('/product/:idprod?', show)
}


const products_routes = (app: express.Application) => {
    app.get('/products', index)
}





export {products_routes, products_routes_show}