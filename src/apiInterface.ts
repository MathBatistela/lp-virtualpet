import axios, { AxiosResponse } from "axios";
import { IPet, IUser, IUserActions } from "./interfaces";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Pet = {
  getPets: (): Promise<{ data: IPet[] }> => requests.get("api/vpet"),
  getPet: (id: number): Promise<{ vpet: IPet }> =>
    requests.get(`api/vpet/${id}`),
  createPet: (pet: IPet): Promise<IPet> => requests.post("api/vpet", pet),
  updatePet: (pet: IPet, id: number): Promise<IPet> =>
    requests.put(`api/vpet/${id}`, pet),
  deletePet: (id: number): Promise<void> => requests.delete(`api/vpet/${id}`),
};

export const User = {
  getUsers: (): Promise<{ data: IUser[] }> => requests.get("api/user"),
  getUser: (id: number): Promise<{ user: IUser }> =>
    requests.get(`api/user/${id}`),
  createUser: (user: IUser): Promise<IUserActions> =>
    requests.post("api/user", user),
  updateUser: (user: IUser, id: number): Promise<IUserActions> =>
    requests.put(`api/user/${id}`, user),
  deletePet: (id: number): Promise<void> => requests.delete(`api/user/${id}`),
};
