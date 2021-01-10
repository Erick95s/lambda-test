const moment = require("moment");

exports.handler = async (event) =>{
    const response = {
        statusCode : 200,
        body : JSON.stringify({fecha:moment().format('dddd')})
    };
    return response;
}