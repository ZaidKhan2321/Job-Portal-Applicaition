import server from "./index.js";

server.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at port ${process.env.PORT}`);
}) ;