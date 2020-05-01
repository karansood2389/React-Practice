const ENV_URL = 'https://jsonplaceholder.typicode.com';

const errorHandler = (error) => {
    console.log(error);
    return Promise.reject(error);
} 

const requestHandler = request => {
    console.log(request);
    return request;
}

const responseHandler = response => {
    console.log(response);
    return response;    
}

const commonValue = 'AUTH_TOKEN';

const postValue = 'application/json';

export default {
    baseURL: ENV_URL,
    commonValue,
    postValue,
    errorHandler,
    requestHandler,
    responseHandler
};