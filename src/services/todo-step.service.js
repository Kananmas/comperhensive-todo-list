import { BasicService } from "./basic.service";
import { getDefaultHeaders } from "./utils/get-default-headers.utils";

export class TodoStepService extends BasicService {
    controllerName = "TodoSteps/"

    constructor() {
        super();
        this.controllerPath = this.baseUrl + this.controllerName
    }

    async getStepById(id) {
        const response = await this.axiosInstance.get(`${this.controllerPath}getstepsbyid` , {
            params:{id},
            headers:getDefaultHeaders(),
        })

        if(response.data) return response.data;
    }

    async getStepByTodoid(id) {
        const response  = await this.axiosInstance.get(`${this.controllerPath}getstepsbytodoid` , {
            params:{id},
            headers:getDefaultHeaders(),
        })

        if(response.data) return response.data;
    }

    async postStepByData(data) {
        const form = new FormData();
        form.append("data" , JSON.stringify(data));
        const _headers = getDefaultHeaders()
        const response = await this.axiosInstance.post(`${this.controllerPath}postbydata`, form , {
            headers:{
                "Content-Type":"multipart/form-data",
                ..._headers,
            }
        })

        if(response.data) return response.data;
    }

    async putStepByData(data) {
        const form = new FormData();
        form.append("data" , JSON.stringify(data))
        const _headers = getDefaultHeaders()
        const response = await this.axiosInstance.put(`${this.controllerPath}putbydata`, form , {
            headers:{
                "Content-Type":"multipart/form-data",
                ..._headers
            }
        })

        if(response.data) return response.data;
    }

    async deleteById(id) {
        await this.axiosInstance.delete(`${this.controllerPath}deletebyid` , {
            params:{id},
            headers:getDefaultHeaders(),
        })
    }
}