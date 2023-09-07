import bcrypt from 'bcrypt'
import dot from 'dotenv
import Client from '../database'
import jwt from 'jwttoken'

{
  SALT_ROUND, 
  FRASE,
  
} = process.env

async Authentication (Res: Response, Req: Request): Promise <String | null>=> {

let userLog
let passLog
let passwdEncrip
let resultKey

userLog = Res.body.login 
passLog = Res.body.password
   const Conn  = await Client.connect()
   const sql = 'SELECT password FROM USERS  WHERE iduser = ($1) '
   const result = conn.query(sql, [userLog])
   const passwdBD = result.rows[0]

   conn.release()

   // Encriptar password
   passwdEncrip = ( passLog + FRASE , SALT)

   
   
   if (bcrypt.compareSync(passwdBD + , passLog)) {

      // Generar Key
       resultKey =  jwt.login()
      return    resultKey
   
   }
   

}

