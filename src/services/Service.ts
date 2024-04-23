import { Constants } from '@/constants/public.constants';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Service {

  protected http: AxiosInstance;

  protected baseUrl: string = Constants.APP_API_URL;

  protected headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  constructor() {

    this.http = this.setupInterceptors(axios.create({
        baseURL: this.baseUrl,
        headers: this.headers,
    })) 
  }

  private setupInterceptors(instance: AxiosInstance): AxiosInstance {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        config.headers = {
          ...config.headers,
          'x-token': localStorage.getItem('token') || '', // Ensure the token is not null or undefined
        };
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Here you can add logic to handle responses before promises resolve.
        // For example, check and handle specific status codes.
        return response;
      },
      (error) => {
        // Here you can handle response errors.
        return Promise.reject(error);
      }
    );

    return instance;
  }
}

export default Service;
