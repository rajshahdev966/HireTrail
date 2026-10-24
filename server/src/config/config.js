import dotenv from "dotenv"
dotenv.config()


const config ={
    MONGO_URI: process.env.MONGO_URI,
    ACCESS_SECRET_TOKEN: process.env.ACCESS_SECRET_TOKEN,
    REFRES_SECRET_TOKEN: process.env.REFRES_SECRET_TOKEN,
    PORT: process.env.PORT,
}

export default config