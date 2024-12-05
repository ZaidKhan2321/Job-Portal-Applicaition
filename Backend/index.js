import express from 'express' ;
import './config/dotenv.config.js' ;
import cors from 'cors' ;

const corsOptions = {
    origin : [process.env.FRONTEND_URL] ,
    allowedHeaders : '*' ,
    methods : ["GET", "POST", "PUT", "DELETE"] ,
    credentials : true
} ;

const server = express() ;
server.use(cors(corsOptions)) ;

export default server ;