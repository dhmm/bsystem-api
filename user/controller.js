const response = require('./../common/response');
const model = new require('./model');
const UserModel = new model();

class UserController {
    create(req, res) {        
        let data = req.body;
        if (data.fullname!=null && data.username!=null && data.email!=null && data.password!=null) {
            UserModel.create(data);
            res.send(response('Succesfully registered'));
        } else {            
            res.send(response('Please complete all fields' , true));
        }        
    }
}
module.exports = UserController;