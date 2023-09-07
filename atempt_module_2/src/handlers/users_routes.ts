import express, {Request, Response} from 'express'
import { User, UsersApplication} from '../models/user'

const ListUsers = new UsersApplication()


const index = async (requestHnd: Request, responseHnd: Response) => {
    const UsersApp = await ListUsers.index()
    responseHnd.json(UsersApp)
}

const users_routes = (app: express.Application) => {
    app.get('/users', index)
}


export default users_routes