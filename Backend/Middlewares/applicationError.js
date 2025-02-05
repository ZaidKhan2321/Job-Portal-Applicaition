export default class ApplicationError extends Error{
    constructor(message, statuscode){
        super(message) ;
        this.statuscode = statuscode ;
    }
}

export const errorHandler = (err, req, res, next) => {
    err.statuscode = err.statuscode || 500 ;
    err.message = err.message || "Internal server error" ;
    
    if(err.name === "CastError"){
        const message = `Invalid ${err.path}` ;
        err = new ApplicationError(message, 400) ;
    }
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered` ;
        err = new ApplicationError(message, 400) ;
    }
    if(err.name === "JsonWebTokenError"){
        const message = `JSON web token is invalid. Try again` ;
        err = new ApplicationError(message, 400) ;
    }
    if(err.name === "TokenExpiredError"){
        const message = `JSON web token expired. Try again` ;
        err = new ApplicationError(message, 400) ;
    }

    return res.status(err.statuscode).json({
        success : false,
        message : err.message
    }) ;
} ;