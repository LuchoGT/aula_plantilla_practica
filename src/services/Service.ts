import { Constants } from '@/constants/public.constants';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class Service {

  protected http: AxiosInstance;

  protected baseUrl: string = Constants.APP_API_URL;

  protected headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };


  constructor() {
    const token = localStorage.getItem('token');
    const authorizationToken = token ? { 'x-token': token } : {};

    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        ...this.headers,
        ...authorizationToken,
      },
    });
  }

 

  protected handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  // protected handleError(error: AxiosError): void {
  //   console.error('API Error:', error.response?.data ?? error.message);
  //   throw error;
  // }
}

export default Service;
