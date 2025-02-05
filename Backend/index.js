import express from 'express' ;
import './config/dotenv.config.js' ;
import cors from 'cors' ;
import { errorHandler } from './Middlewares/applicationError.js';

const corsOptions = {
    origin : [process.env.FRONTEND_URL] ,
    allowedHeaders : '*' ,
    methods : ["GET", "POST", "PUT", "DELETE"] ,
    credentials : true
} ;

const server = express() ;
server.use(cors(corsOptions)) ;

server.use(express.json()) ;
server.use(express.urlencoded({extended : true})) ;

server.use(errorHandler) ;
export default server ;