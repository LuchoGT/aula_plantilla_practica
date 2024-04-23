import { User } from "@/interfaces/user";
import Service from "./Service";

class ApiService extends Service{



    async getLogin({name,password}:User){
        try {
            const {data} = await this.http.post('/api/v1/auth',{name,password});
            console.log(data);
            
        } catch (error) {
            console.log('getLoginError',{error});
            
        }
    }
    
}

export default ApiService;