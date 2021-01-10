exports.handler = async (event) =>{
    const response = {
        statusCode : 200,
        body : JSON.stringify('Hola desde lambda!!')
    };
    return response;
}