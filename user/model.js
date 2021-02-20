const User = require('./../data/models/User');

class UserModel {
    create(data) {
        User.create({
            fullName: data.fullname,
            username: data.username,
            email: data.email,
            password: data.password
        });        
    }
}
module.exports = UserModel;