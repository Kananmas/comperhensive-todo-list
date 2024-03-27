import { BasicService } from "./basic.service";

export class TodoService extends BasicService {
    controllerName = "Todos/"

    constructor() {
        super();
        this.controllerPath = this.baseUrl + this.controllerName
    }

    async getTodoById(id) {
        const response  = await this.axiosInstance.get(`${this.controllerPath}/gettodobyid`, {
            params:{id}
        });

        if(response.data) return response.data;
    }
    async getByTodosByUserId(userId) {
        const response  = await this.axiosInstance.get(`${this.controllerPath}/gettodobyuserid`, {
            params:{userId}
        });

        if(response.data) return response.data;
    }

    async postTodoByData(data) {
        const form = new FormData();
        form.append("data" , JSON.stringify(data))
        const response  = await this.axiosInstance.post(`${this.controllerPath}/postbydata` , from , {
            headers:{
                "Content-Type":"application/json"
            }
        })

        return response.data;
    }

    
    async postTodoByData(data) {
        const form = new FormData();
        form.append("data" , JSON.stringify(data))
        const response  = await this.axiosInstance.put(`${this.controllerPath}/putbydata` , form,  {
            headers:{
                "Content-Type":"application/json"
            }
        })

        return response.data;
    }


    async deleteById(id) {
        await this.axiosInstance.get(`${this.controllerPath}/deletebyid`, {
            params:{id}
        });
    }
}