const joi = require('@hapi/joi');
const { handelValidationError, handelServerError } = require("@lib/error-handler/index");
const { EmailValidation } = require("@api/validator");


const ValidateCreateConsumerData = async (req, res, next) => {
    try {
        const schema = joi.object({
            email: EmailValidation
        })
        const { error } = schema.validate(req.body);
        if (error) {
            return handelValidationError(res, error);
        }
        else {
            next();
        }

    }
    catch (error) {
        return handelServerError(res, error);

    }
}
module.exports = { ValidateCreateConsumerData };
