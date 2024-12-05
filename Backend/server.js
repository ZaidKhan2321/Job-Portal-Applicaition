import server from "./index.js";
import {connectUsingMongoose} from './config/mongoose.config.js' ;

server.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at port ${process.env.PORT}`);
    connectUsingMongoose() ;
}) ;