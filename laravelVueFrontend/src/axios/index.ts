import axios , { AxiosRequestConfig ,AxiosInstance } from "axios";

export const axiosInstance : AxiosInstance = axios.create({
    baseURL: "http://laraveltodo.test:9090/api/v1/",

})

interface IAxiosConfig<AxiosRequestConfig> {
 baseUrl : string,
}