import { BasicService } from "./basic.service";

export class TodoStepService extends BasicService {
    controllerName = "TodoSteps/"

    constructor() {
        super();
        this.controllerPath = this.baseUrl + this.controllerName
    }

    async getStepById(id) {
        const response = await this.axiosInstance.get(`${this.controllerPath}/getstepbyid` , {
            params:{id}
        })

        if(response.data) return response.data;
    }

    async getStepByTodoid(id) {
        const response  = await this.axiosInstance.get(`${this.controllerPath}/getstepbytodoid` , {
            params:{id}
        })

        if(response.data) return response.data;
    }

    async postStepByData(data) {
        const response = await this.axiosInstance.post(`${this.controllerPath}/postbydata` , {
            body:JSON.stringify(data)
        })

        if(response.data) return response.data;
    }

    async putStepByData(data) {
        const response = await this.axiosInstance.put(`${this.controllerPath}/putbydata` , {
            body:JSON.stringify(data),
        })

        if(response.data) return response.data;
    }

    async deleteById(id) {
        await this.axiosInstance.delete(`${this.controllerPath}/deletebyid` , {
            params:{id}
        })
    }
}