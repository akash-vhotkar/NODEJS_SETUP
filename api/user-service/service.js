const userModel = require("./model");
const { handelValidationError, handelServerError } = require("@lib/error-handler/index");

class userService {
  async findUserId(id) {
    try {
      const data = await userModel.findById(id);
      return data;
    } catch (error) {
        return  new Error("Something went wrong");

    }
  }
  async createNewUser(data){
    try {
        const isSuccess  = await userModel.create(data);
        return isSuccess;
    }
    catch(error){
        return new Error('Something went wrong');
    }
  }
  async FetchallUSers(){
    try {
         const data  = await  userModel.find();
         return data;
    }
    catch(error ){
        return new Error('Something went wront');
    }
  }
}

module.exports  = new  userService();
