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

server.use(express.json()) ;
server.use(express.urlencoded({extended : true})) ;

export default server ;