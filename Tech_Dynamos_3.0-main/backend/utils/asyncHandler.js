//Replacing try and catch block and also calling  function in async await format

const asyncHandler = (asyncFunction) => {
    return async (req, res, next) => {
        try {
            await asyncFunction(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

module.exports = { asyncHandler };
