import dotenv from 'dotenv'
import { Pool }  from 'pg'

dotenv.config()


const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB_TEST,
    ENV,
} = process.env


console.log (ENV)
console.log('connected..')

let DATABASE_APP

if (ENV == 'test'){
    DATABASE_APP = POSTGRES_DB_TEST
}else{
    DATABASE_APP = POSTGRES_DB
}

const client = new Pool({
        host:POSTGRES_HOST,
        database: DATABASE_APP,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
       
})


export default client

