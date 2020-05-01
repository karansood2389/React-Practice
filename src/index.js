import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
import ENV_CONST from "./environment/environmentDev";

axios.defaults.baseURL = ENV_CONST.baseURL;
axios.defaults.headers.common['Authorization'] = ENV_CONST.commonValue;
axios.defaults.headers.post['Content-Type'] = ENV_CONST.postValue;

axios.interceptors.request.use( ENV_CONST.requestHandler , ENV_CONST.errorHandler );

axios.interceptors.response.use( ENV_CONST.responseHandler , ENV_CONST.errorHandler );

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
