import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI) ;
        console.log("MongoDB connected using mongoose");
    }catch(err){
        console.log(`Error while connecting to database, error : ${err}`);
    }
} ;