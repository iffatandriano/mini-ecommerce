import axios from "axios";
import { CategoriesResponses, ProductResponses } from "./types";

const API_URL = process.env.REACT_APP_SERVICES_API_URL;

const axiosClient = axios.create({ baseURL: API_URL });
// const config: AxiosRequestConfig = { withCredentials: true };

export const getProductsHomes = () =>
  axiosClient.get<ProductResponses>("products", { params: { limit: 6 } });

export const getProductsHomesAll = () =>
  axiosClient.get<ProductResponses>("products");

export const getAllCategories = () =>
  axiosClient.get<CategoriesResponses>("products/categories");
