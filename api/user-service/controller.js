const userService  = require('./service');
const { handelValidationError, handelServerError } = require("@lib/error-handler/index");
const { handelSuccess, handelSuccessOther } = require('@lib/success-handler/index');

class userController  {
    async getAllUsers(req, res){
        try {
            const data  = await  userService.getAllUsers();
            return handelSuccess(res, { message: "customer successfully creaated", data })
      
        }
        catch(error){
            return handelServerError(res , error);
        }
    }
    async createNewUser(req, res){
        try {
            const newuser  = await userService.createNewUser(req.body);
        return handelSuccess(res, {message : "New user created successfully."})

        }
        catch(error ){
            return handelServerError(res , error);
        }
    }
    async findUserById(req, res){
        try {
            const data  = await userService.findUserId(req.params.id);
            return data;
        }
        catch(error){
            return handelServerError(res , error);
        }
    }
}

module.exports  = new userController();
