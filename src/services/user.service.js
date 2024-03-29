import { BasicService } from "./basic.service";
import { getDefaultHeaders } from "./utils/get-default-headers.utils";

export class UserServices extends BasicService {
    controllerName="User/";

    constructor() {
        super();
        this.controllerPath = this.baseUrl + this.controllerName
    }

    async signIn(username , password , email) {
        const endPoint = `${this.controllerPath}signin`
        const response = await this.axiosInstance.get(endPoint , {
            params:{username , password , email},
            headers:getDefaultHeaders()
        });

        if(response?.data ) {
            return response.data;
        }
    }


    async getById(userId) {
        const endPoint = `${this.controllerPath}/byid`
        const response = await this.axiosInstance.get(endPoint , {
            params:{
                id:userId
            },
            headers:getDefaultHeaders()
        });

        if(response?.data ) {
            return response.data;
        }
    }


    async signUp(body) {
        const endPoint = `${this.controllerPath}signup`
        const formData = new FormData();
        formData.append("data" , JSON.stringify(body))
        const _headers = getDefaultHeaders();
        const response = await this.axiosInstance.post(endPoint  , formData , {
            headers:  {
                "Content-Type":"multipart/form-data",
                ..._headers
            },
            
        } )

        if(response.data) {
            return response.data;
        }
    }


    async deleteById(id) {
        const endPoint = `${this.controllerPath}/deletebyid`
        await this.axiosInstance.delete(endPoint , {
            params:{id},
            headers:getDefaultHeaders(),
        })
    }

    async putByData(data) {
        const endPoint = `${this.controllerPath}/putbydata`
        const form = new FormData();
        form.append("data" , JSON.stringify(data))
        const _headers = getDefaultHeaders()
        const response = await this.axiosInstance.put(endPoint , form , {
            headers:{
                "Content-Type":"multipart/form-data",
                ..._headers,
            }
        })

        if(response.data) {
            return response.data;
        }
    } 

}