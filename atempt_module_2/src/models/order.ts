import Client from "../database"


export type Order = {
    idOrder: Number;
    idCustomer: Number;
    idProduct: Number;
    quantity: Number;
    statusorder: Number;
}


export class OrderStored{
    async index(): Promise <Order[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * FROM ORDERS'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        }catch(Err){
            console.log (`Cannot connect ${Err}`)   
        }   
        return [] 
    }

}
