//for async await and try catch functions

const asyncHandler = (requestHandler) =>{
   //higher order functions - return is important
    return (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>{next(err)})
    }
}

export { asyncHandler }