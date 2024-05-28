import { User } from "@/interfaces/user";
import Service from "./Service";

class ApiService extends Service {


  async getLogin({ name, password }: User): Promise<any> {
    try {
      const response = await this.http.post("/api/v1/auth", { name, password });
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async register({ name, password }: User): Promise<any> {
    try {
      const response = await this.http.post("/api/v1/auth/register", { name, password });
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async checkAuthToken(): Promise<any> {
    try {
      const response = await this.http.get("/api/v1/auth/renew");
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }


  // async updateUser({ name, password, profile }: User): Promise<any> {
  //   try {
  //     const response = await this.http.put(`/api/v1/auth/${localStorage.getItem('userId')}`, {
  //       username: name,
  //       password,
  //       profile,
  //     });
  //     return this.handleResponse(response);
  //   } catch (error) {
  //     throw new Error('Error al actualizar el usuario');
  //   }
  // }

  async updateUser2({ name, password, profile }: User): Promise<any> {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('No se ha encontrado el ID de usuario en el almacenamiento local');
      }

      const response = await this.http.put(`/api/v1/auth/update/${userId}`, {
        username: name,
        password,
        profile,
      });

      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateUser(userId: string, updateData: Partial<User>): Promise<any> {
    try {
      const response = await this.http.put("/api/v1/auth/updateuser", { userId, ...updateData });
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

}

export default ApiService;
