const { constants } = require('../constants');
// FUNCTION TO DISPLAY PROPER ERROR MESSAGES IN POSTMAN
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'VALIDATION FAILED',
                Error: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: 'NOT FOUND',
                Error: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: 'UNAUTHORIZED',
                Error: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: 'FORBIDDEN',
                Error: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: 'SERVER ERROR',
                Error: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log('NO ERROR');
            break;
    }
};

module.exports = errorHandler;
