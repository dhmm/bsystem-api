module.exports = (app) => {        
    app.use('/user' , require('./user/router'));
}