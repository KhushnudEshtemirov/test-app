import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const httpGet = (params: any) =>
  httpClient({
    method: "get",
    ...params,
  });

export const httpPost = (params: any) =>
  httpClient({
    method: "post",
    ...params,
  });

export const httpPut = (params: any) =>
  httpClient({
    method: "put",
    ...params,
  });

export const httpPatch = (params: any) =>
  httpClient({
    method: "patch",
    ...params,
  });

export const httpDelete = (params: any) =>
  httpClient({
    method: "delete",
    ...params,
  });
