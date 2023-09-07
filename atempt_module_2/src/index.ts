import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import {products_routes, products_routes_show } from './handlers/products_routes'
import users_routes from './handlers/users_routes';
import orders_routes from './handlers/orders_routes';



const port = 3000;

const app: express.Application = express()

app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log(`server started at http://localhost:${port}`);

});



app.get('/api', (req: Request, res: Response) => {
    res.send('server working OK');
});


products_routes(app)
products_routes_show(app)
users_routes(app)
orders_routes(app)

