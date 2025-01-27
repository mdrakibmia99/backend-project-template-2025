import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.join(process.cwd(),'.env')})

export default {
    database_uri:process.env.DATABASE_URL,
    port:process.env.PORT,
    bcrypt_salt_round:process.env.BCRYPT_SALT_ROUND
}
