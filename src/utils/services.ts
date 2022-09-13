import axios, { AxiosRequestConfig } from "axios";

const API_URL = process.env.REACT_APP_SERVICES_API_URL;

const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };
