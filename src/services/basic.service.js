import axios from "axios";

const reactAppBaseUrl = process.env.REACT_APP_BASE_URL;

export class BasicService  {
    controllerName = "";
    baseUrl= reactAppBaseUrl;
    controllerPath = this.baseUrl + this.controllerName;
    axiosInstance = axios;
}