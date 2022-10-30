const joi = require("@hapi/joi");
const { PASSWORD_PATTERN } = require('@constant/index');

const email = joi.string().trim().email({ minDomainSegments: 2 }).required().messages({
    'string.base': `Email should be a type of 'text'`,
    'string.empty': `Email cannot be an empty field`,
    'string.email': `Email should be valid`,
    'any.invalid': `Email cannot be an empty field`,
    'any.required': `Email required`
});

const password = joi.string().trim().pattern(PASSWORD_PATTERN).label("Password").required().messages({
    'string.base': `Password should be a type of 'text'`,
    'string.empty': `Password cannot be an empty field`,
    'string.min': `Password should contain atleast 8 characters`,
    'any.invalid': `Password cannot be an empty field`,
    'any.required': `Password required`,
    'string.pattern.base': `Password should contain least 8 characters,minimum of 1 uppercase character [A-Z] , minimum of 1 numeric character [0-9],minimum of 1 special character: ~!@#$%`
})

const getJoimessages = (label, type) => {
    return {
        'string.base': `${label} should be a type of ${type}`,
        'string.empty': `${label} cannot be an empty field`,
        'string.invalid': `${label} cannot be an empty field`,
        'boolean.base': `${label} should be a type of ${type}`,
        'boolean.empty': `${label} cannot be an empty field`,
        'boolean.invalid': `Please select ${label}`,
        'number.base': `${label} should be a type of ${type}`,
        'number.empty': `Invalid ${label} value`,
        'number.invalid': `${label} cannot be an empty field`,
        'any.required': `${label} required`
    }

}


module.exports = {
    EmailValidation: email,
    PasswordValidation: password,
    getJoimessages
}