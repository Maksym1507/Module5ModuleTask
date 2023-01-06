import { ICreateUpdateUser } from "../../interfaces/createUpdateUser";
import apiClient from "../client";

export const getUserById = (id: string) =>
  apiClient({
    path: `users/${id}`,
    method: "GET",
  });

export const getUsersByPage = (page: number) =>
  apiClient({
    path: `users?page=${page}`,
    method: "GET",
  });

export const createUser = (createUser: ICreateUpdateUser) =>
  apiClient({
    path: `users`,
    method: "POST",
    data: createUser,
  });

export const updateUser = (updateUser: ICreateUpdateUser, id: number) =>
  apiClient({
    path: `users/${id}`,
    method: "PUT",
    data: updateUser,
  });
