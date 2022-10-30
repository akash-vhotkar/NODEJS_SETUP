const { UNAUTHORIZE_ERROR, UNAUTHORIZE_ERROR_CODE, VALIDATION_ERROR_CODE, VALIDATION_ERROR, SERVER_ERROR, SERVER_ERROR_CODE, API_FAILED, NOTFOUND_ERROR_CODE, NOTFOUND_ERROR } = require('../../constants/index');

function handelUnauthorize(res, message) {
    return res.status(UNAUTHORIZE_ERROR_CODE).json({ status: API_FAILED, requestStatus: false, statusCode: UNAUTHORIZE_ERROR_CODE, error: { type: UNAUTHORIZE_ERROR, message: message } });
}

function handelGatewayOut(res, message) {
    return res.status(504).json({ status: API_FAILED, statusCode: "504", requestStatus: false, error: { type: UNAUTHORIZE_ERROR, message: message } });
}

function handelValidationError(res, error, data) {
    const message = (error.details && error.details.length > 0) ? error.details[0].message : error;
    return res.status(VALIDATION_ERROR_CODE).json({ status: API_FAILED, requestStatus: false, statusCode: VALIDATION_ERROR_CODE, error: { type: VALIDATION_ERROR, message }, ...data });
}

function handelServerError(res, error) {
    if (process.env.NODE_ENV === 'development') console.log(error);
    logger.error(error);
    return res.status(SERVER_ERROR_CODE).json({ status: API_FAILED, requestStatus: false, statusCode: SERVER_ERROR_CODE, error: { type: SERVER_ERROR, message: error?.message || 'Something went wrong !' } });
}


function handelNoteFoundError(res, error, message) {
    if (process.env.NODE_ENV === 'development') console.log(error);
    logger.error(error);
    return res.status(NOTFOUND_ERROR_CODE).json({ status: NOTFOUND_ERROR, requestStatus: false, statusCode: NOTFOUND_ERROR_CODE, error: { type: NOTFOUND_ERROR, message: message || 'Something went wrong !' } });
}


module.exports = {
    handelServerError,
    handelUnauthorize,
    handelValidationError,
    handelGatewayOut,
    handelNoteFoundError
}