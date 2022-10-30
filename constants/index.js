const PASSWORD_PATTERN = /(?=^.{8,64}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])(?!.*\s).*$/;

/**************** API STATUS  **********/
const API_FAILED = 'FAILED';

/********** UNAUTHORIZE ERROR   ************/
const UNAUTHORIZE_ERROR = 'UNAUTHORIZE_ERROR';
const UNAUTHORIZE_ERROR_CODE = 401;

/***************  VALIDATION ERROR ***************/
const VALIDATION_ERROR = 'VALIDATION_ERROR';
const VALIDATION_ERROR_CODE = 400;

/************** SERVER ERROR  ************/
const SERVER_ERROR = 'SERVER_ERROR';
const SERVER_ERROR_CODE = 500;

/********** SUCCESS TYPES  ***********/
const SUCCESS = 'SUCCESS';
const SUCCESS_CODE = 200;

const CREATED_SUCCESS = 'CREATED';
const CREATED_SUCCESS_CODE = 201;

/********** NOTFOUNT ERROR   ************/
const NOTFOUND_ERROR = 'NOTFOUND_ERROR';
const NOTFOUND_ERROR_CODE = 404;


module.exports = {
    PASSWORD_PATTERN,
    UNAUTHORIZE_ERROR,
    UNAUTHORIZE_ERROR_CODE,
    VALIDATION_ERROR,
    VALIDATION_ERROR_CODE,
    SUCCESS,
    SUCCESS_CODE,
    CREATED_SUCCESS,
    CREATED_SUCCESS_CODE,
    SERVER_ERROR,
    SERVER_ERROR_CODE,
    API_FAILED,
    NOTFOUND_ERROR,
    NOTFOUND_ERROR_CODE
};
