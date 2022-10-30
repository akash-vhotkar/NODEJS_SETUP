const { SUCCESS, SUCCESS_CODE, CREATED_SUCCESS, CREATED_SUCCESS_CODE } = require('../../constants/index');

function handelSuccess(res, data) {
    // todo logger need to be added 
    return res.status(SUCCESS_CODE).json({ statusCode: SUCCESS_CODE, requestStatus: true, status: SUCCESS, result: data });
}

function handelSuccessOther(res, data, code) {
    // todo logger need to be added
    return res.status(code || 201).json({ statusCode: code || 201, requestStatus: true, status: CREATED_SUCCESS, result: data });
}

module.exports = { handelSuccess, handelSuccessOther };