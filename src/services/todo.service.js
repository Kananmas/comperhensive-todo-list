import { BasicService } from "./basic.service";
import { getDefaultHeaders } from "./utils/get-default-headers.utils";

export class TodoService extends BasicService {
    controllerName = "Todos/"

    constructor() {
        super();
        this.controllerPath = this.baseUrl + this.controllerName
    }

    async getTodoById(id) {
        const response  = await this.axiosInstance.get(`${this.controllerPath}gettodobyid`, {
            params:{id},
            headers:getDefaultHeaders()
        });

        if(response.data) return response.data;
    }
    async getByTodosByUserId() {
        const response  = await this.axiosInstance.get(`${this.controllerPath}gettodobyuserid`, {
            headers: getDefaultHeaders(),
        });

        if(response.data) return response.data;
    }

    async postTodoByData(data) {
        const form = new FormData();
        form.append("data" , JSON.stringify(data))
        const _headers = getDefaultHeaders();
        const response  = await this.axiosInstance.post(`${this.controllerPath}postbydata` , form , {
            headers:{
                "Content-Type":"multipart/form-data",
                ..._headers
            }
        })

        return response.data;
    }

    
    async putTodoByData(data) {
        const form = new FormData();
        form.append("data" , JSON.stringify(data))
        const _headers = getDefaultHeaders()
        const response  = await this.axiosInstance.put(`${this.controllerPath}putbydata` , form,  {
            headers:{
                "Content-Type":"multipart/form-data",
                ..._headers
            }
        })

        return response.data;
    }


    async deleteById(id) {
        await this.axiosInstance.delete(`${this.controllerPath}deletebyid`, {
            params:{id},
            headers:getDefaultHeaders(),
        });
    }
}