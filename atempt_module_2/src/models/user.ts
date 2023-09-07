import Client from "../database"


export type User = {
    id: string;
    name:string;
    lastname: string;
    password: string;
}

export class UsersApplication{
    async index(): Promise <User[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * FROM USERS'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        }catch(err){
            console.log (`Cannot connect ${err}`)        
       }
       return [] 
   }
}