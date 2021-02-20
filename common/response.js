module.exports = (message = '', error = false ,  data = null) => {
    var response = {                     
        error : error ,
        message : message ,
        data : data
    }
    return JSON.stringify(response);
}