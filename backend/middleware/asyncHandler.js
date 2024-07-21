const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncHandler;


// this is our package we have made to avoid async hadnler from express-async third party aand to avoid try and catch