import Client from "../database"


export type Product = {
    id: Number;
    name:string;
    price: Number;
    stock: Number;
}


export class ProductStore{
    async index(): Promise <Product[]> {
     
     try{
         const conn = await Client.connect()
         const sql = 'SELECT * FROM PRODUCTS'
         const result = await conn.query(sql)
         conn.release()
         return result.rows
     }catch(err){
         console.log (`Cannot connect ${err}`)
         
     }
     return [] 
    }


    

    async show(id:Number): Promise<Product> {
        let resultQuery
        
        try{
            const conn = await Client.connect()
            const sql = 'SELECT * FROM PRODUCTS WHERE ID = $1'
            const result = await conn.query(sql,[id])

            //client.query("DELETE FROM vehiculo WHERE vehiculo_id= $1", [id], function (err, result)

            conn.release()
            resultQuery = result.rows[0]
        } catch(err){
            console.log (`Cannot show product: ${err}`)
        }
        
        return resultQuery
    }
 
 }